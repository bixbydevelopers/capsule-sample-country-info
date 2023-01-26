import http from 'http'
import console from 'console'
export default function (input) {
  const {
    countryName,
    information
  } = input

  let options = {
    format: 'json',
  }

  let response = http.getUrl("https://restcountries.com/v3.1/name/" + countryName, options)
  
  let currencies = []
  let curr = response[0]['currencies']
  for (var abb in curr) {
    //console.log(curr[abb]["name"])
    currencies.push(curr[abb]["name"])
  }

  let languages = []
  let lang = response[0]['languages']
  for (var labb in lang) {
    //console.log(lang[labb])
    languages.push(lang[labb])
  }


  return {
    "commonName": response[0]['name']['common'],
    "officialName": response[0]['name']['official'],
    "currencyNames": currencies,
    "capital": response[0]['capital'][0],
    "languages": languages,
    "borders": response[0]['borders'],
    "googleMapsURL": response[0]['maps']['googleMaps'],
    "population": response[0]['population'],
    "continents": response[0]['continents'],
    "flagURL": response[0]['flags']['png'] + "",
    "resultJSON": JSON.stringify(response)
  }
}

