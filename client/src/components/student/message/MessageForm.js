import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import './Message.css'
import axios from 'axios'

function MessageForm() {

    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [level, setLevel] = useState('')
    const [message, setMessage] = useState('')
    const [contact, setContact] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/message/addMessage', {name: name, id: id, level: level, message: message, contact: contact} )
            if(res.status === 200){
              setError('Message Added!')
            }
          } catch (err) {
            if(err.response.status === 500) {
              setError( 'Voter already exists')
              // console.log(err) 
            }
            else {
              setError(err.response.data.msg)
              // console.log(err.response.data.msg)
            }
          }
    }

    return (
        <div>
                      <Form className="message-form" onSubmit={submitHandler}>

<Form.Group controlId="formBasicStudentName">
<Form.Control  type="text" placeholder="Student Name" name='name' value={name} onChange={e => setName(e.target.value)} />
</Form.Group>


<Form.Group controlId="formBasicStudentId">
<Form.Control type="text" placeholder="Student ID" name='id' value={id} onChange={e => setId(e.target.value)} required />
</Form.Group>

<Form.Group controlId="formBasicLevel">
<Form.Control type="text" placeholder="Level" name='level' value={level} onChange={e => setLevel(e.target.value)} required/>
</Form.Group>

<Form.Group controlId="exampleForm.ControlTextarea1">
<Form.Control as="textarea" rows="3" placeholder="Message" name='message' value={message} onChange={e => setMessage(e.target.value)} required />
</Form.Group>

<Form.Group controlId="formBasicContact">
<Form.Control type="text" placeholder="Contact" name='contact' value={contact} onChange={e => setContact(e.target.value)} />
</Form.Group>

<p style={{color: 'red'}}><i>{error}</i></p>

<Button variant="primary" type="submit">
Submit
</Button>
</Form>
        </div>
    )
}

export default MessageForm
