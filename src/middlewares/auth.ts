import nextConnect, { IncomingMessage } from 'next-connect';
import session from 'express-session';
import Redis from 'ioredis';
import redisStore from 'connect-redis';
import passport from '@/libs/passport';
import endpointsConfig from 'endpoints.config';

const redis = new Redis(endpointsConfig.REDIS_URI);
const RedisStore = redisStore(session);

const auth = nextConnect()
  .use(
    session({
      store: new RedisStore({ client: redis }),
      secret: endpointsConfig.SESSIONS_KEY,
      cookie: {},
    })
  )
  .use((req: IncomingMessage, _res, next) => {
    req.session.users = req.session.users || [];
    next();
  })
  .use(passport.initialize())
  .use(passport.session());

export default auth;
