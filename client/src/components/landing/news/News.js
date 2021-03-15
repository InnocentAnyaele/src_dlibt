import React, {useState, useEffect} from 'react'
import {Container, Row, Spinner} from 'react-bootstrap'
import NewsContent from './NewsContent'
import axios from 'axios'
import './News.css'


const News = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
    
            axios
            .get('/news/getNews')
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
        <div className="news text-center" id="news">
            <h2 style={{padding:"40px"}} >News</h2>
            <Container> 
                <Row style={{overflow: "auto", height: "600px"}} > 
                { loading ?
          <div style={{marginLeft: '50%'}}>
          <Spinner animation="border" variant='primary' size='lg' /> 
          </div>
              :
            items.map(item => (
                <NewsContent key={item._id} id={item._id} date={item.createdAt} link={item.link} news={item.news} name={item.name} title={item.title} />
            ))
            }
                </Row>
            </Container>
        </div>
    )
}

export default News