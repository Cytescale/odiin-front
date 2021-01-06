import React, { useRef } from 'react';
import '../css/priApp.css';
import '../css/land_dark.css';
import '../css/contact.css';
import {Accordion,Card,Popover,OverlayTrigger,Carousel, Button,Alert,DropdownButton,Dropdown} from 'react-bootstrap';
import * as emailjs from 'emailjs-com'

export default class ContactClass extends React.Component{

     constructor(props){
        super(props);    
        this.state = {
          feedname:'',
          feedemail:'',
          feedphone:'',
          feedcompany:'',
          feedquery:'',
          feederrcode:0,
          textIndex: 0,
          feederr:'Empty Error',
          feedsucc:'Received, we will get back to you soon.'
        }
        this.querySubmit = this.querySubmit.bind(this);
     }
     
     querySubmit(e){
          e.preventDefault();
          if(this.state.feedname===''||this.state.feedname===null){
               this.setState({feederrcode:1,feederr:'Enter name'})
               console.log("Detail EMPT");
               return;
          }
          if(this.state.feedemail===''||this.state.feedemail===null){
               this.setState({feederrcode:1,feederr:'Enter email address'})
               console.log("Detail EMPT");
               return;
          }
          if(this.state.feedquery===''||this.state.feedquery===null){
               this.setState({feederrcode:1,feederr:'Enter your query'})
               console.log("Detail EMPT");
               return;
          }
          console.log(this.state.feedcompany+" "+this.state.feedname+" "+this.state.feedemail);
          let templateParams = {
               name:this.state.feedname,
               from_name: this.state.feedemail,
               to_name: 'contact@cytescale.com',
               subject: "Cytescale Query",
               company: this.state.feedcompany,
               message: "PHONE NUMBER="+this.state.feedphone+" MESSAGE="+this.state.feedquery,
              }
              emailjs.send(
               'odin_email',
               'template_tisfxse',
                templateParams,
               'user_pG1FPpxntH0JfibLEaJWt'
              );
          this.setState({feederrcode:2});
           this.resetForm()
        }
        
        resetForm() {
          this.setState({
               feedname: '',
            feedemail: '',
            feedcompany: '',
            feedquery: '',
            feedphone:'',
          })
        }
   handleQueryChange = (param, e) => {
     this.setState({ [param]: e.target.value })
   }

     render(){
     return(
          <>
               <div id='app_contact_bdy'>
                    <div id='app_contact_bdy_head'>
                         <div id='app_contact_bdy_head_log'>
                              <a id='app_contact_bdy_head_log_link' href='https://www.cytescale.com'>Cytescale</a>
                         </div>
                    </div>
                    <div id='app_contact_bdy_form_cont'>
                    <div id='app_contact_bdy_form'>
                         <div id='app_contact_bdy_form_tit'>Contact Form</div>
                         <form id='app_contact_bdy_form_bas_cont' onSubmit={this.querySubmit}> 
                         <div className='app_contact_form_txt_class_cont'>
                              <div className='app_contact_form_txt_class_tit'>Your name*</div>
                         <input type="text"    value={this.state.feedname}  onChange={this.handleQueryChange.bind(this, 'feedname')}  className='app_contact_form_txt_class'></input>
                         </div>
                         <div className='app_contact_form_txt_class_cont'>
                              <div className='app_contact_form_txt_class_tit'>Email Address*</div>
                         <input  type="email"  value={this.state.feedemail} onChange={this.handleQueryChange.bind(this, 'feedemail')} className='app_contact_form_txt_class'></input>
                         </div>
                         <div className='app_contact_form_txt_class_cont'>
                              <div className='app_contact_form_txt_class_tit'>Phone Number</div>
                         <input  type="number"  value={this.state.feedphone} onChange={this.handleQueryChange.bind(this, 'feedphone')}  className='app_contact_form_txt_class'></input>
                         </div>
                         
                         {/* <DropdownButton id="dropdown-basic-button" variant='light' title="What you are interested in?">
                         <Dropdown.Item id='dropdown-basic-item' href="#">Action</Dropdown.Item>
                         <Dropdown.Item href="#">Another action</Dropdown.Item>
                         <Dropdown.Item href="#">Something else</Dropdown.Item>
                         </DropdownButton>
                          */}
                         <div className='app_contact_form_txt_class_cont'>
                              <div className='app_contact_form_txt_class_tit'>Your Message*</div>
                         <textarea placeholder='Write your message'  value={this.state.feedquery} onChange={this.handleQueryChange.bind(this, 'feedquery')} id='app_contact_form_txt_class_mes'></textarea>
                         </div>
                                            <div id='cont_sub_cont'>
                                              {
                                           this.state.feederrcode===1?                                
                                           <Alert variant='danger' id='cont_sub_cont_err'>
                                           {this.state.feederr}
                                           </Alert>:<span></span>
                                           }
                                              {
                                           this.state.feederrcode===2?                                
                                           <Alert variant='success'  id='cont_sub_cont_err'>
                                           {this.state.feedsucc}
                                           </Alert>:<span></span>
                                           }
                                             <button type="submit" id='app_cont_sub_butt'>Submit</button>
                                             </div>
                         </form>
                    </div>
                    </div>
                    
               </div>
          </>
     )
     }
}