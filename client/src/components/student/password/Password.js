import React from 'react'
import '../student.css'
import {Container} from 'react-bootstrap'
import StudentPasswordForm from './StudentPasswordForm'
// import StudentPasswordForm from './StudentPasswordForm'

const Password = () => {
    return(
        <div className="wrapper">
        <Container>
        <h1 style={{fontSize: '60px'}} className='text-muted'>Reset Student Password</h1>
        <hr/>

      <StudentPasswordForm/>
      {/* <StudentPasswordForm/> */}
        </Container> 
        </div>
    
     )
}

export default Password
