export default async function loadBalanceETH (address) {
  const url = 'https://cors-anywhere.herokuapp.com/https://api.ethplorer.io/getAddressInfo/' + address + '?apiKey=freekey'
  const response = await fetch(url, {})
  const json = await response.json()
  var balance = {}
  balance['ETH'] = json['ETH']['balance']

  for (let i in json['tokens']) {
    let token = json['tokens'][i]
    let symbol = token['tokenInfo']['symbol']
    balance[symbol] = token['balance'] * Math.pow(10, -18)
  }

  // Somehow MOD is fucked
  if (balance.hasOwnProperty('MOD')) {
    balance['MOD'] *= Math.pow(10, 18)
  }
  return balance
};
