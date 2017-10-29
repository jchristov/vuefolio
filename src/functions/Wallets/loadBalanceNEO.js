export default async function loadBalanceNEO (address) {
  const url = 'https://cors-anywhere.herokuapp.com/http://api.neonwallet.com/v2/address/balance/' + address
  const response = await fetch(url, {})
  const json = await response.json()

  var balance = {}
  balance['NEO'] = json['NEO']['balance']
  balance['GAS'] = json['GAS']['balance']

  return balance
};
