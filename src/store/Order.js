import { types, flow } from 'mobx-state-tree';
import { api} from '../service/api';
import * as urls from '../service/urls';
import {CarsModel} from './Cars';
import {PointsModel} from './point';
import { OrderStatus } from './OrderStatus';
import { CitiesModel } from './Cities';

const rateTypeModel = types.model({
    id: types.string,
    name: types.string,
    unit: types.string,
});

const RateModel = types.model({
   id: types.string,
   price: types.number,
   rateTypeId: rateTypeModel,
});

export const OrderModel = types.model({
        orderStatusId: OrderStatus,
        cityId: CitiesModel,
        pointId: PointsModel,
        carId: CarsModel,
        color: types.string,
        dateFrom: types.number,
        dateTo: types.number,
        rateId: RateModel,
        price: types.number,
        id: types.string,
        isFullTank: types.boolean,
        isNeedChildChair: types.boolean,
        isRightWheel: types.boolean,
});

export const OrderStore = types.model('OrderStore', {
    list: types.array(OrderModel),
    order: types.maybe(OrderModel),
}).actions((self) => ({
    fetchOrder: flow(function* (orderId) {
        try {
            const {data: {data}} = yield api.request({
                url: `${urls.ORDER}/${orderId}`,
            });
            self.order = data;
        } catch (error) {
            console.error(error);
        }
    }),
})).views((self) => ({

}));
