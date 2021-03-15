import React, {useState, useEffect} from 'react'
import '../src.css'
import { Container, Row, Spinner} from 'react-bootstrap'
// import HandoutSearch from '../../student/handout/HandoutSearch'
import HandoutContent from './HandoutContent'
import HandoutAdd from './HandoutAdd'
import Search from '../Search'
import axios from 'axios'

const Handout = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [query, setQuery] = useState(null)

    useEffect(()=> {
        if(query !== null){
            axios.get(`/handout/searchHandout/${query}`)
            .then((res)=>{
                setItems(res.data)
                setLoading(false)
            })
        } else {
            axios
            .get('/handout/getHandout')
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
        <div className="wrapper">
        <Container>
        <Row>
        <h1 style={{fontSize: '60px'}} className='text-muted'>Handout</h1>
<HandoutAdd/>
        </Row>
        <hr/>
        <Search query={query} onChange={handleQueryRequest} />
        <Row style={{overflow: "auto", height: "600px"}} className='text-center' > 
        { loading ?
          <div style={{marginLeft: '50%'}}>
          <Spinner animation="border" variant='primary' size='lg' /> 
          </div>
              :
            items.map(item => (
        <HandoutContent key={item._id} date={item.createdAt} url={item.url} id={item._id} title={item.title} file={item.file}  />
        ))}
        </Row>
        </Container>
        </div>
    )
}

export default Handout
