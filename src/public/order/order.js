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
            changePassModalVisi:false,
            deacAccModalVisi:false
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
                                             <div className='app_setting_main_bdy_tit_main_sub_opt_cont_tit'>Project Category</div>
                                             <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </DropdownButton>
                                        </div>

                                        


                                </div>
                             
                    </div>
          </div>  
        );
    }
}