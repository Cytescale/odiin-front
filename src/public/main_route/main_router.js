import React, { Component } from "react";
import { Router, Switch, Route,Redirect  } from "react-router";
import history from '../home/history';
import LoginPage from  '../login/login.js';
import HomePage from '../home/home.js';
import LandPage from '../land/land.js';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default class Routers extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isLogged:false,
            uid:null
        }
        this.isAuth = this.isAuth.bind(this);
           
    }


    isAuth(){
        var data=cookies.get('user_token');
        if(data===null||data===undefined||data===""){
            this.setState({isLogged:false});
        }else{
            this.setState({isLogged:true});
        }
        console.log("INIT LOGIN CHECK WITH "+data);
    }
    componentDidMount() {
        this.isAuth();
    }
    setLoggedIn(res_bool,got_uid){
            this.setState({isLogged:res_bool,uid:got_uid});       
    }

    render() {
        console.log("ISLOGEd"+this.state.isLogged);
        return (
            <Router history={history}>
                <Switch> 
                    <Route exact path="/" >
                    <LandPage></LandPage>
                    </Route>
                    <Route path="/login">
                    {/* {this.state.isLogged===true?<HomePage {...this.props}/>:<LoginPage {...this.props} setLog={this.setLoggedIn.bind(this)}/>} */}
                    <LoginPage {...this.props} setLog={this.setLoggedIn.bind(this)}/>
                    </Route>
                    <Route path="/dash">
                    {this.state.isLogged===true?<HomePage {...this.props}/>:<LoginPage {...this.props} setLog={this.setLoggedIn.bind(this)} />}
                    </Route>
                </Switch>
            </Router>
        )
    }
}