/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import { Route, Switch } from 'react-router-dom';
import {MainPageContainer} from '../components/pages/MainPage/MainPage';
import {FinalPage} from '../components/pages/OrderPage/FinalPage/FinalPage';
import {OrderPage} from '../components/pages/OrderPage/OrderPage';

export const Routes = () => {
    return (
        <Switch>
            <Route exact path='/need-for-drive' component={MainPageContainer} />
            <Route exact path="/need-for-drive/order-page" component={OrderPage}/>
           <Route exact path="/need-for-drive/order-page/:orderId" component={FinalPage}/>
        </Switch>
    );
};
