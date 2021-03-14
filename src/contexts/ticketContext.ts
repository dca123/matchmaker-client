import { createContext, Dispatch, useContext, SetStateAction } from 'react';

export class Ticket {
  public ticketID: string | undefined = undefined;

  constructor(ticketID?: string) {
    this.ticketID = ticketID;
  }
}

export type TicketContextType = {
  ticket: Ticket;
  setTicket: Dispatch<SetStateAction<Ticket>>;
};
const TicketsContext = createContext<TicketContextType>({
  ticket: new Ticket(),
  setTicket: () => undefined,
});
export const useTicket = (): TicketContextType => useContext(TicketsContext);
export const TicketProvider = TicketsContext.Provider;
