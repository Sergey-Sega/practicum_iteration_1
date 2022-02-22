import axios from 'axios';
import { APPLICATION_ID, BASE_URL } from '../config';

export const fetchAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
     'X-Api-Factory-Application-Id': APPLICATION_ID,
   },
 });

 export default async function fetchData(url) {
    const response = await fetchAxios.get(url);
    return response.data;
    };

export const postData = async (url, data)=>{
  try {
    const response = await fetchAxios.post(url, data);
    return response.data;
  } catch (error) {
console.error(error);
  }
};
