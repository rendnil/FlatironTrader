//adapter to connect to price socket

import io from 'socket.io-client';

//Format: {SubscriptionId}~{ExchangeName}~{FromSymbol}~{ToSymbol}
//Use SubscriptionId 0 for TRADE, 2 for CURRENT, 5 for CURRENTAGG eg use key '5~CCCAGG~BTC~USD' to get aggregated data from the CCCAGG exchange
//Full Volume Format: 11~{FromSymbol} eg use '11~BTC' to get the full volume of BTC against all coin pairs
//For aggregate quote updates use CCCAGG ags market

//list of subscriptions we want to subscribe 
const subscriptions = ['5~CCCAGG~BTC~USD', '5~CCCAGG~ETH~USD','5~CCCAGG~BCH~USD','5~CCCAGG~XRP~USD','5~CCCAGG~LTC~USD']

const SOCKET_ENDPOINT = 'https://streamer.cryptocompare.com/'

export default class SocketAdapter{
  static createSocketConnection(){
    let socket = io.connect(SOCKET_ENDPOINT)
    socket.emit('SubAdd', { subs: subscriptions })
    return socket
  }
}
