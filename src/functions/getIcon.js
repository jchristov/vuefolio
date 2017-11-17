export default function getIcon (token) {
  var iconString

  switch (token.toLowerCase()) {
    case 'bitcoin':
      iconString = 'cc BTC largeicon'
      break
    case 'ethereum':
      iconString = 'cc ETH largeicon'
      break
    case 'neo':
      iconString = 'cc NEO largeicon'
      break
    case 'iota':
      iconString = 'cc IOTA-alt largeicon'
      break
    default:
      iconString = ''
      console.log('No icon found for this wallet')
  }
  return iconString
}
