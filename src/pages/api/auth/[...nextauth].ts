import NextAuth, { Callbacks, InitOptions, User } from 'next-auth';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { Profile } from 'next-auth/adapters';
import { GenericObject, SessionBase } from 'next-auth/_utils';
import endpoint from '../../../../endpoints.config';

type sessionUser = User & {
  id: string;
  sub: string;
  steamID: string;
};

type steamSessionBase = SessionBase & {
  user: sessionUser;
};

type steamProfile = Profile & {
  steamID: string;
};

type discordConnection = {
  id: string;
  type: string;
};

const callbacks: Callbacks = {
  async jwt(token, user: sessionUser) {
    // Add access_token to the token right after signin
    if (user && user.steamID !== undefined) {
      const newToken = token;
      newToken.steamID = user.steamID;
      return newToken;
    }
    return token;
  },
  async session(session: steamSessionBase, token: sessionUser) {
    // Add property to session, like an access_token from a provider.
    if (token.steamID) {
      const newSession = session;
      newSession.user.id = token.sub;
      newSession.user.steamID = token.steamID;
      return newSession;
    }
    return session;
  },
};

const options: InitOptions = {
  providers: [
    {
      id: 'discord',
      name: 'Discord',
      type: 'oauth',
      version: '2.0',
      clientId: endpoint.DISCORD_CLIENT_ID,
      clientSecret: endpoint.DISCORD_CLIENT_SECRET,
      scope: 'identify email connections',
      params: {
        grant_type: 'authorization_code',
      },
      accessTokenUrl: 'https://discord.com/api/oauth2/token',
      authorizationUrl:
        'https://discord.com/api/oauth2/authorize?response_type=code&prompt=none',
      profileUrl: 'https://discord.com/api/users/@me',
      async profile(
        profile: GenericObject,
        tokens: GenericObject
      ): Promise<steamProfile> {
        const newProfile = profile;
        if (profile.avatar === null) {
          const defaultAvatarNumber = parseInt(profile.discriminator, 10) % 5;
          newProfile.image_url = `https://cdn.discordapp.com/embed/avatars/${defaultAvatarNumber}.png`;
        } else {
          const format = profile.avatar.startsWith('a_') ? 'gif' : 'png';
          newProfile.image_url = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.${format}`;
        }
        const steamConnectionResponse = await fetch(
          'https://discord.com/api/users/@me/connections',
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${tokens.accessToken}`,
            },
          }
        );
        const steamConnectionsJson = await steamConnectionResponse.json();
        const steamID = steamConnectionsJson.reduce(
          (acc: string, cur: discordConnection) => {
            if (cur.type !== 'steam') {
              return acc;
            }
            if (cur.type === 'steam') {
              return cur.id;
            }
            return '';
          },
          ''
        );
        return {
          id: newProfile.id,
          name: newProfile.username,
          image: newProfile.image_url,
          email: newProfile.email,
          steamID,
        };
      },
    },
  ],
  jwt: {
    signingKey: endpoint.JWT_SIGNING_KEY,
  },
  callbacks,
};

const Auth: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);
export default Auth;
