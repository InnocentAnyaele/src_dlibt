import React, { Component } from 'react'
import {Form, Button, ProgressBar} from 'react-bootstrap'
// import Modal from 'react-modal'
// import ModalHeader from 'react-bootstrap/ModalHeader';
// import ModalBody from 'react-bootstrap/ModalBody';
// import ModalFooter from 'react-bootstrap/ModalFooter';
// import ModalTitle from 'react-bootstrap/ModalTitle'
import { Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap'
import AddIcon from '@material-ui/icons/Add'
import axios from 'axios'


// Modal.setAppElement('#root')

class NewsAdd extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       title: '',
       name: '',
       link: '',
       news: '',
       file: '',
       fileName: 'Choose FIle',
       message: '',
       uploadPercentage: '0'
    }
  }

  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  // changeFileHandler = e => {
  //   this.setState({file: e.target.files[0]})
  //   this.setState({fileName: e.target.files[0].name})
  //  }
    
   submitHandler = async e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('title', this.state.title)
    // formData.append('file', this.state.file)
    formData.append('link', this.state.link)
    formData.append('name', this.state.name)
    formData.append('news', this.state.news)
    console.log(this.state.news)
    
const insert = async () => {
  try {
    const res = await axios.post('/news/addNews', formData, {
      headers : {
        'Content-Type' : 'multipart/form-data'
      },
      onUploadProgress: progressEvent => {
        this.setState({uploadPercentage: (parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)))})
      }
    } )
    if(this.state.uploadPercentage === 100){
      this.setState({message: 'News Added!'})
    }
    console.log(this.state.uploadPercentage)
    console.log(res.data)
  } catch (err) {
    if(err.response.status === 500) {
      this.setState({message: 'There was a problem with the server!'})
      // console.log(err)
    } else if (err.response.status === 400){
      this.setState({message: 'Could not upload, try again later'})
    } 
    else {
      this.setState({message: err.response.data.msg})
      // console.log(err.response.data.msg)
    }
  }
}

insert ()

// if (this.state.file.length < 1) {
//   insert()
// }
// else {
// if (this.state.file.type.split('/')[0] === 'image'){
//   insert()
// }
// else {
//   this.setState({message: 'Select an image'})
// }
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
        window.location.reload(false)
      };
    

    render() {
        return (
            <div>
 <button className='btn btn-primary m-3' onClick={this.openModal}>
<AddIcon/> Add news
         </button>

          <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal} onRequestClose={this.hideModal}>
              <ModalHeader>
                {/* <ModalClose onClick={this.hideModal}/> */}
               Add news
              </ModalHeader>
              <ModalBody>
                {/* <hr/> */}
                <Form onSubmit={this.submitHandler}>
                <Form.Group controlId="formBasicTitle">
    {/* <Form.Label>Seminar Title</Form.Label> */}
    <Form.Control type="text" placeholder="Title"  onChange={this.changeHandler} name='title' value={this.state.title} required/>
  </Form.Group>

  <Form.Group controlId="formBasicTitle">
    {/* <Form.Label>Seminar Title</Form.Label> */}
    <Form.Control type="text" name='name'  onChange={this.changeHandler} value={this.state.name} placeholder="Name" required/>
  </Form.Group>

  {/* <Form.Group>
  <Form.File id="exampleFormControlFile1" type='file' onChange={this.changeFileHandler} accept="image/*"/>
    <Form.Text className="text-muted">
      School logo recommended if you don't have any image.
    </Form.Text>
  </Form.Group> */}

  <Form.Group controlId="form
  BasicTitle">
    {/* <Form.Label>Seminar Title</Form.Label> */}
    <Form.Control type="text" name='link' value={this.state.link}  onChange={this.changeHandler} placeholder="Enter link if any" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Control as="textarea" name='news' value={this.state.news} rows="3" placeholder='News' onChange={this.changeHandler} required/>
  </Form.Group>
  <p style={{color: 'red'}}><i>{this.state.message}</i></p>
<div className='mb-3'>
<ProgressBar striped variant="success" now={this.state.uploadPercentage} label={`${this.state.uploadPercentage}%`} />
</div>
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

export default NewsAdd

