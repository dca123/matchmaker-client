declare module 'socket.io-mock' {
  class SocketMock {
    socketClient = {
      emit: Function,
    };
  }
  export = SocketMock;
}
