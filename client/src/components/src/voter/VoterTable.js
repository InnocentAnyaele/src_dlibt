import React, {useState, useEffect} from 'react'
import {Table, Spinner} from 'react-bootstrap'
import axios from 'axios'
import DeleteVoter from './DeleteVoter'

const VoterTable = () => {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

useEffect(() => {
  axios
  .get('/voter/getVoter')
  .then((res)=> {
      setItems(res.data)
      setLoading(false)
console.log(res.data)
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
      <th>Student ID</th>
      {/* <th>Name</th> */}
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
      <td>{item.id}</td>
      {/* <td>{item.name}</td> */}
   <td><DeleteVoter key={item._id} id={item._id} /></td>
    </tr>
    ))
  }
   
  </tbody>
</Table>
        </div>
    )
}

export default VoterTable