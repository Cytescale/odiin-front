import React from 'react';
import {Tab,Tabs,Button,Modal,Alert,Accordion,Card,DropdownButton,Dropdown} from 'react-bootstrap';
import '../css/setting.css';
import '../css/billing.css';    
import '../css/order.css';

  function RaiseConcernModel() {
    return (
      <Accordion defaultActiveKey="0">
          <Accordion.Toggle eventKey="1" className='app_billing_tog_cont'><Button className='app_billing_main_cont_tit_data_cont_cenrn' variant="danger">Raise a concern</Button></Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <div id='app_billing_tog_data_cont'>
            <div className='app_setting_main_bdy_tit_main_sub_opt_cont'>
                            <div className='app_billing_main_bdy_tit_main_sub_opt_cont_tit'>Write your concern</div>
                            <textarea className='app_billing_main_bdy_textbox'> </textarea>
                            <Button className='app_billing_main_bdy_butt_sub'>Submit</Button>
                    </div>

            </div>
          </Accordion.Collapse>
      </Accordion>
    );
  }


export default class OderModel extends React.Component{ 
    constructor(props){
        super(props);
        this.state = {
            layNum:0
          }        
          props.onChangeSite(3);

    }

    render(){
        return(
          <div id='app_setting_main_bdy'>   
                    <div id='app_billing_main_bdy_tit_main_cont'>
                            <div id='app_setting_main_bdy_tit_main_tit'>
                                New order
                            </div>
                                <div id='app_setting_main_bdy_tit_main_sub_tit'>
                                    Make a new order
                                </div>
                                <Alert  className='app_order_new_alrt_cont' variant="danger">
                                        Currently you can order only android application layouts
                                   </Alert>
                                <div className='app_billing_main_cont'>
                                    <div className='app_billing_main_cont_tit'>
                                        Order Details
                                    </div>
                                    <div className='app_billing_main_cont_sub_tit'>
                                        provide your order details
                                    </div>

                                        <div className='app_setting_main_bdy_tit_main_sub_opt_cont'>
                                             <div className='app_setting_main_bdy_tit_main_sub_opt_cont_tit'>Project name</div>
                                             <input type='text' placeholder='Enter project name' className='app_setting_main_bdy_tit_main_sub_opt_cont_data'></input>
                                        </div>


                                        <div className='app_setting_main_bdy_tit_main_sub_opt_cont'>
                                             <div className='app_setting_main_bdy_tit_main_sub_opt_cont_tit'>Category</div>
                                             <DropdownButton id="dropdown-basic-button" variant="light" title="Select Category">
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </DropdownButton>
                                        </div>

                                        <div className='app_setting_main_bdy_tit_main_sub_opt_cont'>
                                             <div className='app_setting_main_bdy_tit_main_sub_opt_cont_tit'>Structure</div>
                                             <DropdownButton id="dropdown-basic-button" title="Select Structure">
                                        <Dropdown.Item href="#/action-1">Java/xml environment</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">React native environment</Dropdown.Item>
                                        
                                        </DropdownButton>
                                        </div>
                                        <div className='app_setting_main_bdy_tit_main_sub_opt_cont'>
                                             <div className='app_setting_main_bdy_tit_main_sub_opt_cont_tit'>Number of layouts (Activities)</div>
                                             <div className='app_order_num_lay_data_cont'>
                                                  <div className='app_order_num_lay_data'>0</div>
                                                  <div className='app_order_num_lay_data_butt'><Button id='app_order_num_lay_data_butt_min'>-</Button><Button id='app_order_num_lay_data_butt_pl'>+</Button></div>
                                             </div>
                                        </div>
                                        <div className='app_setting_main_bdy_tit_main_sub_opt_cont'>
                                             <div className='app_setting_main_bdy_tit_main_sub_opt_cont_tit'>Notes for developers</div>
                                             <div className='app_order_num_lay_data_cont'>
                                                  <textarea className='app_order_dec_note_text_ar'> </textarea>
                                             </div>
                                        </div>
                                        <div className='app_setting_main_bdy_tit_main_sub_opt_cont'>
                                             <div className='app_setting_main_bdy_tit_main_sub_opt_cont_tit'>Design Files</div>
                                             <div className='app_order_num_lay_data_cont'>
                                             <div className='app_order_des_lay_data'>Add any type of design files</div>
                                                  <div className='app_order_num_lay_data_butt'><Button type='' id='app_order_num_des_data_butt_min'>add files</Button></div>
                                             </div>
                                        </div>

                                        <div className='app_setting_main_bdy_tit_main_sub_opt_cont'>
                                             <div className='app_setting_main_bdy_tit_main_sub_opt_cont_tit'>Github repository link</div>
                                             <input type='text' placeholder='Enter github repository link' className='app_setting_main_bdy_tit_main_sub_opt_cont_data'></input>
                                        </div>
                                        <div className='app_setting_main_bdy_tit_main_sub_opt_cont'>
                                             <div className='app_setting_main_bdy_tit_main_sub_opt_cont_tit'>Alternate contact email address</div>
                                             <input type='text' placeholder='Enter alernate email address' className='app_setting_main_bdy_tit_main_sub_opt_cont_data'></input>
                                        </div>

                                </div>
                                <div className='app_billing_main_cont'>
                                    <div className='app_billing_main_cont_tit'>
                                        Checkout details
                                    </div>
                                    <div className='app_billing_main_cont_sub_tit'>
                                        All the checkout details based on your project description
                                    </div>
                                    <Alert  className='app_order_new_alrt_cont' variant="info">
                                        After checkout , only 50% amount of upfront payment will be repaid in case of cancelation
                                   </Alert>

                                   <div className='app_order_chk_tit_main_cont'>
                                        <div className='app_order_chk_tit_main_det_cont'>Details</div>
                                        <div className='app_order_chk_tit_main_char_cont'>Charges</div>
                                   </div>
                                   <div id='app_order_det_data'>data</div>
                                   <div className='app_order_sub_cont'>
                                   <div className='app_order_sub_main_cont'>
                                        <div className='app_order_sub_main_cont_tit_cont'>Sub Total</div>
                                        <div className='app_order_sub_main_cont_cost_cont'>$0.00</div>
                                   </div>
                                   <div className='app_order_sub_main_cont'>
                                        <div className='app_order_sub_main_cont_tit_cont'>Estimate Total</div>
                                        <div className='app_order_sub_main_cont_cost_cont'>$0.00</div>
                                   </div>
                                   </div>

                                   <div className='app_order_up_main_cont'>
                                        <div className='app_order_up_main_cont_tit'>Current upfront amount</div>
                                        <div className='app_order_up_main_cont_cost'>$0.00</div>
                                   </div>

                                </div>

                                <Button variant='success' id='a_o_c_b'>Checkout</Button>
                    </div>
                    
          </div>  
        );
    }
}