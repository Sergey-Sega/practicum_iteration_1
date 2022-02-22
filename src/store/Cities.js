import { types, flow } from 'mobx-state-tree';
import { api, LIMIT_KEY, OFFSET_KEY } from '../service/api';
import * as urls from '../service/urls';

 export const CitiesModel = types.model('city', {
    name: types.string,
    id: types.string,
});

export const CityStore = types.model('CityStore', {
    list: types.array(CitiesModel),
    city: types.maybe(CitiesModel),
    total: types.optional(types.number, 0),
    page: types.optional(types.number, 0),
}).actions((self) => ({
    fetchCities: flow(function* ({page = 0}) {
        try {
            self.page = page;

            const requestParams = new URLSearchParams();

            const setParams = (key, value) => {
                if (value) requestParams.append(key, value);
            };

            setParams(LIMIT_KEY, 10);

            setParams(OFFSET_KEY, page* 10);

            const {data} = yield api.request({
                url: urls.CITIES,
                params: requestParams,
            });

            self.list.replace(data.data);
            self.total = parseInt(data.count);
        } catch (error) {
            console.error(error);
        }
    }),
    fetchCity: flow(function* (cityId) {
        try {
            const {data: {data}} = yield api.request({
                url: `${urls.CITIES}/${cityId}`,
            });
            self.city = data;
        } catch (error) {
            console.error(error);
        }
    }),
})).views((self) => ({
    get totalPages() {
        return Math.ceil(self.total / 10);
    },
}));

