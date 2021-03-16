declare module 'socket.io-mock' {
  class SocketMock {
    socketClient: {
      emit: (eventName: string, ...args) => void;
    };
  }
  export = SocketMock;
}
