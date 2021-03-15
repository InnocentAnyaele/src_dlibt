import React from 'react'
// import image from '../../../assets/img/img1.jpg'
import {Col, Card, Row, Button} from 'react-bootstrap'
import InfoModal from '../../student/information/InfoModal'
import axios from 'axios'


const InfoContent = (props) => {

    const deleteHandler = () => {
        axios.delete(`/info/deleteInfo/${props.id}`)
        .then(()=> { 
            window.location.reload(false)
        })
        .catch(()=> {
            alert('Could not delete. Try again later!')
        })
        console.log(props.id)
    }

    return (
<Col md={6} lg={4}>
    <Card style={{minHeight: "450px", margin:"10px",  boxShadow: '0px 2px 10px rgba(0,0,0,0.15)'}}>
        <img className="card-img-top" style={{objectFit: "cover", height: "25vh"}} src={require(`../../../assets/info/datalink.png`)} alt="Card"/>
            <div className="card-body">
                <h5 className="card-title"><b>{props.title.substring(0, 40)}</b></h5>
                <div className="card-text">
                <p>{props.info.substring(0, 100)}</p>
                </div>
               {/* <NewsModal/> */}
            </div>
            <Row  style={{margin: 'auto auto'}}>
            <InfoModal date={props.date} name={props.name} id={props.id} info={props.info} title={props.title} />
            <Button variant='outline-danger' onClick={deleteHandler} className='mb-2'>Delete</Button>
</Row>
            </Card>
            </Col>
    )
}

export default InfoContent