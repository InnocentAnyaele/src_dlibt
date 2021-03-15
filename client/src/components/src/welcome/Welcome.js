import React, {useState, useEffect} from 'react'
import '../src.css'
import {Container, Row, Spinner} from 'react-bootstrap'
import WelcomeModal from './WelcomeModal'
import axios from 'axios'
// import {BounceLoader, BarLoader, BeatLoader} from 'react-spinners'

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
        <h1 style={{fontSize: '60px'}} className='text-muted'>Welcome SRC</h1>
        <hr/>
        {/* <p style={{fontSize: '20px'}}> */}
        <Row>
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
            <div>
        <WelcomeModal id={messageData.id} />
        </div>
            </div>
        </article>
         {/* <p  style={{fontSize: '30px'}}> {messageData.message} </p>
         <p className='text-muted' style={{fontSize: '12px'}} > {messageData.date} </p> */}
         </div>
        }

        </Row>
        {/* </p> */}
        </Container> 
        </div>
    
     )
}

export default Welcome


// import React from 'react'
// import sideNav from '../sidebar/SideBar'

// function Welcome() {
//     return (
//         <div className="d-flex flex-row">
//             <div>
//                 <sideNav/>
//             </div>
//             <div>
//                 <h1 className="pt-5" style={{fontSize: '70px'}}>jgvhgkvjjgcvkugvck</h1>
//             </div>
//         </div>
//     )
// }

// export default Welcome
