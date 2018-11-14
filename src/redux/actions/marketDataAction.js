//////socket initial response includes price data
//5~CCCAGG~BTC~USD~4~6534.45~1541620638~0.00333105~21.688466549999998~53420390~49524.74863692886~323624553.0549398~55492.15675526109~361983081.9760035~6479.72~6562.79~6476.59~6443.4~6573~6439.91~Coinbase~7ffe9


//subsequent response format:
//'{SubscriptionId}~{ExchangeName}~{FromCurrency}
//~{ToCurrency}~{Flag}~{Price}~{LastUpdate}~{LastVolume}
//~{LastVolumeTo}~{LastTradeId}~{Volume24h}~{Volume24hTo}~{LastMarket}'

export function fetchMarketData(message){
//check asset symbol and whether is a buy or a sell
  let price
  
  let parsedMessage = message.split("~")

  if (parsedMessage[2]==="BTC" && (parsedMessage[4]==="2" || parsedMessage[4]==="1")){
    price = parsedMessage[5]

    return {type: "BITCOIN_PRICE_UPDATE", payload:price}

  }else if (parsedMessage[2]==="ETH" && (parsedMessage[4]==="2" || parsedMessage[4]==="1")){
    price = parsedMessage[5]

    return {type: "ETHEREUM_PRICE_UPDATE", payload:price}

  }else if (parsedMessage[2]==="BCH" && (parsedMessage[4]==="2" || parsedMessage[4]==="1")){
    price = parsedMessage[5]

    return {type: "BITCOINCASH_PRICE_UPDATE", payload:price}

  }else if (parsedMessage[2]==="XRP" && (parsedMessage[4]==="2" || parsedMessage[4]==="1")){
    price = parsedMessage[5]

    return {type: "RIPPLE_PRICE_UPDATE", payload:price}

  }else if (parsedMessage[2]==="LTC" && (parsedMessage[4]==="2" || parsedMessage[4]==="1")){
    price = parsedMessage[5]

    return {type: "LITECOIN_PRICE_UPDATE", payload:price}
  }else{
    return {type:"ahhh"}
  }
}
