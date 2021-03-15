import React, {Component} from 'react'
import {Table, Spinner} from 'react-bootstrap'
import axios from 'axios'
// import DeleteIcon from '@material-ui/icons/Delete'
import PollVoteDelete from './PollVoteDelete'

class PollResultTable extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       loading: false,
       items: [],
      //  number_of_votes: 0
    }
  }

  componentDidMount = () => {
    axios 
    .get(`/poll/getVoteList/${this.props.id}`)
    .then((res) => {
      this.setState({items: res.data})
      this.setState({loading: false})
      console.log(res.data)
      // this.setState({number_of_votes: res.length})
      // console.log(this.state.number_of_votes)
    })
    .catch(()=> {
      this.setState({loading: false})
      alert('Error retrieving data')
    })
  }
  
    render() {
        return (
            <div>
  <Table striped>
  <thead style={{color: 'blue'}}>
    <tr>
      <th>Vote List ({this.props.count})</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
  {this.state.loading ? 
                  <div className='m-3'>
    <Spinner animation='border' variant='primary' size='lg' /> 
    </div>
    :
    this.state.items.map(item => (
      <tr key={this.props.id}>
      <td>{item}</td>
      {/* <td><Button variant='Link' size='sm'><DeleteIcon style={{color: 'red'}}/></Button> </td> */}
      <td><PollVoteDelete key={item} id={this.props.id} vote={item}></PollVoteDelete></td>
    </tr>
    ))
   
  }
    
  </tbody>
</Table>
            </div>
        )
    }
}

export default PollResultTable