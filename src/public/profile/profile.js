import React from 'react';
import '../css/profile.css';
import {Tabs,Tab} from 'react-bootstrap';
import {Dropdown,DropdownButton } from 'react-bootstrap';
import comm_svg from '../../assets/svg/comm_outline.svg';
import home_book_svg from '../../assets/svg/home_bookmark_outline.svg';
import home_heart_svg from '../../assets/svg/home_heart_outline.svg';

import pro_pic_1 from '../../assets/pro_pic_1.jpeg';

import show_1 from '../../assets/show_1.png';
import show_2 from '../../assets/show_2.png';
import show_3 from '../../assets/show_3.png';
import show_4 from '../../assets/show_4.png';
import show_5 from '../../assets/show_5.png';
import show_6 from '../../assets/show_6.png';


import ProfileCard from './profileCard';

export default class profile extends React.Component{
    constructor(props){
        super(props)
        this.props.onFeedLoad(5);
    }

    drawPostLand(img,tit,name,style,ifDetail){
        return(
                <div className='home_post_bdy_class' style={style}>
                 {ifDetail?
                <div className='home_post_bdy_class_tit_cont'>
                <img className='home_post_bdy_class_tit_cont_img' src={pro_pic_1}></img>
                <div id='home_post_bdy_class_tit_cont_nam'>
                    <div className='home_post_bdy_class_tit_cont_nam_tit'>{tit}</div>
                 <div className='home_post_bdy_class_tit_cont_abut_tit'>@{name}<span id='home_post_bdy_class_tit_cont_abut_data'>posted on 2 October</span></div>
                    </div>
            
                <div className='home_post_bdy_more_class'>
                                <DropdownButton id="dropdown_basic_button_cus" title="">
                                <Dropdown.Item className='dropdown_basic_button_item' href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item className='dropdown_basic_button_item' href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item className='dropdown_basic_button_item' href="#/action-3">Something else</Dropdown.Item>
                                </DropdownButton>
                    </div>
                </div>:<div></div>
                    }
              
                <div className='home_post_bdy_class_bdy_cont'>
                    <img src={img} id='home_post_bdy_class_bdy_cont_img'></img>
                </div>
                {ifDetail?
                <div className='home_post_foot_main_class'>
                <div className='home_post_disc'>
                    This is a discription of the current post<br></br>
                    This is a discription of the current post 
                    </div>
                <div className='home_post_foot_class'>
                        <div  className='home_post_foot_like_class'>
                        <button className='home_post_bdy_class_like_cont'><img className='home_post_bdy_class_like_cont_img' src={home_heart_svg}></img><span className='home_post_bdy_class_like_cont_tit'>100</span></button>
                        </div>
                        
                        <div  className='home_post_foot_comm_class'>
                        <button className='home_post_bdy_class_like_cont'><img className='home_post_bdy_class_like_cont_img' src={comm_svg}></img><span className='home_post_bdy_class_like_cont_tit'>50</span></button>    
                        </div>

                        <div  className='home_post_foot_book_class'>
                        <button className='home_post_bdy_class_like_cont'><img className='home_post_bdy_class_like_cont_img' src={home_book_svg}></img></button>
                        </div>
                </div></div>:<div></div>
                }
            </div>        
        );
    }


    render(){

        return(
            <div id='home_app_bdy_cont_cent_cont'>
                        <div id='home_app_pro_cont'>
                                <div id='home_app_pro_header_cont'>
                                <div id='home_app_pro_header_back_cont'><a id='home_app_pro_header_back_lnk' href='#'><svg id='home_app_pro_header_back_ico'  viewBox='0 0 512 512'><title>Arrow Back</title><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M244 400L100 256l144-144M120 256h292'/></svg></a></div><div id='home_app_pro_header_pro_name'><div id='home_app_pro_header_pro_name_tit'>Account name</div><div id='home_app_pro_header_pro_id_tit'>@account_id</div></div>
                                </div>
                                <div id='home_app_pro_bdy_cont'>
                                        <div id='home_app_pro_bdy_cover_cont'>
                                                <div id='home_app_pro_bdy_cover'>
                                                    </div>
                                        </div>
                                        <div id='home_app_pro_bdy_pro_pic_main_cont'>
                                            <div id='home_app_pro_bdy_pro_pic_cont'>
                                                <img id='home_app_pro_bdy_pro_pic_img' src={pro_pic_1}></img>
                                                <div id='home_app_pro_bdy_pro_butt_cont'><button id='home_app_pro_bdy_pro_more_butt'><svg id='home_app_pro_bdy_pro_more_butt_ico' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Vertical</title><circle cx='256' cy='256' r='32' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/><circle cx='256' cy='416' r='32' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/><circle cx='256' cy='96' r='32' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/></svg></button><button id='home_app_pro_bdy_pro_butt'>Edit Profile</button></div>
                                            </div>
                                        </div>
                                        <div id='home_app_pro_des_main_cont'>
                                                This is my description<br></br>
                                                This is my description<br></br>
                                                
                                        </div>
                                        <Tabs  className="home_app_pro_tab_main_cont" >
                                            <Tab className='home_app_pro_tab_1' eventKey="home" title={<div class='home_app_pro_tab_tit'>10 Pieces</div>}>
                                            {this.drawPostLand(show_1,"This is a living","Alex Being",this.props.themeColor,this.props.isDetail)}
                                            {this.drawPostLand(show_2,"What a beautifull landscape","Alex Being",this.props.themeColor,this.props.isDetail)}
                                            {this.drawPostLand(show_3,"This is a living","Alex Being",this.props.themeColor,this.props.isDetail)}
                                            {this.drawPostLand(show_4,"This is a living","Alex Being",this.props.themeColor,this.props.isDetail)}
                                            {this.drawPostLand(show_5,"This is a living","Alex Being",this.props.themeColor,this.props.isDetail)}
                                            {this.drawPostLand(show_6,"This is a living","Alex Being",this.props.themeColor,this.props.isDetail)}
                                            </Tab>
                                            <Tab className='home_app_pro_tab_2' eventKey="profile" title="0 Followers">
                                             <ProfileCard />
                                             <ProfileCard />
                                             <ProfileCard />
                                             <ProfileCard />
                                            </Tab>
                                            <Tab className='home_app_pro_tab_3' eventKey="contact" title="0 Following">
                                            <ProfileCard />
                                             <ProfileCard />
                                             <ProfileCard />
                                             <ProfileCard />
                                            </Tab>
                                            </Tabs>
                                        
                                </div>
                        </div>
        </div>
        );
    }

}