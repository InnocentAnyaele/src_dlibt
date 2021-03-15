import React, {useState, useEffect} from 'react'
import {Table, Spinner} from 'react-bootstrap'
import PollVote from './PollVote'
import PollResult from './PollResult'
import axios from 'axios'

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

    return(
        <div>
            <Table striped>
  <thead style={{color: 'blue'}}>
    <tr>
      <th>Poll Title</th>
      <th>Vote</th>
      <th>Results</th>
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
      <td><PollVote id={item._id} name={item.name} /></td>
      <td><PollResult id={item._id} name={item.name} /></td>
    </tr>
    ))
  }

  </tbody>
</Table>
        </div>
    )
}

export default PollTable