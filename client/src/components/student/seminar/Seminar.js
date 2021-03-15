import React, {useState, useEffect} from 'react'
import '../student.css'
import {Container, Row, Spinner} from 'react-bootstrap'
import SeminarContent from './SeminarContent'
import './Seminar.css'
// import SeminarSearch from './SeminarSearch'
import Search from '../../src/Search'
import axios from 'axios'

const Seminar = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [query, setQuery] = useState(null)

    useEffect(()=> {
        if(query !== null){
            axios.get(`/seminar/searchSeminar/${query}`)
            .then((res)=>{
                setItems(res.data)
                setLoading(false)
            })
        } else {
            axios
            .get('/seminar/getSeminar')
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


    return(
        <div className="wrapper">
        <Container>
        <h1 style={{fontSize: '60px'}} className='text-muted'>Seminar</h1>
        <hr/>
        {/* <SeminarSearch onChange={(value) => } /> */}
        <Search query={query} onChange={handleQueryRequest} />
        <div className="gallery-block cards-gallery text-center" style={{textAlign: "center", height: "relative"}} id="gallery">
        <Row style={{overflow: "auto", height: "600px"}} > 
        { loading ?
          <div style={{marginLeft: '50%'}}>
          <Spinner animation="border" variant='primary' size='lg' /> 
          </div>
              :
                items.map(item => (
                    <SeminarContent key={item._id} file={item.file} url={item.url} title={item.title} loading={loading} id={item._id}/>
                ))
        }
        </Row>
        </div>
        </Container> 
        </div>
    )
}

export default Seminar