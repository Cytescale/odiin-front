import React, { Component } from "react";
import { Router, Switch, Route } from "react-router";
import Feed from '../feed/feed';
import Profile from '../profile/profile';
import history from '../home/history';
export default class Routers extends React.Component {
    constructor(props){
        super(props)
        
    }
    render() {
        let proper  = this.props;
        return (
            <Router history={history}>
                <Switch> 
                    <Route path="/feed" >
                        <Feed {...this.props}/>
                    </Route>
                    <Route path="/profile">
                    <Profile {...this.props}/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}