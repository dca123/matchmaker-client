import '../matchMedia';
import Searching from '@/pages/searching';
import { renderHook } from '@testing-library/react-hooks';
import { Ticket } from '@/contexts/ticketContext';
import { useState } from 'react';
import {
  cleanup,
  renderWithTicket,
  mockAuthenticate,
  mockRouter,
} from '../test-utils';
import { loadingAuth, notAuth } from '../hoc/authentication.test';

jest.mock('next/router', () => ({
  useRouter() {
    return mockRouter;
  },
}));

describe('/searching', () => {
  loadingAuth(Searching);
  notAuth(Searching);
  describe('is authenticated', () => {
    beforeEach(() => mockAuthenticate());
    afterEach(cleanup);
    describe('uses ticket context', () => {
      afterEach(() => sessionStorage.clear());
      it('gets ticketID from context', () => {
        const { result } = renderHook(() =>
          useState<Ticket>(new Ticket('123456'))
        );
        sessionStorage.setItem('ticketID', '123ABC456');
        renderWithTicket(Searching, result);
        expect(result.current[0].ticketID).not.toBe(undefined);
        expect(result.current[0].ticketID).toBe('123456');
      });
      it('gets ticketID from sessionStorage if not in context', () => {
        const { result } = renderHook(() => useState<Ticket>(new Ticket()));
        sessionStorage.setItem('ticketID', '123ABC456');
        renderWithTicket(Searching, result);
        expect(result.current[0].ticketID).not.toBe(undefined);
        expect(result.current[0].ticketID).toBe('123ABC456');
      });
      it('has undefined ticketID if not in context nor session storage', () => {
        const { result } = renderHook(() => useState<Ticket>(new Ticket()));

        renderWithTicket(Searching, result);
        expect(result.current[0].ticketID).toBe(undefined);
      });
    });
  });
});
