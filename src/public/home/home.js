import React from 'react';
import Cookies from 'universal-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/priApp.css';
import '../css/home.css';
import Routers from  '../home/feeder';
export default class HomeClass extends React.Component{

    constructor(props){
        super(props);    
        this.state = {
            isLogged:true,
            isDark:false,
            logedUserId:null,
            windowWidth: window.innerWidth
          }
}
  handleResize = (e) => {
  this.setState({ windowWidth: window.innerWidth });
 };
 componentDidMount() {
    
  window.addEventListener("resize", this.handleResize); 
 }
 componentWillUnmount() {
  window.addEventListener("resize", this.handleResize);
 }
 componentDidUpdate(){    
 }
    render(){
        let themeColor = {};

        if (this.state.isDark==true) {
            themeColor['--main-tit-color'] = '#fefefe'
            themeColor['--main-bg-color'] = '#000000'
            themeColor['--main-bord-color'] = '#424242'
            themeColor['--main-search-bar-color'] = '#323232'
            themeColor['--main-left-menu-butt-bg-color'] = '#323232'
            themeColor['--post-bg-color'] = '#000000';
            themeColor['--post-text-color']='#e0e0e0';
            themeColor['--post-hov-color']='#424242';
            themeColor['--main-dark-butt-bg-color']='#323232';
            themeColor['--cate_bar_bg_color']='#212121';
        }

        return(
        <div id='home_app_bdy_cont' style={themeColor}>
        </div>);
    }
}