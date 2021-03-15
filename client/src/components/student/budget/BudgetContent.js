import React from 'react'
// import image from '../../../assets/img/file.png'
import {Button, Col, Card} from 'react-bootstrap'

const BudgetContent = (props) => {

  return (
<Col md={6} lg={4}>
    <Card style={{minHeight: "360px", margin:"10px",  boxShadow: '0px 2px 10px rgba(0,0,0,0.15)'}}>
            <div className="card-body">
        <img className="card-img-top" style={{objectFit: "cover"}} src={require('../../../assets/budget/file.png')} alt="Card"/>
                <div className="card-text text-center">
                <p>{props.title.substring(0,80)}</p>
                </div>
            </div>
            <a href={props.url} download={props.title}> <Button variant='outline-primary' className='mb-2' >  Download </Button> </a>
            </Card>
            </Col>
  )
}

export default BudgetContent