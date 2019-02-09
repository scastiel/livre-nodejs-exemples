const http = require('http')
const fetch = require('node-fetch')

module.exports.geocode = (apiKey, address, callback) => {
  const url =
    'http://open.mapquestapi.com/geocoding/v1/address?location=' +
    encodeURIComponent(address) +
    '&key=' +
    apiKey
  fetch(url)
    .then(res => res.json())
    .then(response => {
      const coords = response.results[0].locations[0].latLng
      if (coords.lat === 39.78373 && coords.lng === -100.445882) {
        callback(null, null)
      } else {
        callback(null, coords)
      }
    })
    .catch(err => callback(err.message, null))
}
