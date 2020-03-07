import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';

const cache = setupCache({
  maxAge: 60000,
  readHeaders: true,
  exclude: {
    query: false,
  },
});

export const http = axios.create({
  adapter: cache.adapter,
});

export default function(url, query) {
  return new Promise((resolve, reject) => {
    return http
      .get(url, { params: query })
      .then(res => {
        return resolve(res.data);
      })
      .catch(err => {
        reject(err.response.data.error);
      });
  });
}
