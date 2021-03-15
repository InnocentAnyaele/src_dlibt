import React, {useState, useEffect} from 'react'
import {Table, Spinner} from 'react-bootstrap'
// import DeleteIcon from '@material-ui/icons/Delete'
import axios from 'axios'
import DeleteMessage from './DeleteMessage'

const MessageTable = () => {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

useEffect(() => {
  axios
  .get('/message/getMessage')
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
      <th>Name</th>
      <th>Id</th>
      <th>Level</th>
      <th>Contact</th>
      <th>Message</th>
      <th>Date</th>
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
      <td>{item.id}</td>
      <td>{item.level}</td>
      <td>{item.contact}</td>
      <td>{item.message}</td>
      <td>{item.createdAt}</td>
      {/* <td><Button variant='Link' size='sm'><DeleteIcon style={{color: 'red'}}/></Button></td> */}
   <td><DeleteMessage key={item._id} id={item._id} /></td>
    </tr>
  
    ))
  }
   
  </tbody>
</Table>
        </div>
    )
}

export default MessageTable