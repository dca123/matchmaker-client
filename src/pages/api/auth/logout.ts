import nextConnect, { IncomingMessage } from 'next-connect';
import auth from '@/middlewares/auth';

const handler = nextConnect();

handler.use(auth).get((req: IncomingMessage, res) => {
  req.logOut();
  res.statusCode = 302;
  res.setHeader('Location', '/login');
  res.end();
});

export default handler;
