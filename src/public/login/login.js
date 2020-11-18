import React from 'react';
import {Button,Spinner,Alert} from 'react-bootstrap';
import  { Redirect } from 'react-router-dom'
import '../css/login.css';
import axios from 'axios';
import qs from 'qs';
import history from '../home/history';
import config_file from'../../server.config.json'
import Cookies from 'universal-cookie';
const cookies = new Cookies();
export default class LoginClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            uname: null,
            pass: null,
            errCode:false,
            isLoading:false,
            isSucess:false
          }
          
          this.AxiosgetLogin = this.AxiosgetLogin.bind(this);
    }
    onUnameChange(event) {
        this.setState({uname: event.target.value})
    }
    onPassChange(event) {
        this.setState({pass: event.target.value})
    }
       AxiosgetLogin(user) {
         axios(config_file.production.api_server+"/loginattempt", {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache', 
            credentials: 'include', 
            headers: {
               'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            data: qs.stringify(user)// body data type must match "Content-Type" header
          }).then(res=>{
            console.log("LOGIN RESPONSE"+JSON.stringify(res.data));   
            this.setState({errCode:res.data.errcode,isLoading:false});
            if(res.data.errcode===false){
              this.setState({isSucess:true});  
                if(res.data.user!==null){
                    cookies.set("user_token",res.data.user, { path: "/" });
                    history.push("/dash");
                    history.go(0);
                    this.props.setLog(true,res.data.user);
                }
            }else{
                this.setState({isSucess:false});  
            }
          }).catch(err=>{console.log(err)});
      }

    loginSubmit(e){
        e.preventDefault();
        this.setState({errCode:false,isLoading:true})
        const ddata = new FormData(e.target); 
        console.log("EVENT DATA"+JSON.stringify(ddata));
        const user={
            uname:this.state.uname,
            pass:this.state.pass
        }
        console.log("DATA SUBMIT"+JSON.stringify(this.state));
        this.AxiosgetLogin(user);
    }

    render(){
        // if(this.state.isSucess===true){
        //     return(<Redirect
        //         to={{
        //           pathname: "/dash",
        //         }}
        //       />);
        // }
        return (
            <div id='lb_main_stack'>
                   <div id='login_head_main_body_cont'>
                        <a className='app_logo_link' href='http://localhost'>Cytescale</a>
                    </div>  
                    <div id='login_main_bdy_main_cont'>
                <div id='login_main_body_cont'> 
            <div id='login_frm_cont_tit'>Welcome,  </div>
                {/* <div id='login_gog_butt_cont'>
                    <Button variant="light" id='login_gog_butt_cont_butt'><svg className='login_gog_butt_cont_butt_ico' viewBox='0 0 512 512'><path d='M473.16 221.48l-2.26-9.59H262.46v88.22H387c-12.93 61.4-72.93 93.72-121.94 93.72-35.66 0-73.25-15-98.13-39.11a140.08 140.08 0 01-41.8-98.88c0-37.16 16.7-74.33 41-98.78s61-38.13 97.49-38.13c41.79 0 71.74 22.19 82.94 32.31l62.69-62.36C390.86 72.72 340.34 32 261.6 32c-60.75 0-119 23.27-161.58 65.71C58 139.5 36.25 199.93 36.25 256s20.58 113.48 61.3 155.6c43.51 44.92 105.13 68.4 168.58 68.4 57.73 0 112.45-22.62 151.45-63.66 38.34-40.4 58.17-96.3 58.17-154.9 0-24.67-2.48-39.32-2.59-39.96z'/></svg>Log in with Google</Button>
                    </div> 
                    
                    */}
            
            <div className='login_frm_cont'>
                    <form onSubmit={this.loginSubmit.bind(this)}>
                      <div className='l_f_c_e' id='l_f_c_u_c'>Username</div>
                  <div className='l_f_c_tt'id='l_f_c_u_f'><input type="text" disabled={this.state.isLoading} name='uname' onChange={this.onUnameChange.bind(this)} autoComplete='true' className="form-control" id='login_unm_txt' placeholder=" " aria-label="username"  aria-describedby="basic-addon1"></input></div>
                  <div className='l_f_c_e' id='l_f_c_p_c'>Password</div>
                  <div className='l_f_c_tt'id='l_f_c_p_f'><input type="password" disabled={this.state.isLoading}  name='pass'onChange={this.onPassChange.bind(this)}  autoComplete='true' className="form-control" id='login_pass_txt' placeholder=" " aria-label="password"  aria-describedby="basic-addon1"></input></div>
                  <div id='l_f_c_f_l_a'>By continuing, you agree to Cytescale's Terms and Conditions and Privacy Notice.</div>     
                <Button id='l_f_c_b' type='submit' disabled={this.state.isLoading}>{!this.state.isLoading?<span>Log in to Cytescale</span>:<Spinner animation="grow" variant="primary" />}</Button> 
                    {
                        this.state.errCode===true?<div id='app_login_alrt_cont'>
                        <Alert variant="danger">
                            Invalid username or password :(
                        </Alert>
                    </div>:this.state.isSucess===true?<div id='app_login_alrt_cont'>
                        <Alert variant="success">
                            Login Successfull
                        </Alert>
                    </div>:<span></span>   
                    }
                    
                  <div id='l_f_c_f_c'><a href='#' id='l_f_c_f_l'>Forgot the password?</a></div>     
                  </form>
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
