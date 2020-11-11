import React from 'react';
import {Tab,Tabs,Button,Modal,Alert} from 'react-bootstrap';
import '../css/setting.css';



function ChangePassModal(props){
    return(
        <Modal  {...props} size="300px" aria-labelledby="contained-modal-title-vcenter"  className='pass_chnage_modal_bdy_main_cont'>
          <Modal.Body id='pass_chnage_modal_bdy_cont' >
                    <div id='pass_chnage_modal_bdy_cont_tit_cont'>Change Password</div>
                    <div className='app_setting_main_bdy_tit_main_sub_opt_cont'>
                            <div className='app_setting_main_bdy_tit_main_sub_opt_cont_tit'>Current Password</div>
                            <input type='password' placeholder='Enter current password' className='app_setting_main_bdy_tit_main_sub_opt_cont_data'></input>
                    </div>
                    <div className='app_setting_main_bdy_tit_main_sub_opt_cont'>
                            <div className='app_setting_main_bdy_tit_main_sub_opt_cont_tit'>New Password</div>
                            <input type='password' placeholder='Enter new password' className='app_setting_main_bdy_tit_main_sub_opt_cont_data'></input>
                    </div>
                    <div className='app_setting_main_bdy_tit_main_sub_opt_cont'>
                            <div className='app_setting_main_bdy_tit_main_sub_opt_cont_tit'>Confirm Password</div>
                            <input type='password' placeholder='Enter password again' className='app_setting_main_bdy_tit_main_sub_opt_cont_data'></input>
                    </div>
                    <div className='app_setting_main_bdy_tit_main_forg_lnk_cont'>
                    <a href='#' className='app_setting_main_bdy_tit_main_forg_lnk'>
                        Can't remember password?
                        </a>
                        </div>
                        <Button className='app_setting_main_bdy_tit_main_sub_butt_cont' >Confirm</Button>
          </Modal.Body>
        </Modal>
    );
}


function DecactivateModal(props){
    return(
        <Modal  {...props} size="300px" aria-labelledby="contained-modal-title-vcenter"  className='pass_chnage_modal_bdy_main_cont'>
          <Modal.Body id='pass_chnage_modal_bdy_cont' >
                    <div id='pass_chnage_modal_bdy_cont_tit_cont'>Deactivate Account</div>
                    <div className='app_setting_main_bdy_tit_main_sub_opt_cont'>
                            <div className='app_setting_main_bdy_tit_main_sub_opt_cont_tit'>Current Password</div>
                            <input type='password' placeholder='Enter current password' className='app_setting_main_bdy_tit_main_sub_opt_cont_data'></input>
                    </div>
                    <Alert variant="danger" className='dec_acc_modal_alrt_cont'>
                        Deactivated account cannot be reactivated again!
                    </Alert>
                <Button className='app_setting_main_bdy_tit_main_sub_butt_cont' variant='danger'>Confirm deactivate account</Button>
          </Modal.Body>
        </Modal>
    );
}


export default class SettingModel extends React.Component{ 
    constructor(props){
        super(props);
        this.state = {
            changePassModalVisi:false,
            deacAccModalVisi:false
          }        
          props.onChangeSite(1);
    }

    render(){
        return(
          <div id='app_setting_main_bdy'>
            <ChangePassModal show={this.state.changePassModalVisi} onHide={()=>{this.setState({changePassModalVisi:false})}}></ChangePassModal>
            <DecactivateModal show={this.state.deacAccModalVisi} onHide={()=>{this.setState({deacAccModalVisi:false})}}></DecactivateModal>
                             <div id='app_setting_main_bdy_tit_main_cont'>
                    <div id='app_setting_main_bdy_tit_main_tit'>
                        Settings
                    </div>
                    <div id='app_setting_main_bdy_tit_main_sub_tit'>
                    Change prefrenceses of your account
                    </div>
                    
                </div>
                <Tabs defaultActiveKey="profile" className="app_setting_tab_main_cont">
                    <Tab eventKey="profile" className='app_setting_tab_main_tab_1_main_cont' title="Profile">
                        <div className='app_setting_tab_main_tab_1_cont'>
                            <div className='app_setting_tab_main_tab_1_cont_left'>
                                <div className='app_sett_tab_cont_pro' >
                                <div className='app_setting_tab_main_tab_1_cont_tit'>
                                    Profile Settings
                                </div>

                                <div className='app_setting_tab_main_tab_1_cont_opt_class'>
                                        <div className='app_setting_tab_main_tab_1_cont_opt_tit_clsas'>
                                            Full Name*
                                        </div>
                                        <div className='app_setting_tab_main_tab_1_cont_opt_data_txt_cont'><input className='app_setting_tab_main_tab_1_cont_opt_data_txt' placeholder='Current Name'></input></div>
                                </div>
                                <div className='app_setting_tab_main_tab_1_cont_opt_class'>
                                        <div className='app_setting_tab_main_tab_1_cont_opt_tit_clsas'>
                                            Email Address*
                                        </div>
                                        <div className='app_setting_tab_main_tab_1_cont_opt_data_txt_cont'><input className='app_setting_tab_main_tab_1_cont_opt_data_txt' placeholder='Current Email Adress'></input></div>
                                </div>
                                <div className='app_setting_tab_main_tab_1_cont_opt_class'>
                                        <div className='app_setting_tab_main_tab_1_cont_opt_tit_clsas'>
                                            Mobile Phone number*
                                        </div>
                                        <div className='app_setting_tab_main_tab_1_cont_opt_data_txt_cont'><input className='app_setting_tab_main_tab_1_cont_opt_data_txt' placeholder='Current Phone Number'></input></div>
                                </div>
                                <div className='app_setting_tab_main_tab_1_cont_opt_class'>
                                        <div className='app_setting_tab_main_tab_1_cont_opt_tit_clsas'>
                                            Company Name
                                        </div>
                                        <div className='app_setting_tab_main_tab_1_cont_opt_data_txt_cont'><input className='app_setting_tab_main_tab_1_cont_opt_data_txt' placeholder='Current Name'></input></div>
                                </div>
                                <Button className='app_sett_tab_sub_butt'>Update Profile</Button>
                                </div>
                                <div className='app_sett_tab_cont_pro' >
                                        <div className='app_setting_tab_main_tab_1_cont_tit'>
                                            Notification Settings
                                        </div>
                                        <div className='app_setting_tab_main_tab_1_cont_opt_class'>
                                        <div className='app_setting_tab_main_tab_1_cont_opt_tit_clsas'>
                                            Email Notification
                                        </div>
                                        <div className='app_setting_tab_main_tab_1_cont_opt_data_txt_cont'>
                                            <span id='app_sett_email_chck_inp_txt'>You wont recieve email Notification</span>
                                            <input id='app_sett_email_chck_inp' type="checkbox"></input>
                                            </div>
                                </div>
                                </div>
                                </div>
                                <div className='app_setting_tab_main_tab_1_cont_rght'>
                                    <div className='app_setting_tab_main_tab_1_cont_rght_data_cont'>
                                            <div><svg className='app_setting_tab_main_tab_1_cont_rght_data_ico' viewBox='0 0 512 512'><title>Fast Food</title><path d='M322 416c0 35.35-20.65 64-56 64H134c-35.35 0-56-28.65-56-64M336 336c17.67 0 32 17.91 32 40h0c0 22.09-14.33 40-32 40H64c-17.67 0-32-17.91-32-40h0c0-22.09 14.33-40 32-40' fill='none' stroke='currentColor' stroke-linecap='round' stroke-miterlimit='10' stroke-width='32'/><path d='M344 336H179.31a8 8 0 00-5.65 2.34l-26.83 26.83a4 4 0 01-5.66 0l-26.83-26.83a8 8 0 00-5.65-2.34H56a24 24 0 01-24-24h0a24 24 0 0124-24h288a24 24 0 0124 24h0a24 24 0 01-24 24zM64 276v-.22c0-55 45-83.78 100-83.78h72c55 0 100 29 100 84v-.22M241 112l7.44 63.97' fill='none' stroke='currentColor' stroke-linecap='round' stroke-miterlimit='10' stroke-width='32'/><path d='M256 480h139.31a32 32 0 0031.91-29.61L463 112' fill='none' stroke='currentColor' stroke-linecap='round' stroke-miterlimit='10' stroke-width='32'/><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M368 112l16-64 47-16'/><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-miterlimit='10' stroke-width='32' d='M224 112h256'/></svg></div>
                                           
                                    </div>

                                </div>
                        </div>
                    </Tab>
                    <Tab eventKey="sec" title="Security">
                    <div className='app_setting_tab_main_tab_1_cont'>
                            <div className='app_setting_tab_main_tab_1_cont_left'>
                                <div className='app_sett_tab_cont_pro' >
                                <div className='app_setting_tab_main_tab_1_cont_tit'>
                                    Security Settings
                                </div>

                                <div className='app_setting_tab_main_tab_1_cont_opt_class'>
                                        <div className='app_setting_tab_main_tab_1_cont_opt_tit_clsas'>
                                            Password Change
                                        </div>
                                        <div className='app_setting_tab_main_tab_1_cont_opt_data_txt_cont'><Button className='app_sett_tab_pass_chang_butt' variant="secondary" onClick={() => { this.setState({changePassModalVisi :true}) }}>Change Password</Button></div>
                                </div>
                            
                                
                                </div>
                                <div className='app_sett_tab_cont_pro' >
                                        <div className='app_setting_tab_main_tab_1_cont_tit'>
                                            Account Settings
                                        </div>
                                        <div className='app_setting_tab_main_tab_1_cont_opt_class'>
                                        <div className='app_setting_tab_main_tab_1_cont_opt_tit_clsas'>
                                            Deactivate Account
                                        </div>
                                        <div className='app_setting_tab_main_tab_1_cont_opt_data_txt_cont'><Button className='app_sett_tab_pass_chang_butt'variant="outline-danger"  onClick={() => { this.setState({deacAccModalVisi :true}) }}>Deactivate Account</Button></div>
                                </div>
                                </div>
                                </div>
                                <div className='app_setting_tab_main_tab_1_cont_rght'>
                                    <div className='app_setting_tab_main_tab_1_cont_rght_data_cont'>
                                            <div><svg className='app_setting_tab_main_tab_1_cont_rght_data_ico' viewBox='0 0 512 512'><title>Key</title><path d='M218.1 167.17c0 13 0 25.6 4.1 37.4-43.1 50.6-156.9 184.3-167.5 194.5a20.17 20.17 0 00-6.7 15c0 8.5 5.2 16.7 9.6 21.3 6.6 6.9 34.8 33 40 28 15.4-15 18.5-19 24.8-25.2 9.5-9.3-1-28.3 2.3-36s6.8-9.2 12.5-10.4 15.8 2.9 23.7 3c8.3.1 12.8-3.4 19-9.2 5-4.6 8.6-8.9 8.7-15.6.2-9-12.8-20.9-3.1-30.4s23.7 6.2 34 5 22.8-15.5 24.1-21.6-11.7-21.8-9.7-30.7c.7-3 6.8-10 11.4-11s25 6.9 29.6 5.9c5.6-1.2 12.1-7.1 17.4-10.4 15.5 6.7 29.6 9.4 47.7 9.4 68.5 0 124-53.4 124-119.2S408.5 48 340 48s-121.9 53.37-121.9 119.17zM400 144a32 32 0 11-32-32 32 32 0 0132 32z' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32'/></svg></div>
                                           
                                    </div>

                                </div>
                        </div>
                    </Tab>
                    </Tabs>
                
          </div>  
        );
    }
}