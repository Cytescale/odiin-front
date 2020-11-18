import React, { Component } from "react";
import { Router, Switch, Route ,Redirect} from "react-router";
import Feed from '../feed/feed';
import Profile from '../profile/profile';
import history from '../home/history';

import BillingPage from  '../billing/billing.js';
import SettingPage from '../setting/setting.js';
import OrderPage from '../order/order.js';

export default class Routers extends React.Component {
    constructor(props){
        super(props)
        
    }



    render() {
        return (
            <Router history={history}>
                <Switch> 
                    <Route exact path="/dash/">
                        <SettingPage {...this.props}/>
                    </Route>
                    <Route path="/dash/setting" >
                            <SettingPage {...this.props}/>
                    </Route>
                    <Route path="/dash/billing">
                            <BillingPage {...this.props}/>
                    </Route>
                    <Route path="/dash/order">
                            <OrderPage {...this.props}/>
                    </Route>

                </Switch>
            </Router>
        )
    }
}