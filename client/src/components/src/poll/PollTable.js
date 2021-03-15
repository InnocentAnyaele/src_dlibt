import React, {useState, useEffect} from 'react'
import {Table, Spinner} from 'react-bootstrap'
import PollVote from '../../student/poll/PollVote'
// import PollResult from '../../student/poll/PollResult'
import PollResult from './PollResult'
// import DeleteIcon from '@material-ui/icons/Delete'
import PollAddOption from './PollAddOption'
import axios from 'axios'
import DeletePoll from './DeletePoll'

const PollTable = () => {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
    .get('/poll/getPoll')
    .then((res)=> {
        setItems(res.data)
        setLoading(false)
  // console.log(res.data)
    })
    .catch(() => {
      setLoading(false)
      alert('Error retreiving data')
    })
  }, [])

  // useEffect(() => {
  //   axios 
  //   .get('')
  // })

    return(
        <div>
            <Table striped>
  <thead style={{color: 'blue'}}>
    <tr>
      <th>Poll Title</th>
      <th>Add option(s)</th>
      <th>Vote</th>
      <th>Results</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
{
  loading ? 
  <div className='m-3'>
    <Spinner animation='border' variant='primary' size='lg' /> 
    </div>
    :
    items.map(item => (
      <tr key={item._id}>
      <td>{item.name}</td>
      <td><PollAddOption id={item._id}/></td>
      <td><PollVote id={item._id} name={item.name} /></td>
      <td><PollResult id={item._id} name={item.name} /></td>
      <td><DeletePoll key={item._id} id={item._id} /></td>
      {/* <td><Button variant='Link' size='sm'><DeleteIcon style={{color: 'red'}}/></Button></td> */}
    </tr>
    ))
    
}
   
  </tbody>
</Table>
        </div>
    )
}

export default PollTable