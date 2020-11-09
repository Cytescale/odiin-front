import React from 'react';
import Cookies from 'universal-cookie';


import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router } from 'react-router-dom';
import '../css/priApp.css';
import '../css/home.css';
import '../css/post.css';
import '../css/makepostland.css';
import '../css/homeloginform.css';
import Routers from  '../home/feeder';
import {Button,Popover,OverlayTrigger} from 'react-bootstrap';
import sett_svg from '../../assets/svg/settings_outline.svg';
import contra_svg from '../../assets/svg/contrast_outline.svg';
import pal_svg from '../../assets/svg/pal_outline.svg';
import dark_sett_svg from '../../assets/svg/dark/settings_outline.svg';
import dark_contra_svg from '../../assets/svg/dark/contrast_outline.svg';
import pro_pic_1 from '../../assets/pro_pic_1.jpeg';
import des_1 from '../../assets/des.png'
import des_light_1 from '../../assets/des_light.png'
import PostModal from '../home/postModal';

import {Dropdown,DropdownButton } from 'react-bootstrap';
import comm_svg from '../../assets/svg/comm_outline.svg';
import home_book_svg from '../../assets/svg/home_bookmark_outline.svg';
import home_heart_svg from '../../assets/svg/home_heart_outline.svg';
import land1 from '../../assets/land_1.jpg';
import show_1 from '../../assets/show_1.png';
import show_2 from '../../assets/show_2.png';
import show_3 from '../../assets/show_3.png';
import show_4 from '../../assets/show_4.png';
import show_5 from '../../assets/show_5.png';
import show_6 from '../../assets/show_6.png';


export default class HomeClass extends React.Component{

    constructor(props){
        super(props);    
        this.state = {
            isLogged:true,
            isDark:false,
            isDetail:true,
            postModalVisi:false,
            currColor:1,    
            currSite:1,
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
 drawPostLand(img,tit,name,style,ifDetail){
    return(
            <div className='home_post_bdy_class' style={style}>
             {ifDetail?
            <div className='home_post_bdy_class_tit_cont'>
            <img className='home_post_bdy_class_tit_cont_img' src={pro_pic_1}></img>
            <div id='home_post_bdy_class_tit_cont_nam'>
                <div className='home_post_bdy_class_tit_cont_nam_tit'>{tit}</div>
             <div className='home_post_bdy_class_tit_cont_abut_tit'>@{name}<span id='home_post_bdy_class_tit_cont_abut_data'>posted on 2 October</span></div>
                </div>
        
            <div className='home_post_bdy_more_class'>
                            <DropdownButton id="dropdown_basic_button_cus" title="">
                            <Dropdown.Item className='dropdown_basic_button_item' href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item className='dropdown_basic_button_item' href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item className='dropdown_basic_button_item' href="#/action-3">Something else</Dropdown.Item>
                            </DropdownButton>
                </div>
            </div>:<div></div>
                }
          
            <div className='home_post_bdy_class_bdy_cont'>
                <img src={img} id='home_post_bdy_class_bdy_cont_img'></img>
            </div>
            {ifDetail?
            <div className='home_post_foot_main_class'>
            <div className='home_post_disc'>
                This is a discription of the current post<br></br>
                This is a discription of the current post 
                </div>
            <div className='home_post_foot_class'>
                    <div  className='home_post_foot_like_class'>
                    <button className='home_post_bdy_class_like_cont'><img className='home_post_bdy_class_like_cont_img' src={home_heart_svg}></img><span className='home_post_bdy_class_like_cont_tit'>100</span></button>
                    </div>
                    
                    <div  className='home_post_foot_comm_class'>
                    <button className='home_post_bdy_class_like_cont'><img className='home_post_bdy_class_like_cont_img' src={comm_svg}></img><span className='home_post_bdy_class_like_cont_tit'>50</span></button>    
                    </div>

                    <div  className='home_post_foot_book_class'>
                    <button className='home_post_bdy_class_like_cont'><img className='home_post_bdy_class_like_cont_img' src={home_book_svg}></img></button>
                    </div>
            </div></div>:<div></div>
            }
        </div>        
    );
}
drawMakePostLand(style){
return(
<div id='app_bdy_make_post_cont'>
    <div id="app_make_post_cont_top">
    <img className='home_post_bdy_class_tit_cont_make_post_img' src={pro_pic_1}></img>
    <textarea id='app_make_post_data_txt' placeholder="What are you thinking?"></textarea>
    </div>
    <div id="app_make_post_cont_bott">
    
    <button className='app_make_post_img_cont'><svg  className='app_make_post_img_ico' viewBox='0 0 512 512'><rect x='48' y='80' width='416' height='352' rx='48' ry='48' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32'/><circle cx='336' cy='176' r='32' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/><path d='M304 335.79l-90.66-90.49a32 32 0 00-43.87-1.3L48 352M224 432l123.34-123.34a32 32 0 0143.11-2L464 368' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/></svg></button>
    <button className='app_make_post_img_cont'><svg className='app_make_post_img_ico' viewBox='0 0 512 512'><title>Happy</title><circle cx='184' cy='232' r='24'/><path d='M256.05 384c-45.42 0-83.62-29.53-95.71-69.83a8 8 0 017.82-10.17h175.69a8 8 0 017.82 10.17c-11.99 40.3-50.2 69.83-95.62 69.83z'/><circle cx='328' cy='232' r='24'/><circle cx='256' cy='256' r='208' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/></svg></button>
    <button className='app_make_post_img_cont'><svg className='app_make_post_img_ico' viewBox='0 0 512 512'><title>Videocam</title><path d='M374.79 308.78L457.5 367a16 16 0 0022.5-14.62V159.62A16 16 0 00457.5 145l-82.71 58.22A16 16 0 00368 216.3v79.4a16 16 0 006.79 13.08z' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/><path d='M268 384H84a52.15 52.15 0 01-52-52V180a52.15 52.15 0 0152-52h184.48A51.68 51.68 0 01320 179.52V332a52.15 52.15 0 01-52 52z' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/></svg></button>
    
    <button className='app_make_post_gif_cont'>Gif</button>
    <button className='app_make_post_sub_butt'>Post</button>
    </div>
</div>);
}
    render(){
        let themeColor = {};

        const popover = (
            <Popover id="popover-basic">
              <Popover.Content id="popover-basic-content">
                  <div id="app_login_form_cont">
                  <div id="lb_first_stack_right_cont_cent">
                                    <div id="app_login_form_cont_tit">
                                                Sign In to Wonder
                                    </div>
                                    <div className='lb_first_stack_right_cont_cent_login_data_pop'>
                                        <input className='lb_first_stack_right_cont_cent_login_data_fld_pop' placeholder='Email or Phone number'></input>
                                    </div>
                                    <div className='lb_first_stack_right_cont_cent_login_data_pop'>
                                        <input type='Password' className='lb_first_stack_right_cont_cent_login_data_fld_pop' placeholder='Password'></input>
                                    </div>
                                    <div className='lb_first_stack_right_cont_cent_login_data_pop'>
                                        <a href='#' id="lb_first_stack_right_cont_cent_for_lnk">Forgot Password?</a>
                                    </div>
                                    <div className='lb_first_stack_right_cont_cent_login_data_pop'>
                                        <input type='submit' value='Login' id='lb_first_stack_right_cont_cent_login_data_login_butt_pop'></input>
                                    </div>
                                    <div className='lb_first_stack_right_cont_cent_login_data_pop'>
                                        <input type='submit' value='Sign Up' id='lb_first_stack_right_cont_cent_login_data_signup_butt_pop'></input>
                                    </div>  
                                    
                                </div>
                </div>
              </Popover.Content>
            </Popover>
          );

        const LoginButt = () => (
            <OverlayTrigger trigger="click" placement="left" overlay={popover}>
                <buttom id="home_app_bdy_cont_top_login_butt" >Login</buttom>
            </OverlayTrigger>
          );
          

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
        switch(this.state.currColor){
            case 1:
            themeColor['--app-primary-color']='#2F80ED';
            break;
            case 2:
            themeColor['--app-primary-color']='#3DB870';
            break;
            case 3:
            themeColor['--app-primary-color']='#F2994A';
            break;
            case 4:
            themeColor['--app-primary-color']='#FB5050';
            break;
            default:
            themeColor['--app-primary-color']='#2F80ED';
            break;
        }


        return(
        <div id='home_app_bdy_cont' style={themeColor}>
                <PostModal show={this.state.postModalVisi} onHide={() => {this.setState({ postModalVisi: !this.state.postModalVisi }) }}/>
            
            <div id='home_app_login_butt_bdy'>
            {
                this.state.windowWidth<650?
                !this.state.isLogged?<input type='submit' value='Login / Sign UP' id='lb_first_stack_right_cont_cent_login_data_login_butt_home'></input>
                :<span></span>
                :<spam></spam>
            }
            
            </div>
            
            <div id='home_app_bdy_coont_top_cont'>
            
                        <div id='home_app_bdy_cont_left_cont_logo_cont'>
                        {this.state.windowWidth>650?<span className='home_app_bdy_cont_left_cont_opt_butt_tit_class'><a id='app_main_logo_lnk' href='#'>Wonder</a></span>:<span className='home_app_bdy_cont_left_cont_opt_butt_tit_class'><a id='app_main_logo_lnk_alt' href='#'>Wonder</a></span>}
                        </div>
                        <div id="home_app_bdy_top_right_cont">
                        
                        {
                            this.state.isLogged?<span>
                                    <div id='home_app_bdy_cont_left_cont_pro_cont'><button className='home_app_bdy_cont_left_cont_opt_butt_class'><img className='home_post_bdy_class_top_pro_ico' src={pro_pic_1}></img>{this.state.windowWidth>650?<span className='home_app_bdy_cont_left_cont_opt_butt_tit_class'>Profile</span>:<span></span>}</button></div>
                                    <button className='home_app_bdy_cont_left_cont_opt_butt_class'>
                                    <svg className='home_app_bdy_cont_left_cont_opt_butt_img_class'  viewBox='0 0 512 512'><path d='M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' strokeWidth='32'/><path d='M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z' fill='none' stroke='currentColor' stroke-miterlimit='10' strokeWidth='32'/><path d='M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' strokeWidth='32'/><path d='M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154' fill='none' stroke='currentColor' stroke-linecap='round' stroke-miterlimit='10' strokeWidth='32'/></svg>
                                    {this.state.windowWidth>650?<span className='home_app_bdy_cont_left_cont_opt_butt_tit_class'>Following</span>:<span></span>}</button> 
                                    <a href='/feed' style={this.state.currSite==1?{color:'var(--app-primary-color)'}:{}} className='home_app_bdy_cont_left_cont_opt_butt_class'><svg className='home_app_bdy_cont_left_cont_opt_butt_img_class' viewBox='0 0 512 512'><path d='M368 415.86V72a24.07 24.07 0 00-24-24H72a24.07 24.07 0 00-24 24v352a40.12 40.12 0 0040 40h328' fill='none' stroke='currentColor' stroke-linejoin='round' strokeWidth='32'/><path d='M416 464h0a48 48 0 01-48-48V128h72a24 24 0 0124 24v264a48 48 0 01-48 48z' fill='none' stroke='currentColor' stroke-linejoin='round' strokeWidth='32'/><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' strokeWidth='32' d='M240 128h64M240 192h64M112 256h192M112 320h192M112 384h192'/><path d='M176 208h-64a16 16 0 01-16-16v-64a16 16 0 0116-16h64a16 16 0 0116 16v64a16 16 0 01-16 16z' fill='currentColor'/></svg>{this.state.windowWidth>650?<span className='home_app_bdy_cont_left_cont_opt_butt_tit_class'>Feed</span>:<span></span>}</a>
                                    
                                    </span>
                                    
                                    :
                                    this.state.windowWidth>650?
                                    <span>
                                    <LoginButt/>
                                    
                                    </span>
                                    :<span></span>
                        }
                        
                        {/* <button id='home_app_bdy_cont_rght_dark_butt' onClick={() => { this.setState({ isDark: !this.state.isDark }) }}><img src={this.state.isDark==true? dark_contra_svg : contra_svg} id='home_app_bdy_cont_rght_dark_butt_ico'></img></button> */}
                       
                    
                    </div>
            </div>
            <div id='home_app_bdy_cont_cent_cont'>
                <div id='home_app_bdy_cont_cent_pag_tit'>
                    Feed for you
                </div>
                {
                    this.state.isLogged?this.drawMakePostLand(this.props.themeColor):<span></span>
                }

            <div id='home_app_bdy_cont_cent_bdy'>
                {this.drawPostLand(show_1,"Alex Being","Alex Being",this.props.themeColor,this.state.isDetail)}
                {this.drawPostLand(show_2,"Alex Being","Alex Being",this.props.themeColor,this.state.isDetail)}
                {this.drawPostLand(show_3,"Alex Being","Alex Being",this.props.themeColor,this.state.isDetail)}
                {this.drawPostLand(show_4,"Alex Being","Alex Being",this.props.themeColor,this.state.isDetail)}
                {this.drawPostLand(show_5,"Alex Being","Alex Being",this.props.themeColor,this.state.isDetail)}
                {this.drawPostLand(show_6,"Alex Being","Alex Being",this.props.themeColor,this.state.isDetail)}
            </div>
        </div>
                <div id='home_app_bdy_cont_rght_cont'>  
                        <div id='home_app_bdy_cont_rght_foot_lik_cont'>
                                <a href='#' className='home_app_bdy_cont_rght_foot_lnk'>Home</a>
                                <a href='#' className='home_app_bdy_cont_rght_foot_lnk'>Privacy</a>
                                <a href='#' className='home_app_bdy_cont_rght_foot_lnk'>About</a>
                                <a href='#' className='home_app_bdy_cont_rght_foot_lnk'>Refund Policy</a>
                                <a href='#' className='home_app_bdy_cont_rght_foot_lnk'>Contact</a>
                                <a href='#' className='home_app_bdy_cont_rght_foot_lnk'>Copyright 2020</a>
                                <div id='home_app_foot_lov_tit'> Made with ❤️ by Passion</div>
                        </div>
                       
                </div>
                
        </div>);
    }
}