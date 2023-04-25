import console from 'console'
import {OVERRIDES} from "./lib/Data"
import {getCountryInfo} from "./lib/APICalls"
import {checkMultipleOptions, getCurrencies, getLanguages, getBorders} from "./lib/DataUtilities"
const debug = false

export default function ({countryName, information, countryCode, resetInformationFlag}) {
 
   if (debug) console.log ("country name = " + countryName +" information = " + information + " countryCode = " + countryCode + " reset flag = " + resetInformationFlag)

  // Set information to null if query is for a new country. This is done using a flag in training
  if (resetInformationFlag) {
    information = null
  }

  // Over rides provide shorts cuts to common queries e.g. if you enter "united states" the over ride sets the country code to USA and uses it
  // This is necessary because the API supports partial matches
  if (OVERRIDES.get(countryName)) {
    countryCode = OVERRIDES.get(countryName.toLowerCase())
    countryName = null
    if (debug) console.log ("in override, countryCode = " + countryCode)
  }

  let response = getCountryInfo(countryName, countryCode, debug)

  if (debug) console.log ("response = " + JSON.stringify(response))

  let currencies = [], languages = [], borders = []

  // Check if multiple countries matched
  let multipleOptions =  checkMultipleOptions(response)

  if (!multipleOptions.length > 0) {

    // Get all the currencies the country uses
    currencies = getCurrencies(response)

    // Get all the languages the country uses
    languages = getLanguages(response) 

    // Get the borders of the country
    borders = getBorders (response, debug) 
  }

  return {
    "commonName": response[0]['name']['common'],
    "officialName": response[0]['name']['official'],
    "countryCode": response[0]['cca3'],
    "currencyNames": currencies,
    "capital": response[0]['capital'][0],
    "languages": languages,
    "borders": borders,
    "googleMapsURL": response[0]['maps']['googleMaps'],
    "population": response[0]['population'],
    "continents": response[0]['continents'],
    "flagURL": response[0]['flags']['png'] + "",
    "multipleOptions": multipleOptions,
    "information": information
  }
}
