import React, {useState, useEffect} from 'react'
import '../student.css'
import {Container, Spinner} from 'react-bootstrap'
import axios from 'axios'
import './Welcome.css'

const Welcome = () => {

    const [messageData, setMessageData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('/welcome/getMessage')
        .then(res => {
            console.log(res.data)
            setMessageData(res.data)
            setLoading(false)
        })
    },[])

    return(
       <div className="wrapper">
       <Container>
       <h1 style={{fontSize: '60px'}} className='text-muted'>Welcome Student</h1>
       <hr/>
        {loading ?
        <div className='ml-5'>
        <Spinner animation="border" variant='primary'/>
        </div>

         : 
         <div className='ml-5'>
         <article class="message is-link">
            <div class="message-body">
            <p style={{fontSize: '15px'}}>{messageData.message}</p>
            <p className='text-muted' style={{fontSize: '12px'}}>{messageData.date}</p>
            </div>
        </article>
         {/* <p style={{fontSize: '30px'}}> {messageData.message} </p>
         <p className='text-muted' style={{fontSize: '12px'}} > {messageData.date} </p> */}
         </div>
        }
       </Container> 
       </div>
   
    )
}

export default Welcome