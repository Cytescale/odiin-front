import React from 'react';
import {Tab,Tabs,Button,Modal,Alert,Accordion,Card} from 'react-bootstrap';
import '../css/setting.css';
import '../css/billing.css';    

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


export default class BillingModel extends React.Component{ 
    constructor(props){
        super(props);
        this.state = {
            changePassModalVisi:false,
            deacAccModalVisi:false
          }        
          props.onChangeSite(2);

    }

    render(){
        return(
          <div id='app_setting_main_bdy'>   
                    <div id='app_billing_main_bdy_tit_main_cont'>
                            <div id='app_setting_main_bdy_tit_main_tit'>
                                Billing
                            </div>
                                <div id='app_setting_main_bdy_tit_main_sub_tit'>
                                    Update your payment methods
                                </div>

                                <div className='app_billing_main_cont'>
                                    <div className='app_billing_main_cont_tit'>
                                        Remaning payment 
                                    </div>
                                    <div className='app_billing_main_cont_sub_tit'>
                                        The amount to be paid for your order
                                    </div>
                                    <div className='app_billing_main_cont_tit_data_cont'>
                                        <div className='app_billing_main_cont_tit_data_cont_ordr_tit'>No current order</div>
                                        <div className='app_billing_main_cont_tit_data_cont_price_tit'>$0.0</div>
                                    </div>

                                </div>
                                <div className='app_billing_main_cont'>
                                    <div className='app_billing_main_cont_tit'>
                                        Upfront paid 
                                    </div>
                                    <div className='app_billing_main_cont_sub_tit'>
                                        The amount you have paid upfront for your order
                                    </div>
                                    <div className='app_billing_main_cont_tit_data_cont'>
                                        <div className='app_billing_main_cont_tit_data_cont_ordr_tit'>No current order</div>
                                        <div className='app_billing_main_cont_tit_data_cont_price_tit'>$10.0</div>
                                    </div>

                                </div>
                                <div className='app_billing_main_cont'>
                                    <div className='app_billing_main_cont_tit'>
                                        Raise a concern
                                    </div>
                                    <div className='app_billing_main_cont_sub_tit'>
                                        Raise any convern regarding your payments
                                    </div>
                                    <div className='app_billing_main_cont_tit_data_cont'>
                                        <div className='app_billing_main_cont_tit_data_cont_cenrn_butt'>
                                            <RaiseConcernModel/>
                                            </div>
                                    </div>

                                </div>
                                <div className='app_billing_main_cont'>
                                    <div className='app_billing_main_cont_tit'>
                                        Payment History
                                    </div>
                                    <div className='app_billing_main_cont_sub_tit'>
                                        Payment history about all the orders
                                    </div>
                                </div>
                    </div>
          </div>  
        );
    }
}