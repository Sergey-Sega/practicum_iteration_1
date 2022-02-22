/* eslint-disable max-len */
import { types, flow } from 'mobx-state-tree';
import { api, DEFAULT_LIMIT, LIMIT_KEY, OFFSET_KEY } from '../service/api';
import * as urls from '../service/urls';
import { CategoryModel } from './Categories';

const ThumbnailModel = types.model({
    path: types.string,
    originalname: types.string,
    mimetype: types.string,
});

export const CarsModel = types.model('city', {
    priceMax: types.number,
    priceMin: types.number,
    name: types.string,
    number: types.maybe(types.string),
    thumbnail: types.maybe(ThumbnailModel),
    description: types.maybe(types.string),
    colors: types.array(types.string),
    categoryId: CategoryModel,
    tank: types.maybe(types.number),
    id: types.string,
});

export const CarsStore = types.model('CarsStore', {
    list: types.array(CarsModel),
    car: types.maybe(CarsModel),
    total: types.optional(types.number, 0),
    page: types.optional(types.number, 0),
    categoryId: types.maybe(types.string),
}).actions((self) => ({
    fetchCars: flow(function* ({page = 0}) {
        try {
            self.page = page;

            const requestParams = new URLSearchParams();

            const setParams = (key, value) => {
                if (value) requestParams.append(key, value);
            };

            setParams(LIMIT_KEY, DEFAULT_LIMIT);

            setParams(OFFSET_KEY, page * DEFAULT_LIMIT);

            const { data } = yield api.request({
                url: urls.CARS,
                params: requestParams,
            });

            self.list.replace(data.data);
            self.total = parseInt(data.count);
        } catch (error) {
            console.error(error);
        }
    }),
    fetchCar: flow(function* (carId) {
        try {
        const { data: {data} } = yield api.request({
            url: `${urls.CARS}/${carId}`,
        });
        self.car = data;
    } catch (error) {
        console.error(error);
    }
    }),
    createCar: flow(function* (body) {
        try {
        const response = yield api.request({
            url: `${urls.CARS}/`,
            body,
        });
        return response;
    } catch (error) {
    console.error(error);
        }
    }),
    updateCar: flow(function* (body, carId) {
        try {
        const response = yield api.request({
            url: `${urls.CARS}/${carId}`,
            body,
        });
        return response;
    } catch (error) {
        console.error(error);
    }
    }),
    deleteCar: flow(function* (carId) {
        yield api.request({
            url: `${urls.CARS}/${carId}`,
        });
    }),
    setCategoryId(categoryId) {
self.categoryId = categoryId;
},
})).views((self) => ({
    get filteredListByCategory() {
        if (self.categoryId) {
        return self.list.filter(({categoryId}) => categoryId.id === self.categoryId);
}
return self.list;
    },
    get totalPages() {
        return Math.ceil(self.total / DEFAULT_LIMIT);
    },
}));
