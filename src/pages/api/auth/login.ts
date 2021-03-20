import nextConnect from 'next-connect';
import auth from '@/middlewares/auth';
import passport from '@/libs/passport';

const handler = nextConnect();

handler.use(auth).get(passport.authenticate('steam'));

export default handler;
