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
import {storage} from '../../../firebase/firebase'


// Modal.setAppElement('#root')

class GalleryAdd extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       title: '',
       file: '',
       fileName: 'Choose File',
       message: '',
       uploadPercentage: '0',
       progress: ''
    }
  }

  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

 changeFileHandler = e => {
  this.setState({file: e.target.files[0]})
  this.setState({fileName: Date.now() + e.target.files[0].name})
 }
  
  submitHandler = async e => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('title', this.state.title)
    formData.append('file', this.state.file)
    formData.append('fileName', this.state.fileName)

    if (this.state.file.type.split('/')[0] === 'image'){

      const uploadTask = storage.ref(`/gallery/${this.state.fileName}`).put(this.state.file)
      uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        // console.log(progress)
        this.setState({progress: progress})
        // console.log(snapshot)
      },
       (error) => {
         console.log(error)
       },
        async (complete)=>{
          try {
            const url = await storage.ref('gallery').child(this.state.fileName).getDownloadURL()  
            console.log(url)     
            formData.append('url', url)
            const res = await axios.post('/gallery/addGallery', formData, {
              headers : {
                'Content-Type' : 'multipart/form-data'
              },
              onUploadProgress: progressEvent => {
                this.setState({uploadPercentage: (parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)))})
              }
            } )
            if(this.state.uploadPercentage === 100){
              this.setState({message: 'File Uploaded!'})
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
        })

      
    }
      else {
        this.setState({message: 'Please select an image'})
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
          isOpen: false,
        });
        window.location.reload(false)
      };
    

    render() {
        return (
            <div>
 <button className='btn btn-primary m-3' onClick={this.openModal}>
<AddIcon/> Add to Gallery
         </button>

          <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal} onRequestClose={this.hideModal}>
              <ModalHeader>
                {/* <ModalClose onClick={this.hideModal}/> */}
               Add to Gallery
              </ModalHeader>
              <ModalBody>
                {/* <hr/> */}
                <Form onSubmit={this.submitHandler}>
                <Form.Group controlId="formBasicTitle">
    {/* <Form.Label>Seminar Title</Form.Label> */}
    <Form.Control type="text" name='title' placeholder="Title" value={this.state.title} onChange={this.changeHandler} required/>
  </Form.Group>
  <Form.Group>
    <Form.File id="exampleFormControlFile1" type='file'  onChange={this.changeFileHandler} accept="image/*" required/>
  </Form.Group>
  <p style={{color: 'red'}}><i>{this.state.message}</i></p>

  <div className='mb-3'>
  <ProgressBar striped variant="success" now={this.state.progress} label={`${this.state.progress}%`} /> <br></br>
  {/* <ProgressBar striped variant="success" now={this.state.uploadPercentage} label={`${this.state.uploadPercentage}%`} /> */}
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

export default GalleryAdd

