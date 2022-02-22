import { flow, types } from 'mobx-state-tree';
import { CitiesModel } from './Cities';
import { api, LIMIT_KEY, OFFSET_KEY } from '../service/api';
import * as urls from '../service/urls';

export const PointsModel = types.model('PointStore', {
    address: types.string,
    name: types.string,
    cityId: types.maybe(CitiesModel),
    id: types.string,
});

export const PointStore= types.model('PointStore', {
    list: types.array(PointsModel),
    point: types.maybe(PointsModel),
    total: types.optional(types.number, 0),
    page: types.optional(types.number, 0),
}).actions((self) => ({
    fetchPoints: flow(function* ({page = 0}) {
        try {
            self.page = page;

            const requestParams = new URLSearchParams();

            const setParams = (key, value) => {
                if (value) requestParams.append(key, value);
            };

            setParams(LIMIT_KEY, 10);

            setParams(OFFSET_KEY, page* 10);

            const {data} = yield api.request({
                url: urls.POINTS,
                params: requestParams,
            });
            self.list.replace(data.data);
            self.total = parseInt(data.count);
        } catch (error) {
            console.error(error);
        }
    }),
    fetchCity: flow(function* (pointId) {
        try {
            const {data: {data}} = yield api.request({
                url: `${urls.POINTS}/${pointId}`,
            });
            self.point = data;
        } catch (error) {
            console.error(error);
        }
    }),
    setCityId(cityId) {
        self.cityId = cityId;
    },
})).views((self) => ({
    get filteredListByCity() {
        if (self.cityId) {
      return self.list.filter(({cityId}) => cityId.id === self.cityId);
}
return self.list;
    },
    get totalPages() {
        return Math.ceil(self.total / 10);
    },
}));
