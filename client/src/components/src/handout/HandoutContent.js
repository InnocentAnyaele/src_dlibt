import React from 'react'
// import image from '../../../assets/img/file.png'
import {Button, Col, Card, Row} from 'react-bootstrap'
import axios from 'axios'
import {storage} from '../../../firebase/firebase'

const HandoutContent = (props) => {

  const deleteHandler = () => {
    axios.delete(`/handout/deleteHandout/${props.id}&${props.file}`)
    // axios.delete(`/budget/deleteBudget/${props.id}`)
    .then(()=> { 
      const deleteRef = storage.ref().child(`handout/${props.file}`)
      deleteRef.delete().then(function() {
        window.location.reload(false)
      }).catch(function(error) {
        alert('Could not delete. Try again later!')
      })
    })
    .catch(()=> {
        alert('Could not delete. Try again later!')
    })
    console.log(props.id)
    console.log(props.file)
}

  return (
<Col md={6} lg={4}>
    <Card style={{minHeight: "360px", margin:"10px",  boxShadow: '0px 2px 10px rgba(0,0,0,0.15)'}}>
            <div className="card-body">
        <img className="card-img-top" style={{objectFit: "cover"}} src={require('../../../assets/handout/file.png')} alt="Card"/>
                <div className="card-text text-center">
                <p>{props.title.substring(0,80)}</p>
                </div>
            </div>
<Row className='mb-2' style={{margin: 'auto auto'}}>
<a href={props.url} download={props.title}> <Button variant='outline-primary' className='mr-2' >  Download </Button> </a>
<Button variant='outline-danger' onClick={deleteHandler}>Delete</Button>
</Row>
            </Card>
            </Col>
  )
}

export default HandoutContent