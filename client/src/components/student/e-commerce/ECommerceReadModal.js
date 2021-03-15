import React, { Component } from 'react'
// import image from '../../../assets/img/img1.jpg'
import {Card} from 'react-bootstrap'
// import Modal from 'react-modal'
// import ModalHeader from 'react-bootstrap/ModalHeader';
// import ModalBody from 'react-bootstrap/ModalBody';
// import ModalFooter from 'react-bootstrap/ModalFooter';
// import ModalTitle from 'react-bootstrap/ModalTitle'
import { Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap'
import VisibilityIcon from '@material-ui/icons/Visibility'

// Modal.setAppElement('#root')

class ECommerceReadModal extends Component {

    state = {
        isOpen: false
      };
    
      openModal = () => {
        this.setState({
          isOpen: true
        });
      };
    
      hideModal = () => {
        this.setState({
          isOpen: false
        });
      };
    

    render() {
        return (
            <div>
 <button className='btn btn-primary mr-2' onClick={this.openModal}>
   <VisibilityIcon/> 
         </button>

          <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal} onRequestClose={this.hideModal} style={{wordWrap: "break-word"}}>
              <ModalHeader>
                {/* <ModalClose onClick={this.hideModal}/> */}
              <b>{this.props.title}</b> 
              </ModalHeader>
              <ModalBody>
              
              <Card>
                  <img className="modal-img" src={this.props.url} alt="card"/>
              </Card>

                <hr/>
<div className="text-center">
<h5 className="card-title"><b>{this.props.title}</b></h5>
<div className='text-muted'>
                <p>Vendor - {this.props.name}</p>
                <p>Price - {this.props.price}</p>
                <p>Info - <i>{this.props.info}</i></p>
                <p>{this.props.email}</p>
                <p>{this.props.phone}</p>
                <p>{this.props.date}</p>
</div>
          
</div>


              </ModalBody>
              <ModalFooter>
                <button className='btn btn-default' onClick={this.hideModal}>
                  Close
                </button>
              </ModalFooter>
            </Modal>
            </div>

    
        )
       
    }

}

export default ECommerceReadModal

