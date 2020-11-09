import React from 'react';
import '../css/profileCard.css';

import pro_pic_1 from '../../assets/pro_pic_1.jpeg';

export default class profileCard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='app_pro_card_main_cont'>
                    <div className='app_pro_card_img_cont'>
                        <img id='app_pro_card_img_id' src={pro_pic_1} />
                    </div>
                    <div className='app_pro_card_det_cont'> 
                                <div id='app_pro_card_det_name'>Account Name</div>
                                <div id='app_pro_card_det_des'>This is the descriptiom of the account</div>
                                <div className='app_pro_card_foll_cont'>
                        <button id='app_pro_card_foll_butt'><svg xmlns='http://www.w3.org/2000/svg' className='app_pro_card_ico' viewBox='0 0 512 512'><title>Person Add</title><path d='M376 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/><path d='M288 304c-87 0-175.3 48-191.64 138.6-2 10.92 4.21 21.4 15.65 21.4H464c11.44 0 17.62-10.48 15.65-21.4C463.3 352 375 304 288 304z' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M88 176v112M144 232H32'/></svg>Follow</button>
                    </div>
                    </div>
                    
            </div>
        );
    }
}