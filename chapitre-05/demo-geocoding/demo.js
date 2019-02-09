const geocoding = require('mapquest-geocoding')

const API_KEY = process.env.API_KEY

geocoding.geocode(API_KEY, 'Place de Bretagne, Rennes', (err, location) => {
  if (err) {
    console.log('Erreur : ' + err)
  } else if (!location) {
    console.log('Aucun résultat.')
  } else {
    console.log('Latitude : ' + location.lat + ' ; Longitude : ' + location.lng)
  }
})
