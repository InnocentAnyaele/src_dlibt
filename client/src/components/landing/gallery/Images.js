import React from 'react'
import {Col} from 'react-bootstrap'
// import image from '../../../assets/img/img1.jpg'

const Images = (props) => {
    return (

    <Col md={6} lg={4}>
        <div key={props.id} className="card border-0 transform-on-hover" style={{transition: "0.4s ease", boxShadow:"0px 2px 10px rgba(0,0,0,0.15)", marginBottom: "30px"}}>
            {/* <a className="lightbox" href={require(`../../../assets/gallery/${props.image}`)}> */}
            <a className="lightbox" href={props.url}>
            <img src={props.url} alt="" className="card-img-top"/>
                {/* <img src={require(`../../../assets/gallery/${props.image}`)} alt="" className="card-img-top"/> */}
            </a>
            <div className="card-body" style={{textAlign: "center"}}>
                <p className="text-muted card-text">{props.title}</p>
            </div>
        </div>
    </Col>
    )
}

export default Images