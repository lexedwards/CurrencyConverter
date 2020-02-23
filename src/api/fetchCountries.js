import fetchData from './fetchData';

export default () => {
  const countriesAPI = 'https://restcountries.eu/rest/v2/';
  const countriesQuery = {
    fields:
      'name;alpha3code;capital;region;population;latlng;timezones;borders;nativeName;currencies;languages;translations;flag;',
  };
  return fetchData(countriesAPI, countriesQuery);
};
