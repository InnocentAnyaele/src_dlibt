import React from 'react'
import '../src.css'
import {Container} from 'react-bootstrap'
import MessageTable from './MessageTable'

const Message = () => {

    return(
       <div className="wrapper">
       <Container>

       <h1 style={{fontSize: '60px'}} className='text-muted'>Messages</h1>
              <hr/>
        <MessageTable/>
       </Container> 

       </div>
   
    )
}

export default Message