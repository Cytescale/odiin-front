import React from 'react';
import {Accordion,Card,Popover,OverlayTrigger,Carousel, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/priApp.css';
import '../css/land.css';
import grid_svg from '../../assets/svg/grid.svg';
import homedesign from '../../assets/svg/homedesign.svg';
import homefront from '../../assets/svg/homefront.svg';
import fea1 from  '../../assets/svg/fea1.svg';
import fea2 from  '../../assets/svg/fea2.svg';
import fea3 from  '../../assets/svg/fea3.svg';
import fea4 from  '../../assets/svg/fea4.svg';
import homegit from '../../assets/svg/homegit.svg';
import homesupportico from '../../assets/landsupport.png';

import axios from 'axios';
export default class LandClass extends React.Component{
    constructor(props){
        super(props);    
        this.state = {
            isLogged:true,
            isDark:false,
            logedUserId:null,
            currSite:0,
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
 
    render(){
         console.log(this.state.windowWidth);     
        return(
        <div className='app_bdy_land_main_bdy'>
               <div id='app_land_stack_1'>
                         <div className='app_land_stack_1_lay_class' id='app_land_stack_1_lay_1'>
                              <div id='app_land_stack_1_lay_1_eclp_cont'> 
                                        <div id='app_land_stack_1_lay_1_eclp_1'></div>
                                        <div id='app_land_stack_1_lay_1_eclp_2'></div>
                                        <div id='app_land_stack_1_lay_1_eclp_3'></div>
                              </div>
                              <div id='app_land_stack_1_lay_1_grid_cont'>
                                   <img src={grid_svg}></img>
                              </div>
                         </div>
                         <div className='app_land_stack_1_lay_class' id='app_land_stack_1_lay_2'>
                              <div id='app_land_stack_1_lay_2_dat'>
                                        <div id='app_land_stack_1_lay_2_dat_head_cont'>
                                                  <div id='app_land_stack_1_lay_2_dat_head_logo_cont'>
                                                       <div id='app_land_stack_1_lay_2_dat_head_logo'>Cytescale</div>
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
                                        </div>
                                        <div id='app_land_stack_1_lay_2_dat_sub_head_cont'></div>
                                        <div id='app_land_stack_1_lay_2_dat_bdy_cont'>
                                                       <div id='app_land_stack_1_lay_2_dat_bdy_main_moto_cont'>
                                                            You Design <div id='the_x'>X</div> We Code
                                                       </div>
                                                       <div id='app_land_stack_1_lay_2_dat_bdy_sub_moto_cont'>
                                                            <div id='app_land_stack_1_lay_2_dat_bdy_sub_moto_dat_cont' >
                                                            We bring your design vision to reality with robust and fast programming in Java Native or React Native as your prefer.
                                                            </div>
                                                            
                                                       </div>
                                                       <div id='app_land_stack_1_lay_2_ext_1_cont' >
                                                            <div id='app_land_stack_1_lay_2_ext_1_sid_1' >We Make Your Design</div>
                                                            <div id='app_land_stack_1_lay_2_ext_1_sid_2'>Come to Reality</div>

                                                       </div>
                                                  </div>
                              </div>    
                         </div>
               </div>
               <div id='app_land_stack_2'>
                         
                         <div id='app_land_stack_2_dat_cont'>
                                   <div id='app_land_stack_2_dat_1'>
                                        <img src={homedesign}></img>  
                                     </div>   
                                     <div id='app_land_stack_2_dat_2'>
                                        Cytescale&gt;  
                                     </div>   
                                     <div id='app_land_stack_2_dat_1'>
                                        <img src={homefront}></img>  
                                     </div>   
                         </div>
                         

               </div>
               <div id='app_land_stack_3'>
                    <div id='app_land_stack_3_head_main_cont'>
                         What we provide?
                    </div>
                    <div id='app_land_stack_3_head_bdy_cont'> 
                              <div id='land_col_1'>
                              <div id='land_rw1_cl_1' >
                                   
                                   <div className='app_land_stack_3_head_bdy_dat_class'>
                                        <div className='app_land_stack_3_head_bdy_dat_ico_class'>
                                                  <img src={fea1} className='app_land_stack_3_head_bdy_dat_ico_class_ico'></img>
                                        </div>
                                        <div className='app_land_stack_3_head_bdy_dat_info_class'>
                                             <div className='app_land_stack_3_head_bdy_dat_info_class_tit'>
                                                       Multiple Design Formats
                                             </div>
                                             <div className='app_land_stack_3_head_bdy_dat_info_class_data'>
                                             Designs in any and every format are accepted.
                                             Photoshop , Figma , Adobe XD you name it!
                                             </div>
                                        </div>
                                   </div>

                              </div>
     
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
                                             Track your order at every step. Every 
                                             update can be monitored!
                                             </div>
                                        </div>
                                   </div>

                              </div>
                              </div>


                              <div id='land_col_2'>
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
                                             Chat with our supportive development team. Discuss any last mintue changes
                                             </div>
                                        </div>
                                   </div>

                              </div>
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
                                             Orders will be complete before or till the projected estimated time of completion.
                                             </div>
                                        </div>
                                   </div>

                              </div>
                              </div>
                    </div>
               </div>
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
                                   <p id='capcap'>Updates of your order will be 
uploaded on GitHub repositories for you to see</p>
                              </Carousel.Caption>
                              </Carousel.Item>
                              <Carousel.Item id='carIte'>
                              <img
                                   className="app_land_stack_4_data_cont_ico_class"
                                   src={homegit}
                              />
                              <Carousel.Caption  id='carcap'>
                                   <h3>Easy Contact Options</h3>
                                   <p id='capcap'>We never leave you. feel free to contact us anytime you want.</p>
                              </Carousel.Caption>
                              </Carousel.Item>
                              </Carousel>
                         </div>
               </div>
               <div id='app_land_stack_5'>
                         <div id='app_land_stack_5_lft_cont'>
                              <div id='app_land_stack_5_lft_sub_cont'>
                              <div id='app_land_stack_5_lft_cont_tit'>Got any questions for us?</div>
                              <div id='app_land_stack_5_lft_cont_sub_tit'>Contact Us at Support@devz.com
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
               
               <div id='app_land_stack_8'>   
                         <div className='app_land_stack_8_lft'>
                                   <img src={homesupportico} id='app_land_stack_8_lft_ico'></img>
                                   
                         </div>
                         <div className='app_land_stack_8_rgt'>
                              <div>
                              <div id='app_land_stack_8_rgt_tit'>We Never Leave You  </div>
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
               </div>

               <div id='app_land_stack_9'>
                         <div id='app_land_stack_9_tit'>FAQ</div>          
                         <div id='app_land_stack_9_dat'>
                                   <div id='app_land_stack_9_dat_col_1'>
                                             <div>
                                             <div id='app_land_stack_9_dat_ques_cont'>
                                                  <div id='app_land_stack_9_dat_ques_tit'>1. How can we do this?</div>
                                                  <div id='app_land_stack_9_dat_ques_ans'>You can do thisYou can do thisYou can do thisYou can do thisYou can do this
                                                  You can do thisYou can do thisYou can do thisYou can do thisYou can do thisYou can do thisYou can do thisYou can do thisYou can do thisYou can do this</div>
                                             </div>

                                             <div id='app_land_stack_9_dat_ques_cont'>
                                                  <div id='app_land_stack_9_dat_ques_tit'>2. How can we do this?</div>
                                                  <div id='app_land_stack_9_dat_ques_ans'>You can do thisYou can do thisYou can do thisYou can do thisYou can do this
                                                  You can do thisYou can do thisYou can do thisYou can do thisYou can do thisYou can do thisYou can do thisYou can do thisYou can do thisYou can do this</div>
                                             </div>
                                             </div>
                                   </div>

                                   <div id='app_land_stack_9_dat_col_2'>
                                             
                                             <div id='app_land_stack_9_dat_ques_cont'>
                                                  <div id='app_land_stack_9_dat_ques_tit'>3. How can we do this?</div>
                                                  <div id='app_land_stack_9_dat_ques_ans'>You can do thisYou can do thisYou can do thisYou can do thisYou can do this
                                                  You can do thisYou can do thisYou can do thisYou can do thisYou can do thisYou can do thisYou can do thisYou can do thisYou can do thisYou can do this</div>
                                             </div>
                                             <div id='app_land_stack_9_dat_ques_cont'>
                                                  <div id='app_land_stack_9_dat_ques_tit'>4. How can we do this?</div>
                                                  <div id='app_land_stack_9_dat_ques_ans'>You can do thisYou can do thisYou can do thisYou can do thisYou can do this
                                                  You can do thisYou can do thisYou can do thisYou can do thisYou can do thisYou can do thisYou can do thisYou can do thisYou can do thisYou can do this</div>
                                             </div>
                                             
                                   </div>
                         </div>
               </div>

               <div id='app_land_stack_10'>
                    We handcrafted this website with proud and love 
               </div>

               <div id='app_land_stack_6'>
                    <div id='app_land_stack_6_left_cont'>
                              Dashboard
                    </div>
                    <div id='app_land_stack_6_rgt_cont'>
                              <div id='app_land_stack_6_rgt_data'>
                              Coming Soon
                              </div>
                    </div>


               </div>
               <div id='app_land_stack_7'></div>

        </div>);
     }
}