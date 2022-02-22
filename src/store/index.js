import { types } from 'mobx-state-tree';
import {createContext} from 'react';
import { CarsStore } from './Cars';
import { CategoryStore } from './Categories';
import { CityStore } from './Cities';
import { PointStore } from './point';
import { OrderStatusStore } from './OrderStatus';
import { OrderStore } from './Order';

const RootStoreModel = types.model({
    cars: CarsStore,
    cities: CityStore,
    points: PointStore,
    categories: CategoryStore,
    orderStatus: OrderStatusStore,
    order: OrderStore,
});


export const createStore = () => {
    const store = RootStoreModel.create({
        cars: {},
        cities: {},
        points: {},
        categories: {},
        orderStatus: {},
        order: {},
    });

    return store;
};

export const StoreContext = createContext({});
