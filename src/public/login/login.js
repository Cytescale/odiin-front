import React from 'react';
import {Button} from 'react-bootstrap';
import '../css/login.css';
export default class LoginClass extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div id='lb_main_stack'>
                   <div id='login_head_main_body_cont'>
                        <a class='app_logo_link' href='http://localhost'>Cytescale</a>
                    </div>  
                    <div id='login_main_bdy_main_cont'>
                <div id='login_main_body_cont'> 
            <div id='login_frm_cont_tit'>Hey there,  </div>
                {/* <div id='login_gog_butt_cont'>
                    <Button variant="light" id='login_gog_butt_cont_butt'><svg className='login_gog_butt_cont_butt_ico' viewBox='0 0 512 512'><path d='M473.16 221.48l-2.26-9.59H262.46v88.22H387c-12.93 61.4-72.93 93.72-121.94 93.72-35.66 0-73.25-15-98.13-39.11a140.08 140.08 0 01-41.8-98.88c0-37.16 16.7-74.33 41-98.78s61-38.13 97.49-38.13c41.79 0 71.74 22.19 82.94 32.31l62.69-62.36C390.86 72.72 340.34 32 261.6 32c-60.75 0-119 23.27-161.58 65.71C58 139.5 36.25 199.93 36.25 256s20.58 113.48 61.3 155.6c43.51 44.92 105.13 68.4 168.58 68.4 57.73 0 112.45-22.62 151.45-63.66 38.34-40.4 58.17-96.3 58.17-154.9 0-24.67-2.48-39.32-2.59-39.96z'/></svg>Log in with Google</Button>
                    </div> */}
            
            <div class='login_frm_cont'>
                
                  <div class='l_f_c_e' id='l_f_c_u_c'>Email Address</div>
                  <div class='l_f_c_tt'id='l_f_c_u_f'><input type="text" class="form-control" id='login_unm_txt' placeholder=" " aria-label="username" name='username' aria-describedby="basic-addon1"></input></div>
                  <div class='l_f_c_e' id='l_f_c_p_c'>Password</div>
                  <div class='l_f_c_tt'id='l_f_c_p_f'><input type="password" class="form-control" id='login_pass_txt' placeholder=" " aria-label="password" name='password' aria-describedby="basic-addon1"></input></div>
                  <div id='l_f_c_f_l_a'>By continuing, you agree to Cytescale's Terms and Conditions and Privacy Notice.</div>     
                  
                  <Button id='l_f_c_b' >Log in to Cytescale</Button> 
                  <div id='l_f_c_f_c'><a href='#' id='l_f_c_f_l'>Forgot the password?</a></div>     
                        </div> 

                        <div id='login_or_cont_hr'></div>
            <div id='login_or_cont'><div id='login_or_cont_txt'>or</div></div>

            <Button id='login_crt_acc_butt'>Create a Cytescale Account </Button >

                    </div>
                    </div>
                </div>
        );
    }

}
