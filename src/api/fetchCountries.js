import fetchData from './fetchData';

export default async () => {
  const countriesAPI = 'https://restcountries.eu/rest/v2/';
  const countriesQuery = {
    fields:
      'name;alpha3code;capital;region;population;latlng;timezones;borders;nativeName;currencies;languages;translations;flag;',
  };
  return await fetchData(countriesAPI, countriesQuery);
};
