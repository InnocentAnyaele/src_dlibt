import React, {Component} from 'react'
import {Button, Form} from 'react-bootstrap'
import { Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap'
import EditIcon from '@material-ui/icons/Edit'
import axios from 'axios'

class WelcomeModal extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       message: '',
    }
  }


  changeHandler = e => {
    this.setState({[e.target.name] : e.target.value})
  }

  submitHandler =  e => {
     axios.put(`/welcome/changeMessage/${this.props.id}`,  {message: this.state.message})
     .catch(error=> {
       console.log(error)
     })
  }
  
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
                <Button variant="Link" size='sm' onClick={this.openModal} className='mx-3'><EditIcon style={{color: 'blue'}} /></Button>

                <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal} onRequestClose={this.hideModal}>
              <ModalHeader>
                {/* <ModalClose onClick={this.hideModal}/> */}
            Edit Message
              </ModalHeader>
              <ModalBody>
              <Form onSubmit={this.submitHandler}>
              {/* <input value={this.props.id} name='id'  hidden /> */}
  {/* <Form.Group controlId="formBasicEmail">
    <Form.Label>Edit message</Form.Label>
    <Form.Control type="text" name="message" placeholder="Message" value={this.message} onChange={this.changeHandler} required/>
  </Form.Group> */}
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Control as="textarea" name='message' value={this.message} rows="3" placeholder='Message' onChange={this.changeHandler} required/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </Form>

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
    

export default WelcomeModal