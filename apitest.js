const axios = require('axios')

async function get(vin) {
  const response = await axios.get(
    'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/' + vin + '?format=json'
  )
  const kvpairs = Object.fromEntries(
    response.data.Results.filter((r) => r.Value?.toString().length < 82).map(
      (r) => {
        console.log(
          r.Variable,
          Array(83 - r.Variable.length).fill`.`.join``,
          r.Value
        )
        return [r.Variable, r.Value]
      }
    )
  )
}
get('1FAHP2KT9AG149636')
