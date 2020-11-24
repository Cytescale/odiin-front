import React from 'react';
import {Accordion,Card,Popover,OverlayTrigger,Carousel, Button} from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/priApp.css';
import '../css/land.css';
import '../css/land_res_1080.css';
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

import git_log from '../../assets/logo_github.svg';
import int_log from '../../assets/logo_inst.svg';
import up_arrow from '../../assets/svg/up_arrow.svg';
import menu_ico from '../../assets/svg/menu.svg';
import mail_ico from '../../assets/svg/mail_outline.svg';
import { slide as Menu } from 'react-burger-menu'


import axios from 'axios';
export default class LandClass extends React.Component{
    constructor(props){
        super(props);    
        this.state = {
            isLogged:true,
            isDark:false,
            logedUserId:null,
            currSite:0,
            theposition: window.pageYOffset,
            windowWidth: window.innerWidth
          }
          this.listenToScroll = this.listenToScroll.bind(this);
          
          this.listenToScroll();
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
     Animation = () => (
     <ScrollAnimation animateIn="fadeIn">Some Text</ScrollAnimation>
   )
   
 componentDidMount() {
     window.addEventListener('scroll', this.listenToScroll)
   }
   
   componentWillUnmount() {
     window.removeEventListener('scroll', this.listenToScroll)
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

    render(){
     const height =
     document.documentElement.scrollHeight -
     document.documentElement.clientHeight;


         var setWid = (this.state.theposition*100)+"%";
        return(

        <div className='app_bdy_land_main_bdy'>
          {this.state.theposition>0.02?
          <div className='app_float_butt'>
                    <a className='app_float_butt_lnk' href='#'>Contact Us</a>
          </div>:<span></span>}
          {this.state.windowWidth<850?this.state.theposition>0.02?<div id='up_arr_cont'><img id='up_arr_cont_ico' src={up_arrow}></img></div>:<span></span>:<span></span>}


          {this.state.theposition>0.02?
               <div id='app_land_fix_header'>
                                   {this.state.windowWidth<850?
                                                       <Menu id='menu' width={ '90%' }  customBurgerIcon={ <img className='menu_ico_butt' src={menu_ico}/> } >                                                       
                                                       <a id="home" className="menu-item" href="/">Home</a>
                                                       <a id="about" className="menu-item" href="/about">About</a>
                                                       <a id="contact" className="menu-item" href="/contact">Contact</a>
                                                       <a id="contact" className="menu-item" href="/contact">What We Do?</a>
                                                       <a id="contact" className="menu-item" href="/contact">Query</a>
                                                       </Menu>:<span></span>
                                                       }
                                   <div id='app_land_stack_1_lay_2_dat_head_cont'>
                                   
                                                  <div id='app_land_stack_1_lay_2_dat_head_logo_cont'>
                                                       <div id='app_land_stack_1_lay_2_dat_head_logo'>Cytescale</div>
                                                  </div>
                                                  <div id='app_land_stack_1_lay_2_dat_head_lnk_cont'>
                                                       <div id='app_land_stack_1_lay_2_dat_head_lnk_cont_dat'>
                                                       <div className='pp_land_stack_1_lay_2_dat_head_lnk_class' id='app_land_stack_1_lay_2_dat_head_lnk_1_cont'><a href='#' className='app_land_stack_1_lay_2_dat_head_lnk_1' >Home</a></div>
                                                       <div  className='pp_land_stack_1_lay_2_dat_head_lnk_class'  id='app_land_stack_1_lay_2_dat_head_lnk_2_cont'><a href='#' className='app_land_stack_1_lay_2_dat_head_lnk_1' >Contact</a></div>
                                                       <div  className='pp_land_stack_1_lay_2_dat_head_lnk_class'  id='app_land_stack_1_lay_2_dat_head_lnk_3_cont'><a href='#' className='app_land_stack_1_lay_2_dat_head_lnk_1' >What we do?</a></div>
                                                       <div  className='pp_land_stack_1_lay_2_dat_head_lnk_class'  id='app_land_stack_1_lay_2_dat_head_lnk_4_cont'><a href='#' className='app_land_stack_1_lay_2_dat_head_lnk_1' >Query</a></div>
                                                       </div>
                                                  </div>
                                        
                                   </div> 
                                   <div id='app_prog_cont' style={{width:setWid}}></div>                          
               </div>:<span></span>}
               <div id='app_land_stack_1'>
                         <div className='app_land_stack_1_lay_class' id='app_land_stack_1_lay_1'>
                              <div id='app_land_stack_1_lay_1_eclp_cont'> 
                                        <div id='app_land_stack_1_lay_1_eclp_1'></div>
                                        <div id='app_land_stack_1_lay_1_eclp_2'></div>
                                        <div id='app_land_stack_1_lay_1_eclp_3'></div>
                              </div>
                              <div id='app_land_stack_1_lay_1_grid_cont'>
                                   <img className='app_land_stack_1_lay_1_grid_cont_ico'src={grid_svg}></img>
                              </div>
                              <div id='app_land_stack_1_lay_1_iph_cont'>
                                   <img className='app_land_stack_1_lay_1_iph_cont_ico'src={homeiphone}></img>
                              </div>
                         </div>
                         <div className='app_land_stack_1_lay_class' id='app_land_stack_1_lay_2'>
                              <div id='app_land_stack_1_lay_2_dat'>
                              {this.state.windowWidth>850?
                                        <div id='app_land_stack_1_lay_2_dat_head_cont'>
                                                  <div id='app_land_stack_1_lay_2_dat_head_logo_cont'>
                                                       <div id='app_land_stack_1_lay_2_dat_head_logo'>
                                                            Cytescale</div>
                                                  </div>
                                                  <div id='app_land_stack_1_lay_2_dat_head_lnk_cont'>
                                                       <div className='pp_land_stack_1_lay_2_dat_head_lnk_class' id='app_land_stack_1_lay_2_dat_head_lnk_1_cont'><a href='#' id='app_land_stack_1_lay_2_dat_head_lnk_1' >Home</a></div>
                                                       <div  className='pp_land_stack_1_lay_2_dat_head_lnk_class'  id='app_land_stack_1_lay_2_dat_head_lnk_2_cont'><a href='#' id='app_land_stack_1_lay_2_dat_head_lnk_2' >Contact</a></div>
                                                       <div  className='pp_land_stack_1_lay_2_dat_head_lnk_class'  id='app_land_stack_1_lay_2_dat_head_lnk_3_cont'><a href='#' id='app_land_stack_1_lay_2_dat_head_lnk_3' >Pricing</a></div>
                                                       
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
                                                            You Design 
                                                            {
                                                            this.state.windowWidth<850?
                                                            <br></br>:<span></span>
                                                            }
                                                            <div id='the_x'>X</div> 
                                                            We Code
                                                       </div>
                                                       <div id='app_land_stack_1_lay_2_dat_bdy_sub_moto_cont'>
                                                            <div id='app_land_stack_1_lay_2_dat_bdy_sub_moto_dat_cont' >
                                                            We bring your Design Vision to Reality with Robust and Fast Programming in Java Native, React Native or as your prefer
                                                            </div>
                                                            
                                                       </div>
                                                       <div id='app_land_stack_1_lay_2_ext_1_cont' >
                                                            <div id='app_land_stack_1_lay_2_ext_1_sid_1' >We Make Your Design</div>
                                                            <div id='app_land_stack_1_lay_2_ext_1_sid_2'>X  Come to Reality</div>

                                                       </div>
                                                       </div>
                                                  </div>
                              </div>    
                         </div>
               </div>
              
               <div id='app_land_stack_2'>
                         
                         <div id='app_land_stack_2_dat_cont'>
                         
                                   <div id='app_land_stack_2_dat_1'>
                                        <img className='app_land_stack_2_dat_1_ico'src={homedesign}></img>  
                                     </div>   
                                     <div id='app_land_stack_2_dat_2'>
                                        <div id='app_land_stack_2_dat_2_anim'></div>
                                        
                                     </div>   
                                     <div id='app_land_stack_2_dat_1'>
                                        <img className='app_land_stack_2_dat_1_ico' src={homefront}></img>  
                                     </div>   
                         
                         </div>
                         

               </div>
               {this.state.windowWidth<850?
     <Fade bottom> 
               <div id='app_land_stack_12'>
                    <div id='app_land_stack_12_dat'>
               
                    <div id='app_land_stack_12_lft'>
                                                       <div id='app_land_stack_12_lft_dat'>
                                                       We Make Your<br></br>Life Easiser!
                                                       </div>
                    </div>
                    <div id='app_land_stack_12_rgt'>
                         <div id='app_land_stack_12_rgt_dat'>
                              <div id='app_land_stack_12_rgt_dat_tit'>We transform your beautiful desings into lines of code, offering you </div>
                         <div className='app_land_stack_12_rgt_dat_cont'><svg xmlns='http://www.w3.org/2000/svg' className='app_land_stack_12_rgt_dat_cont_ico' viewBox='0 0 512 512'><title>Checkmark</title><path fill='none' stroke='#6FCF97' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M416 128L192 384l-96-96'/></svg>Absolute control of your Frontend.</div>
                         <div className='app_land_stack_12_rgt_dat_cont'><svg xmlns='http://www.w3.org/2000/svg' className='app_land_stack_12_rgt_dat_cont_ico' viewBox='0 0 512 512'><title>Checkmark</title><path fill='none' stroke='#6FCF97' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M416 128L192 384l-96-96'/></svg>Best-in-class Technology.</div>
                         <div className='app_land_stack_12_rgt_dat_cont'><svg xmlns='http://www.w3.org/2000/svg' className='app_land_stack_12_rgt_dat_cont_ico' viewBox='0 0 512 512'><title>Checkmark</title><path fill='none' stroke='#6FCF97' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M416 128L192 384l-96-96'/></svg>Maximum Security.</div>
                         </div>

                    </div>
                    </div>
               </div>
               </Fade>:<span></span> }
               
               

               <div id='app_land_stack_3'>
                    <div id='app_land_stack_3_head_main_cont'>
                         What we provide?
                    </div>
                    <div id='app_land_stack_3_head_bdy_cont'> 
                              <div id='land_col_1'>
                              <Fade bottom>
                              <div id='land_rw1_cl_1' >     
                                   <div className='app_land_stack_3_head_bdy_dat_class'>
                                        <div className='app_land_stack_3_head_bdy_dat_ico_class'>
                                                  <img src={fea1} className='app_land_stack_3_head_bdy_dat_ico_class_ico'></img>
                                        </div>
                                        <div className='app_land_stack_3_head_bdy_dat_info_class'>
                                             <div className='app_land_stack_3_head_bdy_dat_info_class_tit'>
                                             We Accept Everything!    
                                             </div>
                                             <div className='app_land_stack_3_head_bdy_dat_info_class_data'>
                                        Designs in every format are accepted. Photoshop, Figma, Adobe XD you name it!
                                        Submit the design and sit back to see it in action.
                                             </div>
                                        </div>
                                   </div>

                              </div>
                              </Fade>
                              <Fade bottom>
                              <div id='land_rw1_cl_2' >
                              <div className='app_land_stack_3_head_bdy_dat_class'>
                                        <div className='app_land_stack_3_head_bdy_dat_ico_class'>
                                                  <img src={fea2} className='app_land_stack_3_head_bdy_dat_ico_class_ico'></img>
                                        </div>
                                        <div className='app_land_stack_3_head_bdy_dat_info_class'>
                                             <div className='app_land_stack_3_head_bdy_dat_info_class_tit'>
                                             Trackable Orders    
                                             </div>
                                             <div className='app_land_stack_3_head_bdy_dat_info_class_data'>
                                             Updates of your order will be uploaded on GitHub repositories.
Easy development tracking, right?
                                             </div>
                                        </div>
                                   </div>

                              </div>
                              </Fade>
                              </div>


                              <div id='land_col_2'>
                              <Fade bottom>
                              <div id='land_rw2_cl_1' >

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
Discuss any last minute changes, we will sort it out.
                                             </div>
                                        </div>
                                   </div>

                              </div>
                              </Fade>
                              <Fade bottom>
                              <div id='land_rw2_cl_2' >

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
                              </Fade>
                              </div>
                    </div>
               </div>
               
               <div id='app_land_stack_11'>
                         <div id='app_land_stack_11_lft'>
                         You seem <br></br>interested already <br></br>Get in touch!                                   
                         </div>
                         <div id='app_land_stack_11_rgt'>   
                                   
                                   {/* {this.state.windowWidth<850?<div id='app_land_stack_11_rgt_cont'><img className='app_land_stack_11_rgt_ico' src={homecontact}></img></div>:<div id='app_land_stack_11_rgt_tit'>Get in Touch</div>} */}
                                   
                                   Do not hesitate to book a call with us if you are in a spot of getting us on board. Let’s get talking!

                                   <br></br><br></br>Also, if you have any queries with the pricing structure, reach out to us. We constantly have a lot of benefits in the cost structure for students, teams and businesses. 

                                   <br></br><br></br>Drop us a mail, and we will carry it further from there.

                                   <br></br><div className='app_land_stack_11_rgt_high'> <img className='mail_ico' src={mail_ico}></img> Get in touch contact@cytescale.com</div>
                         </div>
               </div>

               <Fade bottom>
               <div id='app_land_stack_4'>
                    
                         <div id='app_land_stack_4_head_main_cont'>
                         The Real-time order tracking
                              you need to track every step
                              made in building your product !
                         </div>
                         <div id='app_land_stack_4_data_cont'> 
                         <Carousel id='car'>
                              <Carousel.Item id='carIte'>
                              <img
                                   className="app_land_stack_4_data_cont_ico_class"
                                   src={homegit}
                              />
                              <Carousel.Caption id='carcap' >
                                   <h3>Git Hub Updates</h3>
                                   <p id='capcap'>Also, we offer you real-time order tracking that lets you keep us in check! ;)</p>
                              </Carousel.Caption>
                              </Carousel.Item>
                              {/* <Carousel.Item id='carIte'>
                              <img
                                   className="app_land_stack_4_data_cont_ico_class"
                                   src={homegit}
                              />
                              <Carousel.Caption  id='carcap'>
                                   <h3>Easy Contact Options</h3>
                                   <p id='capcap'>We never leave you. feel free to contact us anytime you want.</p>
                              </Carousel.Caption>
                              </Carousel.Item> */}
                              </Carousel>
                         </div>
               </div>
               </Fade>
{/* 
               <div id='app_land_stack_8'>   
                    
                    <div className='app_land_stack_8_lft'>
                              <img src={homesupportico} id='app_land_stack_8_lft_ico'></img>
                              
                    </div>
                    <div className='app_land_stack_8_rgt'>
                         <div>
                         <div id='app_land_stack_8_rgt_tit'>We Never Leave You  </div>
                         <div id='app_land_stack_8_rgt_tit_sub'>
                              Best in class customer suppport
                         </div>
                         <div id='app_land_stack_8_rgt_dat'>
                              At every moment before order completion and after
                              order completion we never leave you , Our tech team
                              and sales team are very happy to solve very queries.
                              At every moment before order completion and after
                              order completion we never leave you , Our tech team
                              and sales team are very happy to solve very queries.
                              

                         </div>
                         </div>    
                    </div>
          </div> */}

               <Fade bottom>
               <div id='app_land_stack_5'>
                         <div id='app_land_stack_5_lft_cont'>
                              <div id='app_land_stack_5_lft_sub_cont'>
                              <div id='app_land_stack_5_lft_cont_tit'>Got any questions for us?</div>
                              <div id='app_land_stack_5_lft_cont_sub_tit'>Contact Us at support@cytescale.com
                              or Submit a query here </div>

                              <div className='app_land_stack_5_lft_cont_sub_data_tit'>Talk to our great sales guys</div>
                              <div className='app_land_stack_5_lft_cont_sub_data'><svg xmlns='http://www.w3.org/2000/svg' className='app_land_stack_5_lft_cont_sub_data_ico' viewBox='0 0 512 512'><title>Checkmark</title><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M416 128L192 384l-96-96'/></svg>Instant Responses</div>
                              <div className='app_land_stack_5_lft_cont_sub_data'><svg xmlns='http://www.w3.org/2000/svg' className='app_land_stack_5_lft_cont_sub_data_ico' viewBox='0 0 512 512'><title>Checkmark</title><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M416 128L192 384l-96-96'/></svg>Solution Assured</div>
                              </div>
                         </div>
                         <div id='app_land_stack_5_rgt_cont'>
                              <div id='app_land_stack_5_rgt_cont_form_cont'>
                                        <div className='app_setting_main_bdy_tit_main_sub_opt_cont'>
                                   <div className='app_setting_main_bdy_tit_main_sub_opt_cont_tit'>Full Name*</div>
                                   <input type='text' placeholder='Enter full name' className='app_setting_main_bdy_tit_main_sub_opt_cont_data'></input>
                                        </div>
                                        <div className='app_setting_main_bdy_tit_main_sub_opt_cont'>
                                   <div className='app_setting_main_bdy_tit_main_sub_opt_cont_tit'>Email Address*</div>
                                   <input type='text' placeholder='Enter email address' className='app_setting_main_bdy_tit_main_sub_opt_cont_data'></input>
                                        </div>
                                        <div className='app_setting_main_bdy_tit_main_sub_opt_cont'>
                                   <div className='app_setting_main_bdy_tit_main_sub_opt_cont_tit'>Company Name</div>
                                   <input type='text' placeholder='Enter full name' className='app_setting_main_bdy_tit_main_sub_opt_cont_data'></input>
                                        </div>
                                        <div className='app_setting_main_bdy_tit_main_sub_opt_cont'>
                                   <div className='app_setting_main_bdy_tit_main_sub_opt_cont_tit'>Query</div>
                                        <textarea id='app_land_stack_5_rgt_cont_txt'></textarea>
                                        </div>
                                        <Button variant='success'className='app_land_stack_5_rgt_cont_form_cont_sub_butt'>Submit</Button>
                              </div>

                         </div>
               </div>
               </Fade>
               

               <div id='app_land_stack_9'>
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
                                                  <div id='app_land_stack_9_dat_ques_tit'>2.How does order tracking exactly work?</div>
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
                                                       You just have to contact us with the provided information or
                                                       send us an email with designs attached and we will start our 
                                                       work right way. No hastle no complications.
                                                  </div>
                                             </div>    
                                             <div id='app_land_stack_9_dat_ques_last_cont'>
                                                  <div id='app_land_stack_9_dat_ques_tit'>4. What kind of frontend solutions we offer?</div>
                                                  <div id='app_land_stack_9_dat_ques_ans'>We provide frontend solutions for websites , webpages and andriod application in native code or in frameworks such as
                                                  React, React Native , Java Native
                                                  </div>
                                             </div>
                                             
                                   </div>
                         </div>
               </div>


               <div id='app_land_stack_10'>
                    We handcrafted this website with proud and love 
               </div>


               <div id='app_land_stack_13'>
                         <div id='app_land_stack_13_lft'>
                              We knew you were interested
                         </div>
                         <div id='app_land_stack_13_rgt'>
                              Reach Us Now at Contact@cytescale.com
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
                         <a className='app_land_stack_7_lnk_class' href='#'><img className='app_land_stack_7_lnk_ico'src={face_log}></img></a>
                         <a className='app_land_stack_7_lnk_class' href='#'><img className='app_land_stack_7_lnk_ico'src={gog_log}></img></a>
                         <a className='app_land_stack_7_lnk_class' href='#'><img className='app_land_stack_7_lnk_ico'src={int_log}></img></a>
                         <a className='app_land_stack_7_lnk_class' href='#'><img className='app_land_stack_7_lnk_ico'src={git_log}></img></a>
                         <a className='app_land_stack_7_lnk_class' href='#'><img className='app_land_stack_7_lnk_ico'src={link_log}></img></a>
                         </div>
                    </div>
               </div>

        </div>);
     }
}