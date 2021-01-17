import React, { useState,useEffect  } from 'react';
import {Dropdown,Button} from 'react-bootstrap';
import '../css/priApp.css';
import '../css/dash.css';
import { XTerm } from 'xterm-for-react'
import { render } from '@testing-library/react';


function Terminal(){
     const xtermRef = React.useRef(null);
     useEffect(() => {
         xtermRef.current.terminal.writeln("Obito Terminal")
     }, [])
     return (
         <XTerm className='app_term_cont' options={{rows:40}} ref={xtermRef} />
     )
 }

function Dock(){
     const SortTogg = React.forwardRef(({ children, onClick }, ref) => (
          <button
               id='dash_sort_butt'
            ref={ref}
            onClick={(e) => {
              e.preventDefault();
              onClick(e);
            }}
          >
               Sort
               &#x25bc;
          </button>
        ));

     const HeadSortMenu = React.forwardRef(
          ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
            const [value, setValue] = useState('');
            return (
              <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
              >
                <ul className="list-unstyled">
                  {React.Children.toArray(children).filter(
                    (child) =>
                      !value || child.props.children.toLowerCase().startsWith(value),
                  )}
                </ul>
              </div>
            );
          },
        );
     
     return(<>
          <div className='dash_dock_main_cont'>
               <div className='dash_dock_cont'>
                              <div className='dash_dock_cont_butt' >
                              <button className='dash_dock_butt_class'><svg  className='dash_dock_butt_class_ico' viewBox='0 0 512 512'><path d='M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/><path d='M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/><path d='M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/><path d='M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154' fill='none' stroke='currentColor' stroke-linecap='round' stroke-miterlimit='10' stroke-width='32'/></svg>
                               Create Team</button>
                              <button className='dash_dock_butt_class'><svg className='dash_dock_butt_class_ico' viewBox='0 0 512 512'><path d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M256 176v160M336 256H176'/></svg>
                               Upload Designs</button>
                               <button className='dash_dock_butt_class'><svg className='dash_dock_butt_class_ico' viewBox='0 0 512 512'><title>Sync</title><path d='M434.67 285.59v-29.8c0-98.73-80.24-178.79-179.2-178.79a179 179 0 00-140.14 67.36m-38.53 82v29.8C76.8 355 157 435 256 435a180.45 180.45 0 00140-66.92' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M32 256l44-44 46 44M480 256l-44 44-46-44'/></svg>
                               Sync</button>
                               <button className='dash_dock_butt_class'><svg className='dash_dock_butt_class_ico' viewBox='0 0 512 512'><title>Folder</title><path d='M440 432H72a40 40 0 01-40-40V120a40 40 0 0140-40h75.89a40 40 0 0122.19 6.72l27.84 18.56a40 40 0 0022.19 6.72H440a40 40 0 0140 40v240a40 40 0 01-40 40zM32 192h448' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/></svg>
                               Create Folder</button>


                               </div>
                               <div className='dash_dock_cont_fill'></div>
                               <div className='dash_dock_cont_sort_butt' >
                               <Dropdown>
                                             <Dropdown.Toggle as={SortTogg} id="dropdown-custom-components"/>
                                             <Dropdown.Menu as={HeadSortMenu} className='dash_header_acc_menu_cont'>
                                                  <Dropdown.Item eventKey="1">Alpha</Dropdown.Item>
                                                  <Dropdown.Item eventKey="2">Date</Dropdown.Item>
                                                  <Dropdown.Item eventKey="1">Modified</Dropdown.Item>
                                             </Dropdown.Menu>
                                             </Dropdown>
                               </div>

               </div>
          </div>
     </>);
}

function Dashboard(){
     return(<>
          
               <Dock></Dock>
               <div className='dash_bdy_cont'>
                         <div className='dash_bdy_cont_moto_cont'>
                         <div className='dash_bdy_cont_moto'>
                              Drag and Drop your beautiful Designs
                         </div>
                         <div className='dash_bdy_cont_sub_moto'>
                              or press upload and choose yours files
                         </div>
                                   <div id='dash_bdy_cont_add_main_cont'>
                                        <div id='dash_bdy_cont_add_cont'>
                                             <div id='app_land_stack_1_lay_2_dat_con_cont_bg'>Designs</div>
                                             <Button id='dash_bdy_cont_add_butt' variant='primary'>Upload</Button>
                                        </div>
                                   </div>
                         </div>
               </div>
               

          </>);
}

function Profile(){
     return(<>
     <div className='profile_main_bdy_cont'>
               <div className='profile_main_tit_cont'>
                    Account
               </div>
               <div className='profile_main_pro_cont'>
                    <div className='profile_main_data_cont'>
                    <div className='profile_main_pro_dp'>Placeholder</div>
                         <div className='profile_main_data_class_cont'>
                         <div className='profile_main_data_class'>
                              <div className='profile_main_data_class_tit'>Name</div>
                              <div className='profile_main_data_class_dat'>Placeholder Bane <a href='#' className='profile_main_data_class_dat_edt'> Edit</a></div>
                         </div>
                         <div className='profile_main_data_class'>
                              <div className='profile_main_data_class_tit'>Email Address</div>
                              <div className='profile_main_data_class_dat'>Placeholderbane@gmail.com <a href='#' className='profile_main_data_class_dat_edt'> Edit</a></div>
                         </div>
                         </div>
                    </div>

                         <div className='profile_main_data_sett_cont'>
                         <div className='profile_main_data_class'>
                              <div className='profile_main_data_class_tit'>Password</div>
                              <div className='profile_main_data_class_dat'>*************</div>
                              <a href='#' className='profile_main_data_class_dat'> Change</a>
                         </div>
                         </div>

               </div>
     </div>
     </>)
}


export default class Dash extends React.Component{

     constructor(props){
          super(props);
          this.state={
               termVisi:'none'
          }
          this.termToggle = this.termToggle.bind(this);
     }

     termToggle(){
          this.setState({termVisi:this.state.termVisi==='block'?'none':'block',})
     }
     
     AccTogg = React.forwardRef(({ children, onClick }, ref) => (
          <button
               id='dash_header_acc_butt'
            ref={ref}
            onClick={(e) => {
              e.preventDefault();
              onClick(e);
            }}
          >
            <svg className='dash_header_butt_acc_ico' viewBox='0 0 512 512'><path fill='currentcolor' stroke='currentcolor' d='M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6zM432 480H80a31 31 0 01-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75 1.94 10.73-.68 21.34-7.18 29.11A31 31 0 01432 480z'/></svg>
          </button>
        ));
     HeadAccMenu = React.forwardRef(
          ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
            const [value, setValue] = useState('');
            return (
              <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
              >
                <ul className="list-unstyled">
                  {React.Children.toArray(children).filter(
                    (child) =>
                      !value || child.props.children.toLowerCase().startsWith(value),
                  )}
                </ul>
              </div>
            );
          },
        );
     
     NotiTogg = React.forwardRef(({ children, onClick }, ref) => (
          <button
               id='dash_header_acc_butt'
            ref={ref}
            onClick={(e) => {
              e.preventDefault();
              onClick(e);
            }}
          >
            <svg className='dash_header_butt_acc_ico' viewBox='0 0 512 512'><path fill='currentcolor' stroke='currentcolor' d='M440.08 341.31c-1.66-2-3.29-4-4.89-5.93-22-26.61-35.31-42.67-35.31-118 0-39-9.33-71-27.72-95-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 01-.82-.67C306.6 51.49 282.82 32 256 32s-50.59 19.49-59.28 48.56a3.13 3.13 0 01-.81.65c-56.38 23.21-83.78 67.74-83.78 136.14 0 75.36-13.29 91.42-35.31 118-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 00-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07H410.5c14.94 0 28-8.06 34.19-21a35.17 35.17 0 00-4.61-37.66zM256 480a80.06 80.06 0 0070.44-42.13 4 4 0 00-3.54-5.87H189.12a4 4 0 00-3.55 5.87A80.06 80.06 0 00256 480z'/></svg>
          </button>
        ));
     
     HeadNotiMenu = React.forwardRef(
          ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
            const [value, setValue] = useState('');
            return (
              <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
              >
                <ul className="list-unstyled">
                  {React.Children.toArray(children).filter(
                    (child) =>
                      !value || child.props.children.toLowerCase().startsWith(value),
                  )}
                </ul>
              </div>
            );
          },
        );

     render(){
          
          return(
          <>
               <div className='dash_main_full_bdy'>
               <div className='dash_main_bdy'> 
                         
                         <div className='dash_header_bdy_cont'>
                              <div className='dash_main_bdy_sub'>
                              <div className='dash_header_tit_cont'>Obito</div>
                              <div className='dash_header_tit_sub_cont'>Dashboard</div>
                              <div className='dash_header_tit_cont_fill'></div>
                              <div className='dash_header_butt_cont'>
                                        <span className='dash_header_butt_pri_cont'>
                                        <Button className='dash_header_create_butt' variant="primary">Upload</Button>{' '}
                                        </span>
                                   <span className='dash_header_butt_pri_cont'>
                                        <Dropdown>
                                             <Dropdown.Toggle as={this.NotiTogg} id="dropdown-custom-components"/>
                                             <Dropdown.Menu as={this.HeadNotiMenu} className='dash_header_acc_menu_cont'>
                                                       <div className='dash_noti_tit_cont'>Notifications</div>
                                             </Dropdown.Menu>
                                             </Dropdown>
                                             </span>
                                        <span className='dash_header_butt_pri_cont'>
                                        <Dropdown>
                                             <Dropdown.Toggle as={this.AccTogg} id="dropdown-custom-components"/>
                                             <Dropdown.Menu as={this.HeadAccMenu} className='dash_header_acc_menu_cont'>
                                             <div className='dash_noti_tit_cont'>Options</div>
                                                  <Dropdown.Item eventKey="1">Account</Dropdown.Item>
                                                  <Dropdown.Item eventKey="2">Settings</Dropdown.Item>
                                                  <Dropdown.Item eventKey="1">Help</Dropdown.Item>
                                             </Dropdown.Menu>
                                             </Dropdown>
                                             </span>
                                             <span className='dash_header_butt_pri_cont'>
                                             <button onClick={this.termToggle} id='dash_header_acc_butt'><svg className='dash_header_butt_acc_ico' viewBox='0 0 512 512'><rect x='32' y='48' width='448' height='416' rx='48' ry='48' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32'/><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M96 112l80 64-80 64M192 240h64'/></svg></button>
                                             </span>
                                   </div>
                                   </div>
     
                              </div>

                       
                         <div className='dash_bdy'>
                              <Profile/>
                         </div>
                       
               </div>
               <div className='dash_term_bdy' style={{display:this.state.termVisi}} >
                    <Terminal/>
               </div>
               
               </div>
          </>)
     }

}


