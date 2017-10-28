export default async function requestExchangeRates (tokens) {
  const currencies = ['EUR', 'USD', 'BTC', 'ETH']
  const url = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=' + tokens.join(',') + '&tsyms=' + currencies.join(',')
  const response = await fetch(url, {})
  const ratesResponse = await response.json()

  var ratesRaw = await ratesResponse['RAW']

  var rates = {}
  Object.entries(tokens).forEach(
    ([index, token]) => {
      rates[token] = {}
      if (ratesRaw.hasOwnProperty(token)) {
        currencies.forEach(function (currency, index) {
          rates[token][currency] = {}
          rates[token][currency]['rate'] = ratesRaw[token][currency]['PRICE']
          rates[token][currency]['change'] = ratesRaw[token][currency]['CHANGEPCT24HOUR']
        })
      } else {
        console.log(token + ' was not in the CryptoCompare database')
        rates[token] = {}
        currencies.forEach(function (currency, index) {
          rates[token][currency] = {}
          rates[token][currency]['rate'] = 0.0
          rates[token][currency]['change'] = 0.0
        })
      }
    }
  )
  return rates
}
