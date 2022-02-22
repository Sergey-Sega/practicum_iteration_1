import { Route, Switch } from "react-router-dom"
import {MainPageContainer} from "../components/pages/MainPage/MainPage"
import OrderPage from "../components/pages/OrderPage/OrderPage"

export const Routes = () => {
    return(
        <>
        <Switch>
        <Route exact path="/need-for-drive" component={MainPageContainer} />
        <Route path="/need-for-drive/order-page/" component={OrderPage} />
        </Switch>
        </>
    )
}