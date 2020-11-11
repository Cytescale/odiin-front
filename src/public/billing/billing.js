import React from 'react';
import {Tab,Tabs,Button,Modal,Alert} from 'react-bootstrap';
import '../css/setting.css';
import '../css/billing.css';    

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
                                    <div className='app_billing_main_cont_tit_data_cont'>
                                        <div className='app_billing_main_cont_tit_data_cont_ordr_tit'>No current order</div>
                                        <div className='app_billing_main_cont_tit_data_cont_price_tit'>$0.0</div>
                                    </div>

                                </div>
                                <div className='app_billing_main_cont'>
                                    <div className='app_billing_main_cont_tit'>
                                        Upfront paid 
                                    </div>
                                    <div className='app_billing_main_cont_tit_data_cont'>
                                        <div className='app_billing_main_cont_tit_data_cont_ordr_tit'>No current order</div>
                                        <div className='app_billing_main_cont_tit_data_cont_price_tit'>$10.0</div>
                                    </div>

                                </div>
                    
                    </div>
          </div>  
        );
    }
}