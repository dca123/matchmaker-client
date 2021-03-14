import '../matchMedia';
import { loadingAuth, notAuth } from '../hoc/authentication.test';

describe('/searching', () => {
  loadingAuth(Searching);
  notAuth(Searching);
});
