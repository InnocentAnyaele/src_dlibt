import React, {useState, useEffect} from 'react'
import '../student.css'
import {Container, Row, Spinner} from 'react-bootstrap'
import InfoContent from './InfoContent'
// import InfoSearch from './InfoSearch'
import axios from 'axios'
import Search from '../../src/Search'

const Info = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [query, setQuery] = useState(null)
    
    useEffect(()=> {
        if(query !== null){
            axios.get(`/info/searchInfo/${query}`)
            .then((res)=>{
                setItems(res.data)
                setLoading(false)
            })
        } else {
            axios
            .get('/info/getInfo')
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
        <h1 style={{fontSize: '60px'}} className='text-muted'>Information</h1>
        <hr/>
        <Search query={query} onChange={handleQueryRequest} />
        <Row style={{overflow: "auto", height: "600px"}} className='text-center' > 
        { loading ?
          <div style={{marginLeft: '50%'}}>
          <Spinner animation="border" variant='primary' size='lg' /> 
          </div>
              :
            items.map(item => (
            <InfoContent key={item._id} id={item._id} title={item.title} info={item.info} date={item.createdAt} name={item.name} />
            ))}
        </Row>
        </Container> 
        </div>
    )
}

export default Info
