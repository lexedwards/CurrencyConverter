import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';
/* 
  Yes, This is Client side, but even OpenXR find it's not an issue; 
  However, this would be better to be a server function; 
  maybe Netlify Functions
*/

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

export default async (url, query) =>
  await http.get(url, { params: query }).then(res => res.data);
