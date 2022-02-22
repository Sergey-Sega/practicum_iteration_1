import { types, flow } from 'mobx-state-tree';
import { api, LIMIT_KEY, OFFSET_KEY } from '../service/api';
import * as urls from '../service/urls';

 export const OrderStatus = types.model('OrderStatus', {
    name: types.string,
    id: types.string,
});

export const OrderStatusStore = types.model('OrderStatusStore', {
    list: types.array(OrderStatus),
    total: types.optional(types.number, 0),
    page: types.optional(types.number, 0),
}).actions((self) => ({
    fetchOrderStatus: flow(function* ({page = 0}) {
        try {
            self.page = page;

            const requestParams = new URLSearchParams();

            const setParams = (key, value) => {
                if (value) requestParams.append(key, value);
            };

            setParams(LIMIT_KEY, 10);

            setParams(OFFSET_KEY, page* 10);

            const {data} = yield api.request({
                url: urls.ORDER_STATUS,
                params: requestParams,
            });

            self.list.replace(data.data);
            self.total = parseInt(data.count);
        } catch (error) {
            console.error(error);
        }
    }),
})).views((self) => ({
    get totalPages() {
        return Math.ceil(self.total / 10);
    },
}));

