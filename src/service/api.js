import axios from 'axios';
import { APPLICATION_ID, BASE_URL } from '../config';

export const LIMIT_KEY = 'limit';
export const OFFSET_KEY = 'offset';
export const TOTAL_KEY = 'total';
export const DEFAULT_LIMIT = 100;

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    let resp = error;

    if (error.response) {
      resp =
        typeof error.response.data === 'string'
          ? { message: error.response.data }
          : error.response.data;
    }

    return Promise.reject(resp);
  },
);

export const api = {
  request: async (config) => {
    const {
      url,
      method = 'GET',
      headers = {},
      data = {},
      params = {},
      baseURL = BASE_URL,
    } = config;
    const response = axios.request({
      url,
      method,
      params,
      baseURL,
      headers: {
        'X-Api-Factory-Application-Id': APPLICATION_ID,
        ...headers,
      },
      data,
    });

    return await response;
  },
};
