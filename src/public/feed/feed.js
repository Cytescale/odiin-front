import React from 'react';



import {Dropdown,DropdownButton } from 'react-bootstrap';
import comm_svg from '../../assets/svg/comm_outline.svg';
import pro_pic_1 from '../../assets/pro_pic_1.jpeg';
import home_book_svg from '../../assets/svg/home_bookmark_outline.svg';
import home_heart_svg from '../../assets/svg/home_heart_outline.svg';
import land1 from '../../assets/land_1.jpg';
import show_1 from '../../assets/show_1.png';
import show_2 from '../../assets/show_2.png';
import show_3 from '../../assets/show_3.png';
import show_4 from '../../assets/show_4.png';
import show_5 from '../../assets/show_5.png';
import show_6 from '../../assets/show_6.png';


export default class feed extends React.Component{
    constructor(props){
        super(props)
        this.props.onFeedLoad(1);
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
        
        // console.log(this.props);
        return(
            <div id='home_app_bdy_cont_cent_cont'>
            <div id='home_app_bdy_cont_cent_srch_cont'>
                    <div id='home_app_bdy_cont_cent_srch_txt_cont'>
                    <input type='text' id='home_app_bdy_cont_cent_srch_txt_fld' placeholder='Search wonder'></input>
                    </div>
                    <div id='home_app_bdy_cont_cent_srch_butt_cont'>
                    <button id='home_app_bdy_cont_cent_filt_butt'><svg id='home_app_bdy_cont_cent_filt_img'  viewBox='0 0 512 512' ><title>Filter</title><path fill='none' stroke='var(--app-primary-color)' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M32 144h448M112 256h288M208 368h96'/></svg></button>
                        <button id='home_app_bdy_cont_cent_upload_butt' onClick={this.props.onUpload}>Upload</button>
                    </div>
            </div>
            <div id='home_app_bdy_cont_cent_feat_cont'>
                <img id='home_app_bdy_cont_cent_feat_img'src={land1}></img>
            </div>
            <div id='home_app_bdy_cont_cent_cate_cont'>
                <button className='home_app_bdy_cont_cent_cate_butt_class'>All</button>
                <button className='home_app_bdy_cont_cent_cate_butt_class'>Sketch</button>
                <button className='home_app_bdy_cont_cent_cate_butt_class'>Architecture</button>
                <button className='home_app_bdy_cont_cent_cate_butt_class'>App Design</button>
                <button className='home_app_bdy_cont_cent_cate_butt_class'>Web Design</button>
            </div>
            <div id='home_app_bdy_cont_cent_bdy'>
                {this.drawPostLand(show_1,"This is a living","Alex Being",this.props.themeColor,this.props.isDetail)}
                {this.drawPostLand(show_2,"What a beautifull landscape","Alex Being",this.props.themeColor,this.props.isDetail)}
                {this.drawPostLand(show_3,"This is a living","Alex Being",this.props.themeColor,this.props.isDetail)}
                {this.drawPostLand(show_4,"This is a living","Alex Being",this.props.themeColor,this.props.isDetail)}
                {this.drawPostLand(show_5,"This is a living","Alex Being",this.props.themeColor,this.props.isDetail)}
                {this.drawPostLand(show_6,"This is a living","Alex Being",this.props.themeColor,this.props.isDetail)}
            </div>
        </div>
        );
    }

}