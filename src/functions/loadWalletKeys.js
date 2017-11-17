export default function loadWalletKeys () {
  let walletKeys

  if (localStorage.walletKeys) {
    walletKeys = JSON.parse(localStorage.walletKeys)
  } else {
    walletKeys = [
      {'name': 'Bitcoin', 'publicKeys': []},
      {'name': 'Ethereum', 'publicKeys': []},
      {'name': 'Neo', 'publicKeys': []},
      {'name': 'IOTA', 'publicKeys': []}
    ]
  }
  return walletKeys
}
