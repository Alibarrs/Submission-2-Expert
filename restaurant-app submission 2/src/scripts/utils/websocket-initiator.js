import NotificationHelper from './notification-helper';

let webSocketActive = null;

const WebSocketInitiator = {
  init(url) {
    webSocketActive = new WebSocket(url);
    console.log('Web socket connected to => ', webSocketActive.url);
    webSocketActive.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    console.log('Web socket on message handler => ', message);

    const restoranSocket = JSON.parse(message.data);

    NotificationHelper.sendNotification({
      title: restoranSocket.name,
      options: {
        body: restoranSocket.review,
        icon: 'icon/icon-192x192.png',
        image:
          'https://gamerwk.sgp1.cdn.digitaloceanspaces.com/2022/04/One-Piece-1015.jpg',
        vibrate: [50, 100, 150],
      },
    });
  },
};

const sendDataToWebsocket = (restoranSocket) => {
  const data = JSON.stringify(restoranSocket);
  webSocketActive.send(data);
};

export { WebSocketInitiator, sendDataToWebsocket };
