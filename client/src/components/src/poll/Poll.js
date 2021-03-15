import React from 'react'
import '../src.css'
import {Container, Row} from 'react-bootstrap'
import PollTable from './PollTable'
import AddPoll from './AddPoll'
import '../../student/poll/Poll.css'

const Poll = () => {

    return(
       <div className="wrapper">
       <Container>
       <Row>
       <h1 style={{fontSize: '60px'}} className='text-muted'>Poll</h1>
           <AddPoll/>
       </Row>
              <hr/>
        <PollTable/>
       </Container> 
       </div>
   
    )
}

export default Poll