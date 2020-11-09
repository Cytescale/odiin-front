import React from 'react';
import '../css/login.css';
import land1 from '../../assets/land_1.jpg';
import land2 from '../../assets/land_2.jpg';
import land3 from '../../assets/land_3.jpg';
import logo_face from '../../assets/logo_facebook.svg';
import logo_gogo from '../../assets/logo_google.svg';
import logo_inst from '../../assets/logo_inst.svg';
import pro_pic_1 from '../../assets/pro_pic_1.jpeg';
import show_1 from '../../assets/show_1.png';
import show_2 from '../../assets/show_2.png';
import show_3 from '../../assets/show_3.png';
import show_4 from '../../assets/show_4.png';
import show_5 from '../../assets/show_5.png';
import show_6 from '../../assets/show_6.png';

export default class LoginClass extends React.Component{
    constructor(props){
        super(props);
    }


    drawPostLand(img,name){
        return(
                <div class='post_bdy_class'>
                <div class='post_bdy_class_tit_cont'>
                <img class='post_bdy_class_tit_cont_img' src={pro_pic_1}></img>
                <div id='post_bdy_class_tit_cont_nam'>{name}</div>
                </div>
                <div class='post_bdy_class_bdy_cont' style={{backgroundImage: `url(${img})`}}>
                
             </div>
            </div>        
        );
    }

    render(){
        return (
            <div id='lb_main_stack'>
                <div id='lb_first_stack'>
                    <div id="lb_first_stack_left_cont" style={{backgroundImage: `url(${land3})`}} >
                        <div id="lb_first_stack_left_cont_bf">
                            <div>
                                <div  id="lb_first_stack_left_cont_logo">
                                Wonder
                                </div>
                                <div id='lb_first_stack_left_cont_logo_sub'>Find art of your interest</div>
                            </div>

                            
                            </div>
                    </div>
                    <div id="lb_first_stack_right_cont">
                                <div id="lb_first_stack_right_cont_top">
                                        <div id="lb_first_stack_right_cont_top_lnk_cont">
                                                <div className="lb_first_stack_right_cont_top_lnk_class">
                                                    <a  href="#" className="lb_first_stack_right_cont_top_lnk_class_tar_class">Home</a>
                                                </div>
                                                <div className="lb_first_stack_right_cont_top_lnk_class">
                                                    <a  href="#" className="lb_first_stack_right_cont_top_lnk_class_tar_class">About Us</a>
                                                </div>
                                                <div className="lb_first_stack_right_cont_top_lnk_class">
                                                    <a  href="#" id='lb_first_stack_right_cont_top_lnk_class_prc_lnk' className="lb_first_stack_right_cont_top_lnk_class_tar_class">Prices</a>
                                                </div>
                                                <div id="lb_first_stack_right_cont_top_lnk_sgn_cont" className="lb_first_stack_right_cont_top_lnk_class">
                                                    <a  href="#" id="lb_first_stack_right_cont_top_lnk_class_tar_sgn_lnk" className="lb_first_stack_right_cont_top_lnk_class_tar_class">Sign Up</a>
                                                </div>
                                        </div>
                                </div>
                                <div id="lb_first_stack_right_cont_cent">
                                    <div id="lb_first_stack_right_cont_cent_tit_cont">
                                                Sign In to Wonder
                                    </div>
                                    <div className='lb_first_stack_right_cont_cent_login_data'>
                                        <input className='lb_first_stack_right_cont_cent_login_data_fld' placeholder='Email or Phone number'></input>
                                    </div>
                                    <div className='lb_first_stack_right_cont_cent_login_data'>
                                        <input type='Password' className='lb_first_stack_right_cont_cent_login_data_fld' placeholder='Password'></input>
                                    </div>
                                    <div className='lb_first_stack_right_cont_cent_login_data'>
                                        <a href='#' id="lb_first_stack_right_cont_cent_for_lnk">Forgot Password?</a>
                                    </div>
                                    <div className='lb_first_stack_right_cont_cent_login_data'>
                                        <input type='submit' value='Login' id='lb_first_stack_right_cont_cent_login_data_login_butt'></input>
                                    </div>
                                </div>
                                <div id="lb_first_stack_right_cont_bottom">
                                    <div id='lb_first_stack_right_cont_bottom_sgn_lnk_cont'>
                                        <a href='#' id='lb_first_stack_right_cont_bottom_sgn_lnk'>Dont have an account yet? Create account now</a>
                                    </div>
                                </div>
                    </div>
                </div>
                <div id='lb_sec_stack'>
                    <div id='lb_sec_stack_tit_cont'>
                                <div id='lb_sec_stack_tit'>
                                    <div id='lb_sec_stack_tit_l'>This is what we provide</div>
                                </div>
                    </div>
                    
                    <div id='lb_sec_stack_body'>
                            <div id='lb_sec_stack_left_body'>
                                  <div class='lb_sec_stack_left_body_opt_cont'>
                                        <button id='lb_sec_stack_left_body_opt_cont_butt_all' class='lb_sec_stack_left_body_opt_cont_butt_class'>All</button>
                                        <button class='lb_sec_stack_left_body_opt_cont_butt_class'>Sketch</button>
                                        <button class='lb_sec_stack_left_body_opt_cont_butt_class'>Architecture</button>
                                        <button class='lb_sec_stack_left_body_opt_cont_butt_class'>Web design</button>
                                        <button class='lb_sec_stack_left_body_opt_cont_butt_class'>App design</button>
                                  </div>
                            </div>
                            <div id='lb_sec_stack_right_body'>
            
                                <div id='lb_sec_stack_right_body_thr_lay'>
                                    
                                    <div id='post_bdy_class_1'>
                                        {this.drawPostLand(show_1,"Alex Being")}
                                        {this.drawPostLand(show_2,"David Hoff")}
                                    </div>       
                                    
                                    <div id='post_bdy_class_2'>
                                      
                                         {this.drawPostLand(show_4,"Steve Ball")}
                                         {this.drawPostLand(show_3,"Mark Rubber")}
                                    </div>
                                    
                                    <div id='post_bdy_class_3'>
                                          {this.drawPostLand(show_5,"Black Ottor")}
                                          {this.drawPostLand(show_6,"Dave Finch")}
                                    </div>

                                </div>
                            </div>
                            
                    </div>                
                </div>
              
                <div id='lb_banner_stack'>
                            <div id='lb_banner_stack_tit'>
                                Find the art of your need and interest &#128161;
                            </div>
                </div>

                <div id='lb_foot_stack'>
                <div id="lb_foot_stack_1_col">
                                <div id='lb_foot_stack_1_col_stack_1'>
                                        Wonder
                                </div>
                                <div id='lb_foot_stack_1_col_stack_2'>
                                    Get inspired by other artist<br></br>
                                    Hire other people
                                </div>
                                <div id='lb_foot_stack_1_col_stack_3'>
                                    Copyright &#169; 2020
                                </div>
                        </div>
                        <div id="lb_foot_stack_2_col">
                                    <div class='lb_foot_stack_lnk_cont_class'><a href='#' class='lb_foot_stack_lnk_class'>Home</a></div>
                                    <div class='lb_foot_stack_lnk_cont_class'><a href='#' class='lb_foot_stack_lnk_class'>Contact</a></div>
                                    <div class='lb_foot_stack_lnk_cont_class'><a href='#' class='lb_foot_stack_lnk_class'>Privacy</a></div>
                        </div>
                        <div id="lb_foot_stack_3_col">
                        <div class='lb_foot_stack_lnk_cont_class'><a href='#' class='lb_foot_stack_lnk_class'>Terms</a></div>
                        <div class='lb_foot_stack_lnk_cont_class'><a href='#' class='lb_foot_stack_lnk_class'>About</a></div>
                        <div class='lb_foot_stack_lnk_cont_class'><a href='#' class='lb_foot_stack_lnk_class'>Realses</a></div>
                        </div>
                        <div id="lb_foot_stack_4_col">
                        <div class='lb_foot_stack_lnk_cont_class'><a href='#' class='lb_foot_stack_lnk_class'>Refund Policy</a></div>
                        <div class='lb_foot_stack_lnk_cont_class'><a href='#' class='lb_foot_stack_lnk_class'>Help</a></div>
                        </div>
                        <div id='lb_foot_stack_fin_col'>
                                    <div id='lb_foot_stack_fin_col_tit'>Follow us on</div><br></br>  
                                    <div  id='lb_foot_stack_fin_col_fol_cont'>
                                        <a  href='#' class='lb_foot_stack_fin_col_fol_lnk_class'><img class='lb_foot_stack_fin_col_fol_lnk_class_img' src={logo_face}></img></a>
                                        <a  href='#' class='lb_foot_stack_fin_col_fol_lnk_class'><img class='lb_foot_stack_fin_col_fol_lnk_class_img' src={logo_gogo}></img></a>
                                        <a  href='#' class='lb_foot_stack_fin_col_fol_lnk_class'><img class='lb_foot_stack_fin_col_fol_lnk_class_img' src={logo_inst}></img></a>
                                    </div>
                        </div>
                </div>
            </div>
        );
    }

}
