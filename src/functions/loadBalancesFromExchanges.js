import ccxt from 'ccxt'

export default async function loadBalancesFromExchanges (exchangeKeys) {
  // exchangeKeys should be a json object that looks like this:
  // var exchangeKeys = {
  //     "bittrex": {
  //         "apiKey": "d38dcbasdasdasd3be66df8707b6c9ff",
  //         "secret": "201e00fasdasdasdaffdb048f56d098a",
  //         'proxy': 'https://cors-anywhere.herokuapp.com/',
  //     }
  var exchangeKeysFormatted = {}

  exchangeKeys.forEach(exchange => {
    exchangeKeysFormatted[exchange.name] = {}
    exchangeKeysFormatted[exchange.name]['apiKey'] = exchange.apiKey
    exchangeKeysFormatted[exchange.name]['secret'] = exchange.apiSecret
    exchangeKeysFormatted[exchange.name]['proxy'] = 'https://cors-anywhere.herokuapp.com/'
  }
  )

  var exchangeBalances = {}
  let ids = ccxt.exchanges.filter(id => id in exchangeKeysFormatted)

  await Promise.all(ids.map(async id => {
    let exchange = new ccxt[id](exchangeKeysFormatted[id])

    if (exchange.apiKey) {
      let balance = await exchange.fetchBalance()
      exchangeBalances[id] = {}

      for (let token in balance['total']) {
        if (balance['total'][token] !== 0) {
          exchangeBalances[id][token] = balance['total'][token]
        }
      }
    }
    return exchange
  }
  )
  )
//   when all of them are ready, do your other things
  // console.log('Loaded exchanges:', ids.join(', '))
  // localStorage.setItem('exchangeBalances', JSON.stringify(exchangeBalances))
  return exchangeBalances
}
