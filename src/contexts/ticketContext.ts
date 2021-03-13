import { createContext, Dispatch, useContext, SetStateAction } from 'react';

export type Ticket = {
  ticketID: string | undefined;
};

export const emptyTicket = {
  ticketID: undefined,
};
export type TicketContextType = {
  ticket: Ticket;
  setTicket: Dispatch<SetStateAction<Ticket>>;
};
const TicketsContext = createContext<TicketContextType>({
  ticket: emptyTicket,
  setTicket: () => undefined,
});
export const useTicket = (): TicketContextType => useContext(TicketsContext);
export const TicketProvider = TicketsContext.Provider;
