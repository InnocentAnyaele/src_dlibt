import React from 'react'
import '../src.css'
import {Container} from 'react-bootstrap'
import ApplicationTable from './ApplicationTable'


const Application = () => {

    return(
        <div className="wrapper">
            <Container>
                <h1 style={{fontsize: '60px'}} className='text-muted'>Applications</h1>
                <hr/>
                <ApplicationTable/>
            </Container>
        </div>
    )
}

export default Application 