import React, {useState, useEffect} from 'react'
import '../student.css'
import '../../landing/gallery/Gallery.css'
import {Container, Row, Spinner} from 'react-bootstrap'
import Images from '../../landing/gallery/Images'
import axios from 'axios'

const Gallery = () => {

  const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        axios
        .get('/gallery/getGallery')
        .then((res)=> {
            setItems(res.data)
            setLoading(false)
        })
        .catch(()=> {
            setLoading(false)
            alert('Error retrieving data')
        })
    },[])

    return(
       <div className="wrapper">
       <Container>
       <h1 style={{fontSize: '60px'}} className='text-muted'>Gallery</h1>
       <hr/>
       <div className="gallery-block cards-gallery text-center" style={{textAlign: "center", height: "relative"}} id="gallery">
            <Container>
          <Row style={{overflow: "auto", height: "600px"}}>
          { loading ?
          <div style={{marginLeft: '50%'}}>
          <Spinner animation="border" variant='primary' size='lg' /> 
          </div>
              :
              items.map(item => (
              <Images key={item._id} image={item.file} url={item.url} title={item.title} loading={loading} id={item._id} />
              ))
          }
          </Row>
          </Container>
        </div>
       </Container> 
       </div>
   
    )
}

export default Gallery