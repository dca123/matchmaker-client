import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import endpoint from '../../../../endpoints.config';

const options = {
  site: endpoint.NEXTAUTH_URL,
  providers: [
    Providers.Discord({
      clientId: endpoint.DISCORD_CLIENT_ID,
      clientSecret: endpoint.DISCORD_CLIENT_SECRET,
    }),
  ],
};

const Auth: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);
export default Auth;
