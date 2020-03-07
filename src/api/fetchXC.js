import fetchData from './fetchData';

export default async () => {
  const oxcLatestAPI = 'https://openexchangerates.org/api/latest.json';
  const APIKey = { app_id: process.env.GATSBY_OXC_KEY };
  const data = await fetchData(oxcLatestAPI, APIKey);
  return data;
};
