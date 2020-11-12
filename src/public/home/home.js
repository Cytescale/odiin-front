import React from 'react';
import {Accordion,Card,Popover,OverlayTrigger} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/priApp.css';
import '../css/home.css';
import axios from 'axios';
import Routers from  '../home/feeder';
import pro_pic_1 from '../../assets/pro_pic_1.jpeg';
export default class HomeClass extends React.Component{

    constructor(props){
        super(props);    
        this.state = {
            isLogged:true,
            isDark:false,
            logedUserId:null,
            currSite:0,
            windowWidth: window.innerWidth
          }

          axios("http://172.20.10.3:8080/isAuth",{ // you may send any data, encoded as you wish. shall match content-type 
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, same-origin, *omit
          headers: {
            'content-type': 'application/json'
          },
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          mode: 'no-cors', // no-cors, cors, *same-origin
          redirect: 'follow', // *manual, follow, error
          referrer: 'no-referrer' // *client, no-referrer
          }).then((res) => {
              console.log("---------------------------------------------------------");
              console.log("got data"+JSON.stringify(res.data));
          }).catch(err=>{
              console.log(err);
          });
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
        const topBarPropop = (
            <Popover id="popover-basic">
              <Popover.Title as="h3">Odin Guard Account</Popover.Title>
              <Popover.Content>
                  <div className='topBarPropop_butt_cont'>
                        <div className='topBarPropop_butt_cont_butt'><a href='setting' className='topBarPropop_butt_class'>Profile</a></div>
                        <div className='topBarPropop_butt_cont_butt'><a href='setting' className='topBarPropop_butt_class'>Help</a></div>
                        <div className='topBarPropop_butt_cont_log_butt'><a href='setting' className='topBarPropop_butt_log_class'>Sign Out</a></div>
                        </div>
              </Popover.Content>
            </Popover>
          );
        return(
        <div id='home_app_bdy_cont' style={themeColor}>
                <div id='home_app_bdy_left_cont'>                    
                               <div id='home_app_bdy_left_cont_log_cont'>
                                <div id='home_app_bdy_left_cont_log_tit'>
                                    Cytescale
                                </div>
                               </div>
                               <div className='home_app_bdy_order_cont'>
                                <div className='home_app_bdy_order_cont_tit'>Orders</div>
                                    <div className='home_app_bdy_order_make_cont'>
                                            <a href='order'style={this.state.currSite===3?{backgroundColor:'#314B6F',fontWeight:'600'}:{}}  className='home_app_bdy_order_make_cont_lnk'><svg className='home_app_left_bdy_ico'      viewBox='0 0 512 512'><title>Add Circle</title><path d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M256 176v160M336 256H176'/></svg>New Order</a>
                                    </div>    
                               </div>

                               <div className='home_app_bdy_order_cont'>

                                <Accordion defaultActiveKey="0">
                                        <Card className='home_app_bdy_order_cont_tit_acc' >
                                            <Accordion.Toggle className='home_app_bdy_order_cont_tit_tog' as={Card.Header} eventKey="0">
                                            <div className='home_app_bdy_order_cont_tit'>Account</div>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                            <Card.Body className='home_app_bdy_order_cont_bdy'>
                                                    <div className='home_app_bdy_order_opt_bdy'> 
                                                          <a href='/dash/setting' style={this.state.currSite===1?{backgroundColor:'#314B6F',fontWeight:'600'}:{}}  className='home_app_bdy_order_opt_bdy_lnk'><svg className='home_app_left_bdy_ico' viewBox='0 0 512 512'><title>Settings</title><path d='M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='22'/></svg>Settings</a>
                                                    </div>
                                                    <div className='home_app_bdy_order_opt_bdy'> 
                                                          <a href='/dash/billing' style={this.state.currSite===2?{backgroundColor:'#314B6F',fontWeight:'600'}:{}}   className='home_app_bdy_order_opt_bdy_lnk'><svg className='home_app_left_bdy_ico' viewBox='0 0 512 512'><title>Card</title><rect x='48' y='96' width='416' height='320' rx='56' ry='56' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='22'/><path fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='30' d='M48 192h416M128 300h48v20h-48z'/></svg>Billing</a>
                                                    </div>

                                            </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        </Accordion>
                               </div>
                               <div className='home_app_bdy_order_cont'>
                               <div className='home_app_bdy_order_opt_bdy'> 
                                                          <a href='#' className='home_app_bdy_cost_cal_opt_bdy_lnk'>Logout</a>
                                                    </div>
                                   
                               </div>
                </div>
                <div id='home_app_bdy_cent_cont'>
                        <div id='home_app_bdy_cent_cont_bdy'><Routers onChangeSite={(i)=>{this.setState({currSite:i})}}/></div>
                </div>
        </div>);
    }
}

{/* <div id='home_app_bdy_cent_top_cont'>
                            <div id='home_app_bdy_cent_pro_cont'>
                         <div id='home_app_top_add_ord_butt_cont'><button id='home_app_top_add_ord_butt'>New order</button></div> 
                            <OverlayTrigger trigger="click" placement="left" overlay={topBarPropop}>
                            <button className='home_app_bdy_cent_pro_cont_butt'><img className='home_app_bdy_cent_pro_cont_ico' src={pro_pic_1}></img></button>
                            </OverlayTrigger>                         
                                </div>
</div> */}