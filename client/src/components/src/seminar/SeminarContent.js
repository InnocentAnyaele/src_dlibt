import React from 'react'
// import video from '../../../assets/img/vid.mkv'
import { Card, Col, Button, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload} from "@fortawesome/free-solid-svg-icons";
import DeleteIcon from '@material-ui/icons/Delete'
import axios from 'axios'
import {storage} from '../../../firebase/firebase'


const SeminarContent = (props) => {

    const deleteHandler = () => {
        axios.delete(`/seminar/deleteSeminar/${props.id}&${props.file}`)
        .then(()=> { 
            const deleteRef = storage.ref().child(`seminar/${props.file}`)
            deleteRef.delete().then(function() {
                window.location.reload(false)
            }).catch(function(error) {
                alert('Could not delete. Try again later!')
            })
        })
        .catch(()=> {
            alert('Could not delete. Try again later!')
        })
        // console.log(props.id)
    }
    return(
        <Col md={6} lg={4}>
        <Card key={props.id} className='border-0 transform-on-hover' style={{transition: '0.4s ease', boxShadow: '0px 2px 10px rgba(0,0,0,0.15)', marginBottom: '30px'}}>
        <div>
            <video controls preload='none' style={{objectFit: 'cover', height: '30vh', width: '100%'}}>
                <source src={props.url}></source>
            </video>
        </div>
  <Card.Body style={{textAlign: 'center'}}>
  <p className="text-muted card-text">{props.title}</p>
  </Card.Body>
  {/* <Card.Footer> */}
  <Row style={{margin: 'auto auto'}}>
  {/* <Button variant='primary' className='mr-2' onClick={downloadHandler}><FontAwesomeIcon icon={faDownload} /> Download</Button> */}
  <a href={props.url} download={props.title}> <Button variant='primary' className='m-2' > <FontAwesomeIcon icon={faDownload} />  </Button> </a>
      <Button variant='danger' onClick={deleteHandler} className='m-2' ><DeleteIcon/> </Button>
</Row>
  {/* </Card.Footer> */}
</Card>
            </Col>



    )
}


export default SeminarContent