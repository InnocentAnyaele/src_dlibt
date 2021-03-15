import React from 'react'
// import image from '../../../assets/img/img1.jpg'
import {Col, Card, Row} from 'react-bootstrap'
import ECommerceReadModal from './ECommerceReadModal'
import ECommerceBuyModal from './ECommerceBuyModal'

const ECommerceContent = (props) => {
  return (
<Col md={6} lg={4}>
    <Card style={{minHeight: "450px", margin:"10px",  boxShadow: '0px 2px 10px rgba(0,0,0,0.15)'}}>
        <img className="card-img-top" style={{objectFit: "cover", height: "25vh"}} src={props.url} alt="Card"/>
            <div className="card-body">
            <h3 className="card-title"><b>{props.title.substring(0,40)}</b></h3>
            <div className="card-text">
                <div className='text-center'>
                <p style={{fontSize: '20px'}} className='text-muted'><b>Vendor - </b> {props.name.substring(0,20)}</p>
               <p style={{fontSize: '20px'}} className='text-muted'><b>Price - </b> {props.price.substring(0,20)}</p>
                <p style={{fontSize: '20px'}} className='text-muted'><b>Description - </b> {props.info.substring(0,20)}</p>
                </div>
                </div>
            </div>
            <Row className='mb-2' style={{margin: 'auto auto'}}>
            <ECommerceReadModal id={props.id} name={props.name} url={props.url} title={props.title} price={props.price} email={props.email} phone={props.phone} type={props.type} info={props.info} date={props.date} file={props.file}/>
                <ECommerceBuyModal id={props.id} name={props.name} title={props.title}  price={props.price} url={props.url} email={props.email} phone={props.phone} type={props.type} info={props.info} date={props.date} file={props.file}/>
            </Row>
            </Card>
            </Col>
  )
}

export default ECommerceContent