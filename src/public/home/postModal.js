import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal,Button} from 'react-bootstrap';
import '../css/postmodal.css';
import pro_pic_1 from '../../assets/pro_pic_1.jpeg';
export default class PostModal extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return (             
            <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered className='makePostModalClass'>
              
              <Modal.Body id='post_modal_bdy_cont'>
              <div id='app_bdy_make_post_cont_modal'>
              <div id="app_make_post_cont_top">
              <img className='home_post_bdy_class_tit_cont_make_post_img_modal' src={pro_pic_1}></img>
              <textarea id='app_make_post_data_txt' placeholder="What are you thinking?"></textarea>
              </div>
              <div id="app_make_post_cont_bott_modal">
              
              <button className='app_make_post_img_cont'><svg  className='app_make_post_img_ico' viewBox='0 0 512 512'><rect x='48' y='80' width='416' height='352' rx='48' ry='48' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32'/><circle cx='336' cy='176' r='32' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/><path d='M304 335.79l-90.66-90.49a32 32 0 00-43.87-1.3L48 352M224 432l123.34-123.34a32 32 0 0143.11-2L464 368' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/></svg></button>
              <button className='app_make_post_img_cont'><svg className='app_make_post_img_ico' viewBox='0 0 512 512'><title>Happy</title><circle cx='184' cy='232' r='24'/><path d='M256.05 384c-45.42 0-83.62-29.53-95.71-69.83a8 8 0 017.82-10.17h175.69a8 8 0 017.82 10.17c-11.99 40.3-50.2 69.83-95.62 69.83z'/><circle cx='328' cy='232' r='24'/><circle cx='256' cy='256' r='208' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/></svg></button>
              <button className='app_make_post_img_cont'><svg className='app_make_post_img_ico' viewBox='0 0 512 512'><title>Videocam</title><path d='M374.79 308.78L457.5 367a16 16 0 0022.5-14.62V159.62A16 16 0 00457.5 145l-82.71 58.22A16 16 0 00368 216.3v79.4a16 16 0 006.79 13.08z' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/><path d='M268 384H84a52.15 52.15 0 01-52-52V180a52.15 52.15 0 0152-52h184.48A51.68 51.68 0 01320 179.52V332a52.15 52.15 0 01-52 52z' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/></svg></button>
              
              <button className='app_make_post_gif_cont'>Gif</button>
              <button className='app_make_post_sub_butt'>Post</button>
            </div>
            </div>
              </Modal.Body>
            </Modal>
          );
    }
    
}