import React from 'react'
import '../src.css'
import {Container} from 'react-bootstrap'
import SrcPasswordForm from './SrcPasswordForm'
// import StudentPasswordForm from './StudentPasswordForm'

const Welcome = () => {
    return(
        <div className="wrapper">
        <Container>
        <h1 style={{fontSize: '60px'}} className='text-muted'>Reset SRC password</h1>
        <hr/>

      <SrcPasswordForm/>
      {/* <StudentPasswordForm/> */}
        </Container> 
        </div>
    
     )
}

export default Welcome
