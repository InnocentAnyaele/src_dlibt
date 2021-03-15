import React, {Component} from 'react'
import {Button, ProgressBar, Col, Spinner} from 'react-bootstrap'
import VisibilityIcon from '@material-ui/icons/Visibility'
import { Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap'
import PollResultTable from './PollResultTable'
import axios from 'axios'

class PollResult extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       loading: true,
       items: [],
       count: ''
    }
  }

  // componentDidMount = () => {
  //   axios 
  //   .get(`/poll/getVoteCount/${this.props.id}`)
  //   .then((res) => {
  //     console.log(res.data)
  //     this.setState({count: res.data})
  //     this.setState({loading: false})
  //   })
  //   .catch(()=> {
  //     this.setState({loading: false})
  //     alert('Error retrieving data')
  //   })
  // }

  componentDidMount = () => {
    axios 
    .get(`/poll/getVote/${this.props.id}`)
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
  
    state = {
        isOpen: false
      };
    
      openModal = () => {
        axios 
        .get(`/poll/getVoteCount/${this.props.id}`)
        .then((res) => {
          console.log(res.data)
          this.setState({count: res.data})
          this.setState({loading: false})
        })
        .catch(()=> {
          this.setState({loading: false})
          alert('Error retrieving data')
        })
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
                <Button variant="Link" size='sm' onClick={this.openModal}><VisibilityIcon style={{color: 'blue'}} /></Button>

                <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal} onRequestClose={this.hideModal}>
              <ModalHeader>
                {/* <ModalClose onClick={this.hideModal}/> */}
            Poll Result
              </ModalHeader>
              <ModalBody>
              <div className='text-center'>
<h2>{this.props.name}</h2>
              </div>

              <hr/>
                <Col className='mb-3'>
                {this.state.loading ? 
                  <div className='m-3'>
    <Spinner animation='border' variant='primary' size='lg' /> 
    </div>
    :
    this.state.items.map(item => (
      <div key={this.props.id} className='mb-2'>
                <span className='poll-result-item'>
                    {item.name}
                </span>
                <ProgressBar now={((item.optionVoters.length)/(this.state.count))*100} label={`${Math.round(((item.optionVoters.length)/(this.state.count))*100)}%`} variant='primary' />
                </div>
    ))
                }
                </Col>
            <PollResultTable id={this.props.id} count={this.state.count} className='m-3'/>

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
    

export default PollResult