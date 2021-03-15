declare module 'socket.io-mock' {
  class SocketMock {
    socketClient: {
      emit: (eventName: string) => void;
    };
  }
  export = SocketMock;
}
