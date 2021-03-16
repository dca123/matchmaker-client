import { Ticket } from '@/contexts/ticketContext';
import { renderHook } from '@testing-library/react-hooks';
import { useState } from 'react';
import { renderWithTicket } from '../test-utils';

export default function usesTicketContext(
  Component: React.FunctionComponent
): void {
  describe('uses ticket context', () => {
    afterEach(() => sessionStorage.clear());
    it('gets ticketID from context', () => {
      const { result } = renderHook(() =>
        useState<Ticket>(new Ticket('123456'))
      );
      renderWithTicket(Component, result);
      expect(result.current[0].ticketID).not.toBe(undefined);
      expect(result.current[0].ticketID).toBe('123456');
    });

    it('gets ticketID from context even if sessionStorage has ticketID', () => {
      const { result } = renderHook(() =>
        useState<Ticket>(new Ticket('123456'))
      );
      sessionStorage.setItem('ticketID', '123ABC456');
      renderWithTicket(Component, result);
      expect(result.current[0].ticketID).not.toBe(undefined);
      expect(result.current[0].ticketID).toBe('123456');
    });

    it('sets ticketContext from sessionStorage if not in context', () => {
      const { result } = renderHook(() => useState<Ticket>(new Ticket()));
      sessionStorage.setItem('ticketID', '123ABC456');
      renderWithTicket(Component, result);
      expect(result.current[0].ticketID).not.toBe(undefined);
      expect(result.current[0].ticketID).toBe('123ABC456');
    });

    it('has undefined ticketID if not in context nor ticket', () => {
      const { result } = renderHook(() => useState<Ticket>(new Ticket()));

      renderWithTicket(Component, result);
      expect(result.current[0].ticketID).toBe(undefined);
    });
  });
}
