import React from 'react'
// import image from '../../../assets/img/img1.jpg'
import {Button, Col, Card, Row} from 'react-bootstrap'
import NewsModal from '../../landing/news/NewsModal'
import axios from 'axios'

const NewsContent = (props) => {

  const deleteHandler = () => {
    axios.delete(`/news/deleteNews/${props.id}`)
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
        <img className="card-img-top" style={{objectFit: "cover", height: "25vh"}} 
        src={require(`../../../assets/news/datalink.png`)} 
        alt="Card"/>
            <div className="card-body">
                <h5 className="card-title"><b>{props.title.substring(0, 40)}</b></h5>
                <div className="card-text">
                {/* <p><a href="#">link</a></p> */}
                {/* <p><Button variant="link">{props.link.substring(0, 20)}</Button></p> */}
                <p><a href={props.link}>{props.link.substring(0,20)}</a></p>
                <p>{props.news.substring(0, 100)}</p>
                </div>
            </div>
            <Row className='mb-2' style={{margin: 'auto auto'}}>
            {/* <NewsModal/> */}
            <NewsModal date={props.date} link={props.link} news={props.news} name={props.name} title={props.title} />
            <Button variant='outline-danger' onClick={deleteHandler} className='mb-2'>Delete</Button>
            </Row>
            </Card>
            </Col>
  )
}

export default NewsContent