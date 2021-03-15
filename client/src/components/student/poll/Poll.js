import React from 'react'
import '../student.css'
import {Container} from 'react-bootstrap'
import PollTable from './PollTable'
import './Poll.css'

const Poll = () => {

    return(
       <div className="wrapper">
       <Container>
       <h1 style={{fontSize: '60px'}} className='text-muted'>Poll</h1>
       <hr/>
        <PollTable/>
       </Container> 
       </div>
   
    )
}

export default Poll