import fetchData from './fetchData';

export default () => {
  const oxcLatestAPI = 'https://openexchangerates.org/api/latest.json';
  const APIKey = { app_id: process.env.GATSBY_OXC_KEY };

  return fetchData(oxcLatestAPI, APIKey);
};
