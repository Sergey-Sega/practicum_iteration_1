import { types, flow } from 'mobx-state-tree';
import { api} from '../service/api';
import * as urls from '../service/urls';

export const CategoryModel = types.model({
    name: types.string,
    description: types.string,
    id: types.string,
});

export const CategoryStore = types.model('CategoryStore', {
    list: types.array(CategoryModel),
    category: types.maybe(CategoryModel),
}).actions((self) => ({
    fetchCategories: flow(function* () {
        try {
            const {data} = yield api.request({
                url: urls.CATEGORIES,
            });

            self.list.replace(data.data);
            self.total = parseInt(data.count);
        } catch (error) {
            console.error(error);
        }
    }),
    fetchCategory: flow(function* (categoryId) {
        try {
            const {data: {data}} = yield api.request({
                url: `${urls.CATEGORIES}/${categoryId}`,
            });
            self.category = data;
        } catch (error) {
            console.error(error);
        }
    }),
})).views((self) => ({

}));
