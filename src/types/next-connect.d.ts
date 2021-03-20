import { Session } from 'express-session';
import { User } from './global';

declare module 'next-connect' {
  export interface IncomingMessage {
    session: Session & {
      users: Array<string>;
    };
    logOut: () => void;
    user: User;
  }
  export interface ServerResponse {
    json: (data: Record<string, User>) => void;
  }
}
