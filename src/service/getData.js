/* eslint-disable max-len */
import axios from 'axios';
import { APPLICATION_ID, BASE_URL } from '../config';
import { YMAPS_KEY } from '../config';
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


 export const initMaps = async (values) => {
        const params = values
                            .filter((elem) => elem.cityId?.name)
                            .map((elem) => ({ city: elem.cityId?.name, address: elem.address}));

        const result = [];

        for (let elem = 0; elem < params.length; elem++ ) {
            const res = await fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=${YMAPS_KEY}&format=json&geocode=${params[elem].city}+${params[elem].address.split(' ').join('+')}`);

            const data = await res.json();

            result.push(data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').reverse());
            if (elem === params.length-1) {
                return result;
            }
        }
};
