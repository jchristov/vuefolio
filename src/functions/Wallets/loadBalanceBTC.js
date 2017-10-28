export async function loadBalanceBTC (address) {

    const url = 'https://api.BTCplorer.io/getAddressInfo/' + address
    const response = await fetch(url, {});
    const json = await response.json();

    var balance = {}
    balance['BTC'] = json['BTC']['balance']

    return balance
};

