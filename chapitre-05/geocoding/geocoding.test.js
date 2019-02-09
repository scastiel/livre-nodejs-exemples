const should = require('should')
const googleGeocoding = require('./geocoding')

const API_KEY = process.env.API_KEY

describe('Geocoding', () => {
  describe('#geocode()', () => {
    it('should return an error if no API key provided', done => {
      googleGeocoding.geocode(
        null,
        'Place de Bretagne, Rennes',
        (err, location) => {
          should.exist(err)
          should.not.exist(location)
          done()
        }
      )
    })

    it('should return null on incorrect address', done => {
      googleGeocoding.geocode(API_KEY, 'tototititutu', (err, location) => {
        should.not.exist(err)
        should.not.exist(location)
        done()
      })
    })

    it('should return non null on correct address', done => {
      googleGeocoding.geocode(
        API_KEY,
        'Place de Bretagne, Rennes',
        (err, location) => {
          should.not.exist(err)
          location.should.have.property('lat')
          location.should.have.property('lng')
          done()
        }
      )
    })
  })
})
