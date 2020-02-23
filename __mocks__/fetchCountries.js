import mockData from './restCountries.json';

const fetchCountries = async () => {
  return await Promise.resolve(mockData);
};

export default fetchCountries;
