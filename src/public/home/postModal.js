import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal,Button} from 'react-bootstrap';
import '../css/postmodal.css';
export default class PostModal extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return (             
            <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Upload a Piece
                </Modal.Title>
              </Modal.Header>
              <Modal.Body id='post_modal_bdy_cont'>
                <div id='post_modal_bdy_holder_cont'>
                    Upload a file
                </div>
                <div id='post_modal_bdy_sett_cont'>
                <input type='text' placeholder='Enter Piece Title' id='post_modal_tit_text'></input>
                <div></div>
                <input type='text' id='post_modal_tag_txt' placeholder='Tags'></input> 
                </div>
              </Modal.Body>
            </Modal>
          );
    }
    
}