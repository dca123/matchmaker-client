import endpointsConfig from 'endpoints.config';
import passport from 'passport';
import { Strategy } from 'passport-steam';
import { SteamResponse, User } from 'src/types/global';

const strategy = new Strategy(
  {
    returnURL: `${endpointsConfig.AUTH_URL}/api/auth/return`,
    realm: `${endpointsConfig.AUTH_URL}`,
    apiKey: process.env.API_KEY,
  },
  async (
    _identifier: string,
    profile: SteamResponse,
    done: (error: null, user: Partial<User>) => void
  ) => {
    const newUser = {
      steamid: profile.id,
      name: profile.displayName,
      imageUrl: profile.photos[2].value,
    };
    return done(null, newUser);
  }
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj: User, done) => {
  done(null, obj);
});

passport.use(strategy);
export default passport;
