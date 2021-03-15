import React, { Component } from 'react'
// import image from '../../../assets/img/img1.jpg'
import {Card} from 'react-bootstrap'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBook} from "@fortawesome/free-solid-svg-icons";
// import Modal from 'react-modal'
// import ModalHeader from 'react-bootstrap/ModalHeader';
// import ModalBody from 'react-bootstrap/ModalBody';
// import ModalFooter from 'react-bootstrap/ModalFooter';
// import ModalTitle from 'react-bootstrap/ModalTitle'
import { Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap'

// Modal.setAppElement('#root')

class NewsModal extends Component {

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
 <button className='btn btn-outline-primary mb-2 mr-2' onClick={this.openModal}>
            {/* <FontAwesomeIcon icon={faBook}/> */}
             Read
         </button>

          <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal} onRequestClose={this.hideModal} style={{wordWrap: "break-word"}}>
              <ModalHeader>
                {/* <ModalClose onClick={this.hideModal}/> */}
               <p><b>{this.props.title}</b></p>
              </ModalHeader>
              <ModalBody>
              
              <Card>
                  <img className="modal-img" src={require(`../../../assets/info/datalink.png`)} alt="card"/>
              </Card>

                <hr/>
                <p>{this.props.info}</p>
                <p className='text-center'><b>{this.props.name}</b></p>
                <p className='text-center text-muted' >{this.props.date}</p>

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

export default NewsModal

