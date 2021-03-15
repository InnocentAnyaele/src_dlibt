import React, {useState} from 'react'
import {Form, Button, Row} from 'react-bootstrap'
import axios from 'axios'



const StudentPasswordForm = () => {

  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [message, setMessage] = useState('')

  const submitHandler = async (e) => {
    e.preventDefault()
    // if (password !== confirmPassword) {
    //   setMessage('Passwords do not match')
    // }
    // else {
      try {
        const res = await axios.patch('/student/changePassword', {newpassword: newPassword, name: name, password: password})
        if (res.status === 200) {
          setMessage('Password Changed')
        }
      }
      catch (err) {
        if(err.response.status === 500 || err.response.status === 400 ) {
          setMessage('Wrong username or password')
        }
      }
    // }
    // console.log(password, confirmPassword)
  }

    return (
        <Form style={{width: '500px'}} onSubmit={submitHandler}>
        <h2>Student Password</h2>
        <Form.Group controlId="formBasicPassword">
    {/* <Form.Label>Old password</Form.Label> */}
    <Form.Control type="name" placeholder="Username" value={name} name='name' onChange={e => setName(e.target.value)} required />
  </Form.Group>
        <Form.Group controlId="formBasicPassword">
    {/* <Form.Label>Old password</Form.Label> */}
    <Form.Control type="password" placeholder="Old password" value={password} name='password' onChange={e => setPassword(e.target.value)} required />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    {/* <Form.Label>Old password</Form.Label> */}
    <Form.Control type="password" placeholder="New password" value={newPassword} name='newPassword' onChange={e => setNewPassword(e.target.value)} required />
  </Form.Group>
  <p style={{color: 'red'}}><i>{message}</i></p>
<Row>
<Button variant="primary" type="submit" className='mx-3'>
    Reset Student password
  </Button>
</Row>

</Form>
    )
}

export default StudentPasswordForm
