import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'
// import Modal from 'react-modal'
// import ModalHeader from 'react-bootstrap/ModalHeader';
// import ModalBody from 'react-bootstrap/ModalBody';
// import ModalFooter from 'react-bootstrap/ModalFooter';
// import ModalTitle from 'react-bootstrap/ModalTitle'
import { Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
// import axios from 'axios'
// Modal.setAppElement('#root')

class ECommerceBuyModal extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name: '',
       email: '',
       phone: '',
       info: '',
       message: '',
       product: this.props.title
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  

  submitHandler = async (e) => {
    e.preventDefault()
    this.setState({product: this.props.title})
    alert('Please use contact from the purchase information to get in touch with buyer')
    // console.log(this.state.name, this.state.info, this.state.phone, this.state.email, this.state.product)
    // try {
    //   const res = await axios.post('/ecommerce/purchaseEcommerce', {name: this.state.name, email: this.state.email, phone: this.state.phone, info: this.state.info, product: this.state.product} )
    //  if(res.status === 200){
    //    this.setState({message: 'Email sent!'})
    //  }
    // } catch (err) {
    //   if(err.response.status === 500) {
    //     this.setState({message: 'There was a problem with the server!'})
    //     // console.log(err)
    //   }
    //   else {
    //     this.setState({message: err.response.data.msg})
    //     // console.log(err.response.data.msg)
    //   }
    // }
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

      if (this.props.type === 'advertisement'){
        return (
          <button className='btn btn-primary mr-2' onClick={this.openModal} disabled>
          <ShoppingCartIcon/>
                  </button>  
        )
      }
      else {
        return (
          <div>
<button className='btn btn-primary mr-2' onClick={this.openModal}>
<ShoppingCartIcon/>
       </button>

        <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal} onRequestClose={this.hideModal}>
            <ModalHeader>
              {/* <ModalClose onClick={this.hideModal}/> */}
          Purchase {this.props.title}
            </ModalHeader>
            <ModalBody>
            <Form onSubmit={this.submitHandler}>

            <Form.Group controlId="formBasicName">
  <Form.Control type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.changeHandler} required/>
</Form.Group>

<Form.Group controlId="formBasicEmail">
  <Form.Control type="email" placeholder="Email" name="email"  value={this.state.email} onChange={this.changeHandler} required />
  {/* <Form.Text className="text-muted">
    We'll never share your email with anyone else.
  </Form.Text> */}
</Form.Group>

<Form.Group controlId="formBasicPhone">
  <Form.Control type="text" placeholder="Phone" name="phone"  value={this.state.phone} onChange={this.changeHandler} required />
</Form.Group>


<Form.Group controlId="exampleForm.ControlTextarea1">
  <Form.Control as="textarea" rows="3" name="info" placeholder="Additional Info" value={this.state.info} onChange={this.changeHandler} required />
</Form.Group>
<p style={{color: 'red'}} ><i>{this.state.message}</i></p>

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

}

export default ECommerceBuyModal

