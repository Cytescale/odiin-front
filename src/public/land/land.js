import React, { useRef } from 'react';
import ReactTextTransition, { presets } from "react-text-transition";
import {Accordion,Card,Popover,OverlayTrigger,Carousel, Button,Alert} from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/priApp.css';
import '../css/land_dark.css';
//import '../css/land_res_1080.css';
import '../css/land_res_phn.css';
import grid_svg from '../../assets/svg/grid.svg';
import homedesign from '../../assets/svg/homedesign.svg';
import homefront from '../../assets/svg/homefront.svg';
import fea1 from  '../../assets/svg/fea1.svg';
import fea2 from  '../../assets/svg/fea2.svg';
import fea3 from  '../../assets/svg/fea3.svg';
import fea4 from  '../../assets/svg/fea4.svg';
import homegit from '../../assets/svg/homegit.svg';
import homesupportico from '../../assets/landsupport.png';
import homecontact from '../../assets/landcontact.png';
import homeiphone from  '../../assets/svg/iphone.svg';
import Fade from 'react-reveal/Fade';
import face_log from '../../assets/logo_facebook.svg';
import gog_log from '../../assets/logo_twitter.svg';
import link_log from '../../assets/logo_link.svg';
import * as emailjs from 'emailjs-com'
import icon2  from '../../assets/svg/icon2.svg';
import icon3  from '../../assets/svg/icon3.svg';
import icon4  from '../../assets/svg/icon4.svg';
import support_ico from '../../assets/svg/support.svg';
import git_log from '../../assets/logo_github.svg';
import and1 from '../../assets/and1.png';
import int_log from '../../assets/logo_inst.svg';
import up_arrow from '../../assets/svg/up_arrow.svg';
import menu_ico from '../../assets/svg/menu.svg';
import mail_ico from '../../assets/svg/mail_outline.svg';
import call_ico from '../../assets/svg/call.svg';
import test_co from '../../assets/test_co.png';
import down_ico from '../../assets/svg/down.svg';
import down_ico_2 from '../../assets/svg/down_2.svg';
import sal1 from '../../assets/sal1.png';
import sal2 from '../../assets/sal2.png';
import sal3 from '../../assets/sal3.png';
import sal4 from '../../assets/sal4.png';
import sal5 from '../../assets/sal5.png';
import iframe_ico from '../../assets/iframe.png';

import Rotate from 'react-reveal/Rotate';
import Figma_trans_logo from '../../assets/figma_trans_logo.png';
import { slide as Menu } from 'react-burger-menu'
import axios from 'axios';
import { init } from 'ityped'

import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { StickyContainer, Sticky } from 'react-sticky';

import history from '../home/history';

import styled from 'styled-components';

const SectionWipes2Styled = styled.div`
  overflow: hidden;
  #pinContainer {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  #pinContainer .panel {
    height: 100vh;
    width: 100vw;
    position: absolute;
    text-align: center;
  }
  .panel span {
    position: relative;
    display: block;
    top: 50%;
    font-size: 80px;
  }
  
  .panel.blue {
    background-color: #000000;
  }
  
  .panel.turqoise {
    background-color: #000000;
  }
  
  .panel.green {
    background-color: #000000;
  }
  
`;



const texts = ["Mobile", "Web"];


export default class LandClass extends React.Component{

     constructor(props){
        super(props);    
        this.state = {
            isLogged:true,
            isDark:false,
            logedUserId:null,
            currSite:0,
            theposition: window.pageYOffset,
            windowWidth: window.innerWidth,
            titletext:'Java',
            feedname:'',
            feedemail:'',
            feedcompany:'',
            feedquery:'',
            feederrcode:0,
            textIndex: 0,
            feederr:'Empty Error'
          }
          this.querySubmit = this.querySubmit.bind(this);
          this.listenToScroll = this.listenToScroll.bind(this);

          
          this.listenToScroll();
}

     routeChange = () =>{ 
     let path = `contact`; 
     history.push(path);
     window.location.reload();
   }
 

  handleResize = (e) => {
  this.setState({ windowWidth: window.innerWidth });
 };
 componentWillUnmount() {
  window.addEventListener("resize", this.handleResize);
  window.removeEventListener('scroll', this.listenToScroll) 
}

 componentDidMount() {

  window.addEventListener("resize", this.handleResize); 
     window.addEventListener('scroll', this.listenToScroll);
     setInterval(() => {
          this.setState({
            textIndex: this.state.textIndex + 1,
          });
        },2000);
   }
   
   
   listenToScroll = () => {
     const winScroll =
       document.body.scrollTop || document.documentElement.scrollTop
   
     const height =
       document.documentElement.scrollHeight -
       document.documentElement.clientHeight
   
     const scrolled = winScroll / height
   
     this.setState({
       theposition: scrolled,
     })
   }

   querySubmit(e){
     e.preventDefault();
     if(this.state.feedname===''||this.state.feedname===null){
          this.setState({feederrcode:1,feederr:'Enter name'})
          console.log("Detail EMPT");
          return;
     }
     if(this.state.feedemail===''||this.state.feedemail===null){
          this.setState({feederrcode:1,feederr:'Enter email address'})
          console.log("Detail EMPT");
          return;
     }
     if(this.state.feedquery===''||this.state.feedquery===null){
          this.setState({feederrcode:1,feederr:'Enter your query'})
          console.log("Detail EMPT");
          return;
     }
     console.log(this.state.feedcompany+" "+this.state.feedname+" "+this.state.feedemail);
     let templateParams = {
          name:this.state.feedname,
          from_name: this.state.feedemail,
          to_name: 'contact@cytescale.com',
          subject: "Cytescale Query",
          company: this.state.feedcompany,
          message: this.state.feedquery,
         }
         emailjs.send(
          'odin_email',
          'template_tisfxse',
           templateParams,
          'user_pG1FPpxntH0JfibLEaJWt'
         );
      this.resetForm()
   }

   resetForm() {
     this.setState({
          feedname: '',
       feedemail: '',
       feedcompany: '',
       feedquery: '',
     })
   }

   handleQueryChange = (param, e) => {
     this.setState({ [param]: e.target.value })
   }
 

    render(){

     const home_ref = React.createRef();
     const contact_ref = React.createRef();
     const what_ref = React.createRef();
     const query_ref = React.createRef();
    
     const height =
     document.documentElement.scrollHeight -
     document.documentElement.clientHeight;

     function scrollContact(){
          contact_ref.current.scrollIntoView({
               behavior: 'smooth',
               block: 'start',
             });
           }
           function scrollHome(){
               home_ref.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }
                function scrollWhat(){
                    what_ref.current.scrollIntoView({
                         behavior: 'smooth',
                         block: 'start',
                       });
                     }
                     function scrollQuery(){
                         query_ref.current.scrollIntoView({
                              behavior: 'smooth',
                              block: 'start',
                            });
                          }
         var setWid = (this.state.theposition*100)+"%";
        return(
        <div className='app_bdy_land_main_bdy'>      
          {this.state.windowWidth<850?this.state.theposition>0.02?<a onClick={scrollHome}><div id='up_arr_cont'><img id='up_arr_cont_ico' src={up_arrow}></img></div></a>:<span></span>:<span></span>}
          {this.state.theposition>0.02?
               <div id='app_land_fix_header'>
                                   {this.state.windowWidth<850?
                                                       <Menu id='menu' width={ '90%' }  customBurgerIcon={ <img className='menu_ico_butt' src={menu_ico}/> } >                                                       
                                                       <a id="home" className="menu-item" onClick={scrollHome}>Home</a>
                                                       <a id="contact" className="menu-item"onClick={scrollWhat}>What We Do?</a>
                                                       <a id="contact" className="menu-item"onClick={scrollQuery} >Query</a>
                                                       </Menu>:<span></span>
                                                       }
                                   <div id='app_land_stack_1_lay_2_dat_head_cont'>
                                   
                                                  <div id='app_land_stack_1_lay_2_dat_head_logo_cont'>
                                                       <div id='app_land_stack_1_lay_2_dat_head_logo_phn'>Cytescale</div>
                                                  </div>
                                                  <div id='app_land_stack_1_lay_2_dat_head_lnk_cont'>
                                                       <div id='app_land_stack_1_lay_2_dat_head_lnk_cont_dat'>
                                                       <div className='pp_land_stack_1_lay_2_dat_head_lnk_class' id='app_land_stack_1_lay_2_dat_head_lnk_1_cont'><a onClick={scrollHome} className='app_land_stack_1_lay_2_dat_head_lnk_1' >Home</a></div>
                                                       <div  className='pp_land_stack_1_lay_2_dat_head_lnk_class'  id='app_land_stack_1_lay_2_dat_head_lnk_3_cont'><a onClick={scrollWhat} className='app_land_stack_1_lay_2_dat_head_lnk_1' >What we do?</a></div>
                                                       <div  className='pp_land_stack_1_lay_2_dat_head_lnk_class'  id='app_land_stack_1_lay_2_dat_head_lnk_4_cont'><a onClick={scrollQuery} className='app_land_stack_1_lay_2_dat_head_lnk_1' >Query</a></div>
                                                       </div>
                                                  </div>
                                                  <div id='app_land_stack_1_lay_2_dat_con_cont'>
                                                       <div id='app_land_stack_1_lay_2_dat_con_cont_bg'></div>
                                                       <button id='app_land_stack_1_lay_2_dat_con_butt' onClick={this.routeChange}>Contact</button>
                                                       
                                                  </div>
                                        
                                   </div>
                                   <div id='app_prog_cont' style={{width:setWid}}></div>                          
               </div>:<span></span>}
               {/* background: linear-gradient(257.4deg, #641E44 0%, #081932 100%); */}
               <div id='app_land_stack_1' ref={home_ref}>
                         <div className='app_land_stack_1_lay_class' id='app_land_stack_1_lay_1'>
                              <div id='app_land_stack_1_lay_1_eclp_cont'> 
                                        <div id='app_land_stack_1_lay_1_eclp_1'></div>
                                        <div id='app_land_stack_1_lay_1_eclp_2'></div>
                                        <div id='app_land_stack_1_lay_1_eclp_3'></div>
                              </div>
                              <div id='app_land_stack_1_lay_1_grid_cont'>
                                   {/* <img className='app_land_stack_1_lay_1_grid_cont_ico'src={grid_svg}></img> */}
                              </div>
                              <div id='app_land_stack_1_lay_1_iph_cont'>
                                   <img className='app_land_stack_1_lay_1_iph_cont_ico'src={homeiphone}></img>
                              </div>
                         </div>


                         <div className='app_land_stack_1_lay_class' id='app_land_stack_1_lay_2'>

                              <div id='app_land_stack_1_lay_2_dat'>
                              {this.state.windowWidth>850?
                                        <div id='app_land_stack_1_lay_2_dat_head_cont_min'>
                                                  <div id='app_land_stack_1_lay_2_dat_head_logo_cont'>
                                                       <div id='app_land_stack_1_lay_2_dat_head_logo'>
                                                            Cytescale</div>
                                                            
                                                  </div>
                                                  <div id='app_land_stack_1_lay_2_dat_head_lnk_cont'>
                                                            <div id='bow_cont'>
                                                                 </div>
                                                  </div>
                                                  <div id='app_fill'></div>
                    
                                                  <div id='app_land_stack_1_lay_2_dat_head_ext'>
                                                       <div id='app_land_stack_1_lay_2_dat_head_ext_data'>
                                                            <div id='app_land_stack_1_lay_2_dat_head_ext_data_ecl_1'></div>
                                                            <div id='app_land_stack_1_lay_2_dat_head_ext_data_ecl_3'></div>
                                                            <div id='app_land_stack_1_lay_2_dat_head_ext_data_ecl_2'></div>
                                                       </div>
                                                  </div>
                                        </div>:<span>
                                        <div id='app_land_stack_1_lay_2_dat_head_cont_wind'>
                                                  <div id='app_land_stack_1_lay_2_dat_head_logo_cont_phn'>
                                                       <div id='app_land_stack_1_lay_2_dat_head_logo'>Cytescale</div>
                                                  </div>
                                        </div></span>}
     
                                        <div id='app_land_stack_1_lay_2_dat_bdy_cont'>
                                             <div id='app_land_stack_1_lay_2_dat_bdy_cont_sub'>
                                                       <div id='app_land_stack_1_lay_2_dat_bdy_main_moto_cont'>
                                                            <div id='app_land_stack_1_lay_2_dat_bdy_main_moto_cont_bdy'>
                                                            We Code
                                                            <div id='lmt_anim_txt_cont'>
                                                            <ReactTextTransition
                                                            text={texts[this.state.textIndex % texts.length]}
                                                            spring={presets.gentle}
                                                            direction="down"

                                                            className="lmt_anim_txt"
                                                            delay={2000}
                                                            inline
                                                            />
                                                            </div>
                                                            Frontend
                                                            
                                                            </div>
                                                       </div>
                                                       <div id='app_land_stack_1_lay_2_dat_bdy_sub_moto_cont'>
                                                            <div id='app_land_stack_1_lay_2_dat_bdy_sub_moto_dat_cont' >
                              We bring your Design Vision into Reality with advanced Front-end Solutions {this.state.windowWidth>850?<br></br>:<span></span>} in Java native, React native or as you prefer.
                                                            </div>
                                                            
                                                       </div>
                                                       <div id='app_land_stack_1_lay_2_ext_1_cont' >
                                                            <div id='app_land_stack_1_lay_2_ext_1_sid_1' >Scroll Down </div>
                                                            <div id='app_land_stack_1_lay_2_ext_2_sid_1' >Scroll  Down</div>
                                                       </div>
                                                       </div>
                                                  </div>
                              </div>    
                         </div>               
               
               </div>
               <div id='app_land_stack_2_2' ref={what_ref}>
               {this.state.windowWidth>850?<img id='app_land_stack_2_2_rgt_ico'src={sal2}></img>:<span></span>}
               <div id='app_land_stack_2_2_lft_slop'></div>
                                             <div id='app_land_stack_2_2_lft'>
                                                  <div id='app_land_stack_2_2_lft_tit'>
                                                       We make your life easier!
                                                  </div>
                                                  <div id='app_land_stack_2_2_lft_cont'>
                                                       We transform your beautiful designs into lines of code <br></br>
                                                       offering your absolute control over your frontend, pixel-perfect UI <br></br>
                                                       and Flexible code. Decreasing your developmental time by nearly 50%<br></br>
                                                       with Flexible pricing and much more.

                                                  </div>  
                                             </div>
                                             
                                            
               </div>
           

               <div id='app_land_stack_11' ref={contact_ref}>
                         <div id='app_land_stack_11_lft'>
                              
                              <img src={sal4} id='app_land_stack_11_lft_ico'></img>
                              
                         </div>
                         <div id='app_land_stack_11_rgt'>    
                         
                                   <div className='app_land_stack_3_head_bdy_dat_class' id='app_land_stack_3_head_bdy_dat_1_id'>
                                        <div className='app_land_stack_3_head_bdy_dat_ico_class'>
                                                  <img src={fea1} className='app_land_stack_3_head_bdy_dat_ico_class_ico'></img>
                                        </div>
                                        <div className='app_land_stack_3_head_bdy_dat_info_class'>
                                             <div className='app_land_stack_3_head_bdy_dat_info_class_tit'>
                                             Wide range of choice    
                                             </div>
                                             <div className='app_land_stack_3_head_bdy_dat_info_class_data'>
                                        Designs in every format are accepted. Photoshop, Figma, Adobe XD you name it!
                                        Submit the design and sit back to see it in action.
                                             </div>
                                        </div>
                                   </div>
                    
                    
                              <div className='app_land_stack_3_head_bdy_dat_class'>
                                   
                                        <div className='app_land_stack_3_head_bdy_dat_ico_class'>
                                                  <img src={fea2} className='app_land_stack_3_head_bdy_dat_ico_class_ico'></img>
                                        </div>
                                        <div className='app_land_stack_3_head_bdy_dat_info_class'>
                                             <div className='app_land_stack_3_head_bdy_dat_info_class_tit'>
                                             Trackable Orders    
                                             </div>
                                             <div className='app_land_stack_3_head_bdy_dat_info_class_data'>
                                             Updates of your order will be uploaded on GitHub repositories frequently during the project. 
                                             Easy development tracking, right?
                                             </div>
                                        </div>
                                   </div>

                                   <div className='app_land_stack_3_head_bdy_dat_class'>
                                        <div className='app_land_stack_3_head_bdy_dat_ico_class'>
                                                  <img src={fea3} className='app_land_stack_3_head_bdy_dat_ico_class_ico'></img>
                                        </div>
                                        <div className='app_land_stack_3_head_bdy_dat_info_class'>
                                             <div className='app_land_stack_3_head_bdy_dat_info_class_tit'>
                                             24/7 Chat Support   
                                             </div>
                                             <div className='app_land_stack_3_head_bdy_dat_info_class_data'>
                                             Chat with our supportive development team. 
                                             Discuss any last minute changes, we will sort it out. Once we are on board together, contact us any time you want.

                                             </div>
                                        </div>
                                   </div>

                                   <div className='app_land_stack_3_head_bdy_dat_class'>
                                        <div className='app_land_stack_3_head_bdy_dat_ico_class'>
                                                  <img src={fea4} className='app_land_stack_3_head_bdy_dat_ico_class_ico'></img>
                                        </div>
                                        <div className='app_land_stack_3_head_bdy_dat_info_class'>
                                             <div className='app_land_stack_3_head_bdy_dat_info_class_tit'>
                                             Fast and Reliable Delivery
                                             </div>
                                             <div className='app_land_stack_3_head_bdy_dat_info_class_data'>
                                             Orders will be completed till the estimated time of completion.
                                             Our deadlines are short, strict and well thought of. No misses!

                                             </div>
                                        </div>
                                   </div>
                         
                         </div>



               </div>
       
               <div id='app_land_stack_18' ref={contact_ref}>
                         <div id='app_land_stack_18_lft'>
                                   <div>     <div id='app_land_stack_18_lft_tit'>Get in touch</div>
                                   Do not hesitate to book a call with us if you are in a spot of getting us on board. Let’s get talking!

                                   <br></br><br></br>Also, if you have any queries with the pricing structure, reach out to us. We constantly have a lot of benefits in the cost structure for students, teams and businesses. 

                                   <br></br><br></br>Drop us a mail, and we will carry it further from there.

                                   <br></br><div className='app_land_stack_11_rgt_high'> <img className='mail_ico' src={mail_ico}></img> Mail Us <a id='app_land_stack_11_rgt_high_lnk' href='mailto:contact@cytescale.com'>contact@cytescale.com</a></div>
                                   
                                   <div className='app_land_stack_11_rgt_high'> <img className='mail_ico' src={call_ico}></img> Call on{this.state.windowWidth<850?<br></br>:<span></span>} +918668752239</div>
                              </div>
                         </div>
                         <div id='app_land_stack_18_rgt'>   
                                 <img id='app_land_stack_18_rgt_ico' src={sal5}></img>
                         </div>
               </div>

               <div id='app_land_stack_4'>
                     
                    <div id='app_land_stack_4_head_main_cont'>
                              <div id='app_land_stack_4_head_main_cont_tit'>Also,<br></br>We offer you real-time order tracking that lets you keep us in check!</div>
                    </div>
                    <div id='app_land_stack_4_data_cont'> 
                    <Carousel id='car' controls={false}>
                         <Carousel.Item id='carIte'>
                         <img
                              className="app_land_stack_4_data_cont_ico_class"
                              src={homegit}
                         />
                         <Carousel.Caption id='carcap' >
                              <h3 id='carcap_tit'>Git Hub Updates</h3>
                              <p id='capcap'>GitHub repositories are updated constantly to let you access of the development process.</p>
                         </Carousel.Caption>
                         </Carousel.Item>
                         </Carousel>
                    </div>
          </div>
             
          <div id='app_land_stack_14'>

               <div id='app_land_stack_14_lft'>
                    <div id='app_land_stack_14_lft_tit' >
                         <svg className='app_land_stack_14_lft_tit_ico' viewBox='0 0 512 512'><title>Logo Android</title><path fill='currentColor' d='M380.91 199l42.47-73.57a8.63 8.63 0 00-3.12-11.76 8.52 8.52 0 00-11.71 3.12l-43 74.52c-32.83-15-69.78-23.35-109.52-23.35s-76.69 8.36-109.52 23.35l-43-74.52a8.6 8.6 0 10-14.88 8.64L131 199C57.8 238.64 8.19 312.77 0 399.55h512c-8.19-86.78-57.8-160.91-131.09-200.55zM138.45 327.65a21.46 21.46 0 1121.46-21.46 21.47 21.47 0 01-21.46 21.46zm235 0A21.46 21.46 0 11395 306.19a21.47 21.47 0 01-21.51 21.46z'/></svg> 
                         Android Frontend
                    </div>
                    <div id='app_land_stack_14_lft_tit_sub' >
                    We provide Android Front-end Solutions with Flexible Code and Scalable Architecture,
                    in various Frameworks like Java native and React native.

                    </div>
               </div>



               
               <div id='app_land_stack_14_rgt'>
               <Fade left>
                    <div id='app_land_stack_14_rgt_bg'>
                        Designs <br></br>to<br></br>Reality<br></br>in<br></br>Flexible<br></br>Code
                    </div>
               </Fade>
                    <Fade right>
                         <div id='app_land_stack_14_rgt_phn_bdy'>     
                              <img src={and1} id='app_land_stack_14_rgt_phn_bdy_ico'></img> 
                           
                         </div>    
               </Fade>
               </div>
          </div>

          {this.state.windowWidth>850?
          <Controller><Scene
        triggerHook="onLeave"
        duration="100%"
        pin>
        <Timeline
          wrapper={<div id="pinContainer" />}
        >
          <Tween
            from={{padding: '84px',borderRadius:'32px' }}
            to={{ padding: '0px' ,borderRadius:'0px',ease: "Power4.easeOut"}}
          >
               <div id='app_land_stack_20'>
                    <div id='app_land_stack_20_cont'>
                    Stay ahead of competition
                    </div>
             </div>
               </Tween></Timeline></Scene></Controller>
               :    <span>
                    <div id='app_land_stack_20'>
                         <div id='app_land_stack_20_cont'>
                                   Stay ahead of competition
                         </div>
                    </div>
                    </span>
               }




          <div id='app_land_stack_15'>
               <div id='app_land_stack_15_slop'></div>
          <div id='app_land_stack_15_lft'>
                    <div id='app_land_stack_15_lft_tit' >
                         Low Pricing
                    </div>
                    <div id='app_land_stack_15_lft_tit_sub' >
                         By reducing your Work by 50%, we can literally give you a Headstart in your Tech journey for
                    </div>
                    <div id='app_land_stack_15_lft_tit_data'>
                    
                    <div className='app_land_stack_15_lft_1_class' id='app_land_stack_15_lft_1' >
                              <div  className='app_land_stack_15_lft_1_class_tit'>
                              Essential     
                              </div>
                              <div  className='app_land_stack_15_lft_1_class_data'>
                              For single layout projects
                              </div>
                              <div  className='app_land_stack_15_lft_1_class_data_sub'>
                              Made for single layout
                              Android application or website.
                              <br></br>Eg: porfolios, blogs, etc.
                              </div>
                              <div  className='app_land_stack_15_lft_1_class_data_cost'>
                              27$
                              </div>
                              <div className='app_land_stack_15_lft_1_get_butt'>
                              
                                   <a className='app_land_stack_15_lft_1_get_butt_lnk' href='mailto:contact@cytescale.com'>Get Now !</a>
                              </div>
                    </div>
                    
                    <div className='app_land_stack_15_lft_1_class' id='app_land_stack_15_lft_1' >

                    <div  className='app_land_stack_15_lft_1_class_tit'>
                              Pro
                    </div>
                              <div  className='app_land_stack_15_lft_1_class_data'>
                              For multi layout projects
                              </div>
                              <div  className='app_land_stack_15_lft_1_class_data_sub'>
                              Made for multi layout
                              Android applications or websites with
                              industry standard code and dedicated support.
                              </div>
                              <div  className='app_land_stack_15_lft_1_class_data_cost'>
                              97$
                              </div>
                              <div className='app_land_stack_15_lft_1_get_butt'>
                                   <a className='app_land_stack_15_lft_1_get_butt_lnk' href='mailto:contact@cytescale.com'>Get Now !</a>
                              </div>
                    </div>

                    <div className='app_land_stack_15_lft_1_class' id='app_land_stack_15_lft_1' >
                              <div  className='app_land_stack_15_lft_1_class_tit'>
                                   Business
                                   </div>
                                   <div  className='app_land_stack_15_lft_1_class_data'>
                              For Complex projects
                              </div>
                              <div  className='app_land_stack_15_lft_1_class_data_sub'>
                                   Made for complicated projects 
                                   for agencies and companies,
                                   working closely with teams.
                              </div>
                              <div  className='app_land_stack_15_lft_1_class_data_cost'>
                                 
                              </div>
                              <div className='app_land_stack_15_lft_1_get_butt'>
                              
                              <a className='app_land_stack_15_lft_1_get_butt_lnk' href='https://www.cytescale.com/contact'>Contact Us</a>
                         </div>
                    </div>
                    
                    </div>
               </div>
               </div>
          
          <SectionWipes2Styled>
    <Controller>
      <Scene
        triggerHook="onLeave"
        duration="300%"
        pin
      >
        <Timeline
          wrapper={<div id="pinContainer" />}
        >
          <section className="panel blue">
               <div id='app_land_stack_19'>
                    Make your move...
               </div>
          </section>
          <Tween
            from={{ x: '-100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel green">
            <div id='app_land_stack_19'>
                    Level-up digitally
               </div>
                 </section>   
          </Tween>
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel green">

            <div id='app_land_stack_17'>
               <div id='app_land_stack_17_lft'>
                    <div id='app_land_stack_17_lft_tit' >
                       Best-in-class Support
                    </div>
                    <div id='app_land_stack_17_rgt_bdy'>
                    "We will be readily available to be in touch with you throughout the development days
                    (even after that, if a need occurs).
                    Our team is well-equipped to solve all your queries in absolutely no time.
                    Got an issue? Consider it solved, we will be just a call away!
                    You could contact us without hesitation.
                    The Responsive support from our side is what our customers like the most."
                    <br></br>Mail -- Chat -- Call
                    </div>    
               </div><div id='app_land_stack_17_rgt_bg'>
                         <img src={support_ico} id='app_land_stack_17_rgt_bg_ico'></img>
                    </div>               
               <div id='app_land_stack_17_rgt'>
                    
                         <img  id='app_land_stack_17_rgt_ico' src={sal3}></img>
               </div>

          </div>

            </section>
          </Tween>
          <Tween
            from={{ y: '-100%' }}
            to={{ y: '0%' }}
          >
            <section className="panel bordeaux">
        


        <div ref={query_ref}>
           
                  <div id='app_land_stack_5' >
                            <div id='app_land_stack_5_lft_cont'>
                                 <div id='app_land_stack_5_lft_sub_cont'>
                                 <div id='app_land_stack_5_lft_cont_tit'>Got any<br></br> questions for us?</div>
                                 <div id='app_land_stack_5_lft_cont_sub_tit'>Submit a query here or say hi : contact@cytescale.com </div>
   
                                 
                                 </div>
                            </div>
                            <div id='app_land_stack_5_rgt_cont'>
                                 <div id='app_land_stack_5_rgt_cont_form_cont'>
                                      <form onSubmit={this.querySubmit}>  
                                           <div className='app_setting_main_bdy_tit_main_sub_opt_cont'>
                                      <div className='app_setting_main_bdy_tit_main_sub_opt_cont_tit'>Full Name*</div>
                                      <input type='text' placeholder='Enter full name'     value={this.state.feedname}  onChange={this.handleQueryChange.bind(this, 'feedname')} className='app_setting_main_bdy_tit_main_sub_opt_cont_data'></input>
                                           </div>
                                           <div className='app_setting_main_bdy_tit_main_sub_opt_cont'>
                                      <div className='app_setting_main_bdy_tit_main_sub_opt_cont_tit'>Email Address*</div>
                                      <input type='text' placeholder='Enter email address' value={this.state.feedemail} onChange={this.handleQueryChange.bind(this, 'feedemail')} className='app_setting_main_bdy_tit_main_sub_opt_cont_data'></input>
                                           </div> 
                                           <div className='app_setting_main_bdy_tit_main_sub_opt_cont'>
                                      <div className='app_setting_main_bdy_tit_main_sub_opt_cont_tit'>Company Name</div>
                                      <input type='text' placeholder='Enter company name if any' value={this.state.feedcompany} onChange={this.handleQueryChange.bind(this, 'feedcompany')}  className='app_setting_main_bdy_tit_main_sub_opt_cont_data'></input>
                                           </div>
                                           <div className='app_setting_main_bdy_tit_main_sub_opt_cont'>
                                      <div className='app_setting_main_bdy_tit_main_sub_opt_cont_tit'>Query*</div>
                                           <textarea id='app_land_stack_5_rgt_cont_txt' value={this.state.feedquery} onChange={this.handleQueryChange.bind(this, 'feedquery')}></textarea>
                                           </div>
                                           {
                                           this.state.feederrcode===1?                                
                                           <Alert variant='danger'>
                                           {this.state.feederr}
                                           </Alert>:<span></span>
                                           }
   
   
                                           <Button variant='success' type='submit' className='app_land_stack_5_rgt_cont_form_cont_sub_butt'>Submit</Button>
                                           </form>
                                 </div>
   
                            </div>
                  </div>     
                  </div></section>
          </Tween>
        </Timeline>
      </Scene>
    </Controller>
  </SectionWipes2Styled>

          
          
               <div id='app_land_stack_9' >
                         <div id='app_land_stack_9_tit'>FAQ</div>          
                         <div id='app_land_stack_9_dat'>
                                   <div id='app_land_stack_9_dat_col_1'>
                                             <div>
                                             <div id='app_land_stack_9_dat_ques_cont'>
                                                  <div id='app_land_stack_9_dat_ques_tit'>1. What is the estimated time to get the project done?</div>
                                                  <div id='app_land_stack_9_dat_ques_ans'>
                                                  Depending on the scale of the project, the time may vary. As a team, 
                                                  we are absolutely on our toes to get the project to its destination with industry-standard quality.
                                                  Roughly, we asssure you maximum 15 days of persistent work and completion of project.
                                                  Trust us, we never miss our deadlines!</div>
                                             </div>

                                             <div id='app_land_stack_9_dat_ques_cont'>
                                                  <div id='app_land_stack_9_dat_ques_tit'>2. How does order tracking exactly work?</div>
                                                  <div id='app_land_stack_9_dat_ques_ans'>
                                                  We keep you updated at every major/minor updates on E-mail, Github or the way you prefer.
                                                  The development process is completely transparent and you can ask for any queries to the development team,
                                                  we are readily available to respond on the go.</div>
                                             </div>
                                             </div>
                                   </div>

                                   <div id='app_land_stack_9_dat_col_2'>
                                             
                                             <div id='app_land_stack_9_dat_ques_cont'>
                                                  <div id='app_land_stack_9_dat_ques_tit'>3. How to make a order?</div>
                                                  <div id='app_land_stack_9_dat_ques_ans'>
                                                                                
                                                                                a) Send us an email which you'll find here.
                                                                                Let's get talking! <br></br>
                                                                                b) Submit your designs by attaching them to the mail. <br></br>
                                                                                c) Make the Payment. <br></br>
                                                                                d) Done! <br></br>
                                                  </div>
                                             </div>    
                                             <div id='app_land_stack_9_dat_ques_last_cont'>
                                                  <div id='app_land_stack_9_dat_ques_tit'>4. What if I need a fully functional Website/App?</div>
                                                  <div id='app_land_stack_9_dat_ques_ans'> We primarily offer Frontend solutions. But, if you just have an idea and 
                                                                                          you want a complete app/website done, ask us for the details and we might have 
                                                                                          something in the bag for you.
                                                                                          In a scenario, where you want designs, frontend and backend of a website or an app, contact us and
                                                                                          lets see what we can do for you.
                                                  </div>
                                             </div>
                                             
                                   </div>
                         </div>
               </div>


               <div id='app_land_stack_10'>
                    <div id='app_land_stack_10_dat'>
               We handcrafted this website with Pride and Love &#x2665;
               </div>
               </div>


               {/* <div id='app_land_stack_13'>
                         <div id='app_land_stack_13_lft'>
                              We knew you were interested
                         </div>
                         <div id='app_land_stack_13_rgt'>
                              Reach Us Now at Contact@cytescale.com
                         </div>
               </div> */}
               
               <div id='app_land_stack_16'>
                    <div id='app_land_stack_16_bg'>

                    </div>
                         <div id='app_land_stack_16_cont'>
                         <div id='app_land_stack_16_pro'>
                              <img src={test_co} id='app_land_stack_16_pro_ico'></img>
                         </div>
                         <div id='app_land_stack_16_data'>
                              "We assure you best-in-class services
                              from our end. No compromises."
                         </div>
                         <div id='app_land_stack_16_name'>
                              Nishant Shete
                         </div>
                         <div id='app_land_stack_16_tit'>
                              Co-founder
                         </div>
                         </div>
               </div>

{/*


               <div id='app_land_stack_6'>
                    <div id='app_land_stack_6_left_cont'>
                              Dashboard
                    </div>
                    <div id='app_land_stack_6_rgt_cont'>
                              <div id='app_land_stack_6_rgt_data'>
                              Coming Soon
                              </div>
                    </div>


               </div> */}
               <div id='app_land_stack_7'>
                    {/* <div id='app_land_stack_7_lft'>
                    <a className='app_land_stack_7_lnk_logo' href='#'>Cytescale</a>
                         <a className='app_land_stack_7_lnk_class' href='#'>Home</a>
                         <a className='app_land_stack_7_lnk_class' href='#'>Privacy</a>4
                         <a className='app_land_stack_7_lnk_class' href='#'>Contact</a>
                         <a className='app_land_stack_7_lnk_class' href='#'>Terms of use</a>
                         <a className='app_land_stack_7_lnk_class' href='#'>About Us</a>
                         <a className='app_land_stack_7_lnk_class' href='#'>Refund policy</a>
                    </div> */}
                    <div id='app_land_stack_7_rgt'>
                         <div id='app_land_stack_7_rgt_dat'>
                         <a className='app_land_stack_7_lnk_class'></a>
                         <a className='app_land_stack_7_lnk_class' href='////www.facebook.com/Cytescale-104775144804086'><img className='app_land_stack_7_lnk_ico'src={face_log}></img></a>
                         <a className='app_land_stack_7_lnk_class' href='////www.twitter.com/cytescale'><img className='app_land_stack_7_lnk_ico'src={gog_log}></img></a>
                         <a className='app_land_stack_7_lnk_class' href='////www.instagram.com/cytescale?igshid=6dl3co5b77wz'><img className='app_land_stack_7_lnk_ico'src={int_log}></img></a>
                         {/* <a className='app_land_stack_7_lnk_class' href='////www.github.com/Cytescale'><img className='app_land_stack_7_lnk_ico'src={git_log}></img></a> */}
                         <a className='app_land_stack_7_lnk_class' href='////www.linkedin.com/in/cytescale-team-71208b1ab'><img className='app_land_stack_7_lnk_ico'src={link_log}></img></a>
                         </div>
                    </div>
               </div>

        </div>);
     }
}

// 6363FF