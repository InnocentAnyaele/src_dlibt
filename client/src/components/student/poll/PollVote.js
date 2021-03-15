import React, {Component} from 'react'
import {Button, Form, Col, Spinner} from 'react-bootstrap'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import { Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap'
import axios from 'axios'

class PollVote extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       items: [],
       loading: true,
       message: '',
       name: '',
       option: '',
       password: ''
    }
  }

  componentDidMount = () => {
    axios 
    .get(`/poll/getPollOption/${this.props.id}`)
    .then((res) => {
      this.setState({items: res.data})
      this.setState({loading: false})
      // console.log(res.data)
    })
    .catch(()=> {
      this.setState({loading: false})
      alert('Error retrieving data')
    })
  }

optionHandler = e => {
  this.setState({
    option: e.target.value
  })
}

  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
    
  }

  submitHandler = async e => {
e.preventDefault()
console.log(this.state.name, this.state.option)
try {
  const res = await axios.post(`/poll/addVote/${this.props.id}`, {name: this.state.name, option: this.state.option, password: this.state.password} )
  if(res.status === 200){
    this.setState({message: 'Voted!'})
  }
} catch (err) {
  if(err.response.status === 404) {
    this.setState({message: 'Username or password is wrong'})
    // console.log(err)
  } else if (err.response.status === 500){
    this.setState({message: 'Server error'})
  } 
  else if (err.response.status === 400) {
    this.setState({message: 'You have already voted'})
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
    
render(){
    return (
        <div>
            <Button variant='Link' size='sm' onClick={this.openModal}><ThumbUpIcon style={{color: 'blue'}}/></Button>

            <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal} onRequestClose={this.hideModal}>
              <ModalHeader>
                {/* <ModalClose onClick={this.hideModal}/> */}
            Vote
              </ModalHeader>
              <ModalBody>
              <div className='text-center'>
<h2>{this.props.name}</h2>
              </div>

              <hr/>


              <Form onSubmit={this.submitHandler}>
              <fieldset>

      <Col sm={10} className='mt-4 mb-4'>
      {this.state.loading ? 
                <div className='m-3' >
    <Spinner animation='border' variant='primary' size='lg' /> 
    </div>
    :
      this.state.items.map(item => (
        <Form.Check key={this.props.id}
        className = 'poll-vote-item'
          type="radio"
          label={item.name}
          name="option"
          value={item.name}
          checked={this.state.option === item.name}
          onChange={this.optionHandler} 
        required />
      ))
      }
   

        {/* <label className='custom custom-control btn btn-primary'>
            <input class='custom-control-input' type='radio' name='votesselect' value='pollname' autoComplete='off' checked>
                <span style={{fontFamily: 'monospace', fontSize: '16px'}}>Poll Name</span>
            </input>
        </label> */}
      </Col>

  </fieldset>
              <Form.Group controlId="formBasicId">
    <Form.Control type="text" name='name' value={this.state.name} onChange={this.changeHandler} placeholder="Student ID" required />
  </Form.Group>
  <Form.Group controlId="formBasicId">
    <Form.Control type="password" name='password' value={this.state.password} onChange={this.changeHandler} placeholder="Password" required />
  </Form.Group>
  <p style={{color: 'red', fontWeight: 'bold'}}><i>{this.state.message}</i></p>
  <Button variant="primary" type="submit">
    Vote
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

export default PollVote

