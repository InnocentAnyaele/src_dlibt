import React from 'react'
// import image from '../../../assets/img/img1.jpg'
import {Col, Card} from 'react-bootstrap'
import InfoModal from './InfoModal'

const InfoContent = (props) => {
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
            <InfoModal date={props.date} name={props.name} id={props.id} info={props.info} title={props.title} />
            </Card>
            </Col>
    )
}

export default InfoContent