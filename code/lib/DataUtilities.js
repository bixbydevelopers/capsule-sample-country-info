import console from 'console'
import {getCountryCodeToName} from "./APICalls"

export function checkMultipleOptions(response) {
  let multipleOptions = []
  if (response.length > 1) {
    response.forEach(item => multipleOptions.push({
      "countryName": item['name']['common'],
      "countryOfficialName": item['name']['official'],
      "countryCode": item['cca3']
    }))
  }
  return multipleOptions
}

export function getCurrencies(response) {
    let currencies= []
    let curr = response[0]['currencies']
    for (var abb in curr) {
      currencies.push(curr[abb]["name"])
    }
    return currencies
}

export function getLanguages(response) {
    let languages= []
    let lang = response[0]['languages']
    for (var labb in lang) {
      languages.push(lang[labb])
    }
    return languages
}

// Get all borders of the country and convert code into country name
export function getBorders (response, debug) {
    let borders = []
    let bords = response[0]['borders']
    let codeResponse = getCountryCodeToName(debug)
    if (!codeResponse) {
      // Gracefully degrade if cannot get country code data
      return null
    }
    if (bords) {
      for (const code of bords) {
        let name = codeResponse.find(x => x.alpha3Code.includes(code)).name
        borders.push(name)
      }
    }
    return borders
}
