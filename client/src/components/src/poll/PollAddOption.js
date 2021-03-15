import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'
// import Modal from 'react-modal'
// import ModalHeader from 'react-bootstrap/ModalHeader';
// import ModalBody from 'react-bootstrap/ModalBody';
// import ModalFooter from 'react-bootstrap/ModalFooter';
// import ModalTitle from 'react-bootstrap/ModalTitle'
import { Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap'
import AddIcon from '@material-ui/icons/Add'
import axios from 'axios'


// Modal.setAppElement('#root')

class PollAddOption extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name: '',
       message: ''
    }
  }
  
  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = async e => {
    e.preventDefault()
    try {
      const res = await axios.post(`/poll/addPollOption/${this.props.id}`, {name: this.state.name} )
      if(res.status === 200){
        this.setState({message: 'Option added!'})
      }
    } catch (err) {
    if (err.response.status === 500){
        this.setState({message: 'Server error'})
      } 
      else if (err.response.status === 400){
        this.setState({message: 'Option already exist'})
      }
      else {
        this.setState({message: err.response.data.msg})
        // console.log(err.response.data.msg)
      }
    }
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
        })
        window.location.reload(false)
      };
    

    render() {
        return (
            <div>
      <Button variant='Link' onClick={this.openModal} size='sm'><AddIcon style={{color: 'blue'}}/></Button>
 {/* <button className='btn btn-primary m-3' onClick={this.openModal}><AddIcon/></button> */}

          <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal} onRequestClose={this.hideModal}>
              <ModalHeader>
                {/* <ModalClose onClick={this.hideModal}/> */}
               Add poll option
              </ModalHeader>
              <ModalBody>
                {/* <hr/> */}
                <Form onSubmit={this.submitHandler}>
                <Form.Group controlId="formBasicTitle">
    {/* <Form.Label>Seminar Title</Form.Label> */}
    <Form.Control type="text" placeholder="Poll name" name='name' value={this.state.name} onChange={this.changeHandler} required/>
  </Form.Group>
  <p style={{color: 'red'}}><i>{this.state.message}</i></p>
  <Button variant='primary' type='submit'>Add</Button>
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

export default PollAddOption

