import React from 'react'
import '../student.css'
import {Container} from 'react-bootstrap'
import MessageForm from './MessageForm'

const Message = () => {

    return(
       <div className="wrapper">
       <Container>
       <h1 style={{fontSize: '60px'}} className='text-muted'>Send the SRC a message!</h1>
       <hr/>
        <MessageForm/>
       </Container> 
       </div>
   
    )
}

export default Message