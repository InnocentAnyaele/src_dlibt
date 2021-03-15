import React from 'react'
import '../student.css'
import {Container} from 'react-bootstrap'
// import axios from 'axios'
import ApplicationForm from './ApplicationForm'
import './Application.css'


const Application = () => {
    return (
        <div className="wrapper">
            <Container>
                <h1 style={{fontSize: '60px', fontFamily: "'Montserrat', sans-serif"}} className="text-muted">SRC Applcations</h1>
                <hr/>
                <ApplicationForm/>
            </Container>
        </div>
    )
}

export default Application
