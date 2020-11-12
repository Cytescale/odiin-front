import React, { Component } from "react";
import { Router, Switch, Route } from "react-router";
import history from '../home/history';
import LoginPage from  '../login/login.js';
import HomePage from '../home/home.js';
export default class Routers extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <Router history={history}>
                <Switch> 
                    <Route path="/login" >
                            <LoginPage {...this.props}/>
                    </Route>
                    <Route path="/dash">
                            <HomePage {...this.props}/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}