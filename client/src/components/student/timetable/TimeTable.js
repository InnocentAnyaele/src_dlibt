import React, {useState, useEffect} from 'react'
import '../student.css'
import { Container, Row, Spinner } from 'react-bootstrap'
// import TimeTableSearch from './TimeTableSearch'
import TimeTableContent from './TimeTableContent'
import axios from 'axios'
import Search from '../../src/Search'

const TimeTable = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [query, setQuery] = useState(null)

    useEffect(()=> {
        if(query !== null){
            axios.get(`/timetable/searchTimetable/${query}`)
            .then((res)=>{
                setItems(res.data)
                setLoading(false)
            })
        } else {
            axios
            .get('/timetable/getTimetable')
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
        <h1 style={{fontSize: '60px'}} className='text-muted'>TimeTable</h1>
        <hr/>
                <Search query={query} onChange={handleQueryRequest} />
        <Row style={{overflow: "auto"}} className='text-center' > 
        { loading ?
          <div style={{marginLeft: '50%'}}>
          <Spinner animation="border" variant='primary' size='lg' /> 
          </div>
              :
            items.map(item => (
<TimeTableContent key={item._id} date={item.createdAt} id={item._id} title={item.title} url={item.url} file={item.file} />
))}  
        </Row>
        </Container>
        </div>
    )
}

export default TimeTable
