export default function loadManualEntries () {
  if (localStorage.manualBalances) {
    return JSON.parse(localStorage.getItem('manualBalances'))
  } else {
    return [{'description': '', 'token': '', 'balance': ''}]
  }
}
