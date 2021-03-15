import React, {useState, useEffect} from 'react'
import '../student.css'
import NewsContent from '../../landing/news/NewsContent'
import {Container, Row, Spinner} from 'react-bootstrap'
import axios from 'axios'
import Search from '../../src/Search'


const News = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [query, setQuery] = useState(null)

    useEffect(()=> {
        if(query !== null){
            axios.get(`/news/searchNews/${query}`)
            .then((res)=>{
                setItems(res.data)
                setLoading(false)
            })
        } else {
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
        }   
    },[query])

    function handleQueryRequest(data) {
        setQuery(data)
        console.log(query)
    }

    return (
        <div className='wrapper'> 
            <Container>
        <h1 style={{fontSize: '60px'}} className='text-muted'>News</h1>
        <hr/>
        <Search query={query} onChange={handleQueryRequest} />
        <Row style={{overflow: "auto", height: "600px"}} className='text-center' > 
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
