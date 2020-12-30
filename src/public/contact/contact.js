import React, { useRef } from 'react';
import '../css/priApp.css';
import '../css/land_dark.css';
import '../css/contact.css';
import {Accordion,Card,Popover,OverlayTrigger,Carousel, Button,Alert,DropdownButton,Dropdown} from 'react-bootstrap';



export default class ContactClass extends React.Component{

     constructor(props){
        super(props);    
     
     }
     render(){
     return(
          <>
               <div id='app_contact_bdy'>
                    <div id='app_contact_bdy_head'>
                         <div id='app_contact_bdy_head_log'>
                              Cytescale
                         </div>
                    </div>
                    <div id='app_contact_bdy_form_cont'>
                    <div id='app_contact_bdy_form'>
                         <div id='app_contact_bdy_form_tit'>Contact Form</div>
                         <div className='app_contact_form_txt_class_cont'>
                              <div className='app_contact_form_txt_class_tit'>Your name</div>
                         <input  className='app_contact_form_txt_class'></input>
                         </div>
                         <div className='app_contact_form_txt_class_cont'>
                              <div className='app_contact_form_txt_class_tit'>Email Address</div>
                         <input  className='app_contact_form_txt_class'></input>
                         </div>
                         <div className='app_contact_form_txt_class_cont'>
                              <div className='app_contact_form_txt_class_tit'>Phone Number</div>
                         <input  className='app_contact_form_txt_class'></input>
                         </div>
                         
                         <DropdownButton id="dropdown-basic-button" variant='light' title="What you are interested in?">
                         <Dropdown.Item id='dropdown-basic-item' href="#/action-1">Action</Dropdown.Item>
                         <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                         <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                         </DropdownButton>
                         
                         <div className='app_contact_form_txt_class_cont'>
                              <div className='app_contact_form_txt_class_tit'>Your Message</div>
                         <textarea placeholder='Write your message' id='app_contact_form_txt_class_mes'></textarea>
                         </div>

                         <button id='app_cont_sub_butt'>Submit</button>
                         
                    </div>
                    </div>
                    
               </div>
          </>
     )
     }
}