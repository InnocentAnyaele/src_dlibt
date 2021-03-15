import React from 'react'
import video from '../../../assets/img/vid.mkv'
import { Card, Col, Button } from 'react-bootstrap'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDownload} from "@fortawesome/free-solid-svg-icons";



const SeminarContent = (props) => {
    return(
        <Col md={6} lg={4}>
        <Card className='border-0 transform-on-hover' style={{transition: '0.4s ease', boxShadow: '0px 2px 10px rgba(0,0,0,0.15)', marginBottom: '30px'}}>
        <div>
            <video controls preload='none' style={{objectFit: 'cover', height: '30vh', width: '100%'}}>
                <source src={props.url}></source>
            </video>
        </div>
  <Card.Body style={{textAlign: 'center'}}>
  <p className="text-muted card-text">{props.title}</p>
  </Card.Body>
  <Card.Footer>
      <Button variant='outline-primary'>
      {/* <FontAwesomeIcon icon={faDownload} /> */}
       Download</Button>
  </Card.Footer>
</Card>
            </Col>



    )
}


export default SeminarContent