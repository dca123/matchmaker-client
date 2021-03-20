import nextConnect, { IncomingMessage, ServerResponse } from 'next-connect';
import auth from '@/middlewares/auth';

const handler = nextConnect();

handler.use(auth).get((req: IncomingMessage, res: ServerResponse) => {
  res.json({ user: req.user });
});

export default handler;
