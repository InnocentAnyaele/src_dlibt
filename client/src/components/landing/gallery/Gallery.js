import React, {useState, useEffect} from 'react'
import {Container, Row, Spinner} from 'react-bootstrap'
// import { Grid, GridList, GridTile } from '@material-ui/core';
import Images from './Images'
import './Gallery.css'
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

    return (
        <div className="gallery-block cards-gallery text-center" style={{textAlign: "center", height: "relative"}} id="gallery">
            <h1 style={{padding:"40px"}} >Gallery</h1>
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
    )
}

export default Gallery
