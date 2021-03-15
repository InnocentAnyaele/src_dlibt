import React from 'react'
// import image from '../../../assets/img/img1.jpg'
import {Button, Col, Card} from 'react-bootstrap'
import NewsModal from './NewsModal'

const NewsContent = (props) => {
  return (
<Col md={6} lg={4}>
<Card style={{minHeight: "500px", margin:"10px",  boxShadow: '0px 2px 10px rgba(0,0,0,0.15)'}}>
        <img className="card-img-top" style={{objectFit: "cover", height: "25vh"}} 
        src={require(`../../../assets/news/datalink.png`)} 
        alt="Card"/>
            <div className="card-body">
                <h5 className="card-title"><b>{props.title.substring(0, 40)}</b></h5>
                <div className="card-text">
                {/* <p><a href="#">link</a></p> */}
                <p><Button variant="link">{props.link.substring(0, 20)}</Button></p>
                <p>{props.news.substring(0, 100)}</p>
                </div>
            </div>
            <NewsModal date={props.date} link={props.link} news={props.news} name={props.name} title={props.title} />
            </Card>
            </Col>
  )
}

export default NewsContent