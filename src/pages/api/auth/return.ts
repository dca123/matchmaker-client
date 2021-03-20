import nc from 'next-connect';
import passport from 'passport';
import auth from '@/middlewares/auth';

const handler = nc()
  .use(auth)
  .get(passport.authenticate('steam'), (_req, res) => {
    res.statusCode = 302;
    res.setHeader('Location', '/login');
    res.end();
  });

export default handler;
