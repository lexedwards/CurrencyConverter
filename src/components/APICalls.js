import axios from 'axios'
require('dotenv').config()

const APIKEY = process.env.OXC_KEY
const countriesAPI = 'https://restcountries.eu/rest/v2/'
const oxcLatestAPI = 'https://openexchangerates.org/api/latest.json'

const handleOxcLatest = () =>
  // Get the latest Exchange Rates
  axios.get(oxcLatestAPI, {
    params: {
      app_id: APIKEY,
    },
  })

const handleCountryInfo = () => {
  // Get the country info and commit to local stoarge if not already

  const local = window.localStorage.getItem('countryInfo')

  if (local) {
    return local
  } else {
    return axios.get(countriesAPI, {
      params: {
        fields:
          'name;alpha3code;capital;region;population;latlng;timezones;borders;nativeName;currencies;languages;translations;flag;',
      },
    })
  }
}

export default function APICalls() {
  axios
    .all([handleOxcLatest(), handleCountryInfo()])
    .then(
      axios.spread((...res) => {
        window.localStorage.setItem('countryInfo', json.stringify(res[1]))
        // 'this returns the array, *not* the spread due to arrow function
        return this
      })
    )
    .catch(err => {})
}
