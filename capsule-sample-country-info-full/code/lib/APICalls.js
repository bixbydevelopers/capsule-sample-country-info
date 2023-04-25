import http from 'http'
import fail from 'fail'
import console from 'console'
import { COUNTRYCODETONAME, COUNTRYAPI } from "./Data"

export {getCountryInfo, getCountryCodeToName}

function getCountryInfo(countryName, countryCode, debug) {
  let response
  if (debug) {
    return COUNTRYAPI
  } else {
    let url
    if (countryCode && !countryName) {
      url = encodeURI("https://restcountries.com/v3.1/alpha/".concat(countryCode))
    } else {
      url = encodeURI("https://restcountries.com/v3.1/name/".concat(countryName))
    }

    response = http.getUrl(url, { format: 'json', returnHeaders: true })

    if (response && response.status == 404) {
      if (debug) console.log("country not found error")
      throw fail.checkedError('Country not found', 'CountryNotFound', {})
    }
    if (!response || response.status != 200) {
      console.log("error: response = " + response)
      throw fail.checkedError('Bad API call', 'APIFailure', {})
    }
  }
  //return response - specify parsed to get parsed value from return object (needed with returnHeaders = true)
  return response.parsed
}

function getCountryCodeToName(debug) {
  let codeResponse
  if (debug) {
    return COUNTRYCODETONAME
  } else {
    codeResponse = http.getUrl("https://restcountries.com/v3.1/all?fields=name,cca3", { format: 'json', returnHeaders: true})
  }
  if (!codeResponse || codeResponse.status != 200) {
    // will gracefully degrade e.g, not show borders
    return null
  }
  //return response - specify parsed to get parsed value from return object (needed with returnHeaders = true)
  return codeResponse.parsed
}
