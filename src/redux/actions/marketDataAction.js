//action creator for fetching live price data

//////socket initial response includes price data
//5~CCCAGG~BTC~USD~4~6534.45~1541620638~0.00333105~21.688466549999998~53420390~49524.74863692886~323624553.0549398~55492.15675526109~361983081.9760035~6479.72~6562.79~6476.59~6443.4~6573~6439.91~Coinbase~7ffe9


//subsequent response format:
//'{SubscriptionId}~{ExchangeName}~{FromCurrency}
//~{ToCurrency}~{Flag}~{Price}~{LastUpdate}~{LastVolume}
//~{LastVolumeTo}~{LastTradeId}~{Volume24h}~{Volume24hTo}~{LastMarket}'

export function fetchMarketData(message){
  let price
  //parse the message into workable format
  //split message on "~"
  let parsedMessage = message.split("~")
  const symbol = parsedMessage[2]
  const flag = parsedMessage[4]
  const unknownTransaction = "4"
  const marketPrice = parsedMessage[5]

  //now check to see which asset has been traded
  //assign the price to that asset's live price and dispatch the action
  if (symbol==="BTC" && (flag!== unknownTransaction)){
    price = marketPrice
    return {type: "BITCOIN_PRICE_UPDATE", payload:price}

  }else if (symbol==="ETH" && (flag!== unknownTransaction)){
    price = marketPrice
    return {type: "ETHEREUM_PRICE_UPDATE", payload:price}

  }else if (symbol==="BCH" && (flag!== unknownTransaction)){
    price = marketPrice
    return {type: "BITCOINCASH_PRICE_UPDATE", payload:price}
  }else if (symbol==="XRP" && (flag!== unknownTransaction)){
    price = marketPrice
    return {type: "RIPPLE_PRICE_UPDATE", payload:price}

  }else if (symbol==="LTC" && (flag!== unknownTransaction)){
    price = marketPrice
    return {type: "LITECOIN_PRICE_UPDATE", payload:price}

  }else{
    return {type: "NOTHING"}
  }
}
