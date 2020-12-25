import React from 'react';
import styled from 'styled-components';

import { Controller, Scene } from 'react-scrollmagic';

const SectionWipesStyled = styled.div`
  overflow: hidden;
  .panel {
    height: 100vh;
    width: 100vw;
    text-align: center;
  }
  
  .panel span {
    position: relative;
    display: block;
    overflow: visible;
    top: 50%;
    font-size: 80px;
  }
  
  .panel.blue {
    background-color: #3883d8;
  }
  
  .panel.turqoise {
    background-color: #38ced7;
  }
  
  .panel.green {
    background-color: #22d659;
    margin-bottom: 800px;
  }
  
  .panel.bordeaux {
    background-color: #953543;
  }
`;

const SectionWipes = () => (
  <SectionWipesStyled>
    <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
      <Scene pin>
      <div id='app_land_stack_11'>
                         <div id='app_land_stack_11_lft'>
                         You seem <br></br>interested already, <br></br>Get in touch!                                   
                         </div>
                         <div id='app_land_stack_11_rgt'>   
                                   <div>
                                   {/* {this.state.windowWidth<850?<div id='app_land_stack_11_rgt_cont'><img className='app_land_stack_11_rgt_ico' src={homecontact}></img></div>:<div id='app_land_stack_11_rgt_tit'>Get in Touch</div>} */}
                                   
                                   Do not hesitate to book a call with us if you are in a spot of getting us on board. Let’s get talking!

                                   <br></br><br></br>Also, if you have any queries with the pricing structure, reach out to us. We constantly have a lot of benefits in the cost structure for students, teams and businesses. 

                                   <br></br><br></br>Drop us a mail, and we will carry it further from there.

                                   <br></br><div className='app_land_stack_11_rgt_high'> <img className='mail_ico' src={mail_ico}></img> Get in touch <a id='app_land_stack_11_rgt_high_lnk' href='mailto:contact@cytescale.com'>contact@cytescale.com</a></div>
                                   
                              <div className='app_land_stack_11_rgt_high'> <img className='mail_ico' src={call_ico}></img> Call on{this.state.windowWidth<850?<br></br>:<span></span>} +918668752239</div>
                              </div>
                              
                         </div>
               </div>
      </Scene>
      <Scene pin>
        <div className="panel turqoise"><span>Panel</span></div>
      </Scene>
      <Scene pin>
        <div className="panel green"><span>Panel</span></div>
      </Scene>
      <Scene pin>
        <div className="panel bordeaux"><span>Panel</span></div>
      </Scene>
    </Controller>
  </SectionWipesStyled>
);

export default SectionWipes;