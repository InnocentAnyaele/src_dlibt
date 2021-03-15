import React, {useState, useEffect} from 'react'
import '../src.css'
import { Container, Row, Spinner, Button } from 'react-bootstrap'
// import ECommerceSearch from '../../student/e-commerce/ECommerceSearch'
import ECommerceContent from './ECommerceContent'
import ECommerceAdd from '../../student/e-commerce/ECommerceAdd'
import Search from '../Search'
import axios from 'axios'

const ECommerce = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [query, setQuery] = useState(null)

    useEffect(()=> {
        if(query !== null){
            axios.get(`/ecommerce/searchEcommerce/${query}`)
            .then((res)=>{
                setItems(res.data)
                setLoading(false)
            })
        } else {
            axios
            .get('/ecommerce/getEcommerce')
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

    const productHandler = () => {
        const type = 'product'
        axios.get(`/ecommerce/typeEcommerce/${type}`)
        .then((res)=>{
            setItems(res.data)
            setLoading(false)
        })
        .catch(()=> {
            setLoading(false)
            alert('Error retrieving data')
        })
    }

    const advertisementHandler = () => {
        const type = 'advertisement'
        axios.get(`/ecommerce/typeEcommerce/${type}`)
        .then((res)=>{
            setItems(res.data)
            setLoading(false)
        })
        .catch(()=> {
            setLoading(false)
            alert('Error retrieving data')
        })
    }

    return (
        <div className='wrapper'> 
        <Container>
        <Row>
        <h1 style={{fontSize: '60px'}} className='text-muted'>E-Commerce</h1>
        <ECommerceAdd/>
        </Row>
    <hr/>
    <Search query={query} onChange={handleQueryRequest} />
    <div className="mt-3">
    <Button variant='info' className='m-2' onClick={productHandler}>#product</Button>
    <Button variant='info' className='m-2' onClick={advertisementHandler}>#advertisement</Button>
    </div>
    <Row style={{overflow: "auto", height: "600px"}} className='text-center' > 
    { loading ?
          <div style={{marginLeft: '50%'}}>
          <Spinner animation="border" variant='primary' size='lg' /> 
          </div>
              :
            items.map(item => (
        <ECommerceContent key={item._id} id={item._id} url={item.url} name={item.name} title={item.title} price={item.price} email={item.email} phone={item.phone} type={item.type} info={item.info} date={item.createdAt} file={item.file} />
            ))}
        </Row>
        </Container>
        </div>
    )
}

export default ECommerce
