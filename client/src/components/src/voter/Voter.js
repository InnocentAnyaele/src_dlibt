import React from 'react'
import '../src.css'
import {Container, Row} from 'react-bootstrap'
import VoterTable from './VoterTable'
import AddVoter from './AddVoter'
// import '../../student/poll/Poll.css'

const Voter = () => {

    return(
       <div className="wrapper">
       <Container>
       <Row>
       <h1 style={{fontSize: '60px'}} className='text-muted'>Student</h1>
           <AddVoter/>
       </Row>
              <hr/>
        <VoterTable/>
       </Container> 
       </div>
   
    )
}

export default Voter