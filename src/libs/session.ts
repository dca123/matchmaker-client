import useSWR from 'swr';
import Router from 'next/router';
import { User, userRequestPayload } from 'src/types/global';

export const fetcher = (url: string): Promise<userRequestPayload> =>
  fetch(url).then((r) => r.json());

export function useSession(): [User | undefined, boolean, boolean] {
  const { data, error } = useSWR<userRequestPayload, boolean>(
    `/api/auth/user`,
    fetcher
  );
  let returnError = error;
  if (returnError === undefined) {
    returnError = false;
  }
  const loading = !data;
  const user = data?.user;
  return [user, loading, returnError];
}

export const signIn = (): Promise<boolean> => Router.push('/api/auth/login');
export const signOut = (): Promise<boolean> => Router.push('/api/auth/logout');
