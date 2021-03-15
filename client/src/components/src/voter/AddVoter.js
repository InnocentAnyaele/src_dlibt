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

class AddVoter extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       id: '',
       password: '',
       message: '',
    }
  }

  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

   submitHandler = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('/voter/addVoter', {password: this.state.password, id: this.state.id} )
      if(res.status === 200){
        this.setState({message: 'Student Added!'})
      }
    } catch (err) {
      if(err.response.status === 404) {
        this.setState({message: 'Voter already exists'})
        // console.log(err)
      } else if (err.response.status === 500){
        this.setState({message: 'Server error'})
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
        });
        window.location.reload(false)
      };

    render() {
        return (
            <div>
 <button className='btn btn-primary m-3' onClick={this.openModal}>
<AddIcon/> Add a student
         </button>

          <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal} onRequestClose={this.hideModal}>
              <ModalHeader>
                {/* <ModalClose onClick={this.hideModal}/> */}
               Add a student
              </ModalHeader>
              <ModalBody>
                {/* <hr/> */}
                <Form onSubmit={this.submitHandler}>
                <Form.Group controlId="formBasicTitle">
    {/* <Form.Label>Seminar Title</Form.Label> */}
    <Form.Control type="text" placeholder="Student id" name='id' value={this.state.id} onChange={this.changeHandler} required/>
  </Form.Group>
  <Form.Group controlId="formBasicTitle">
    {/* <Form.Label>Seminar Title</Form.Label> */}
    <Form.Control type="password" name='password' value={this.state.password} onChange={this.changeHandler}  placeholder="Student password" required/>
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

export default AddVoter

