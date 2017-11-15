export default function loadExchangeKeys () {
  let exchangeKeys

  if (localStorage.exchangeKeys) {
    exchangeKeys = JSON.parse(localStorage.exchangeKeys)
  } else {
    exchangeKeys = [
    {'name': 'bittrex', 'apiKey': '', 'apiSecret': ''},
    {'name': 'liqui', 'apiKey': '', 'apiSecret': ''},
    {'name': 'coinbase', 'apiKey': '', 'apiSecret': ''},
    {'name': 'bl3p', 'apiKey': '', 'apiSecret': ''},
    {'name': 'bitfinex2', 'apiKey': '', 'apiSecret': ''},
    {'name': 'poloniex', 'apiKey': '', 'apiSecret': ''}
    ]
  }
  return exchangeKeys
}
