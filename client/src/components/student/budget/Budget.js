import React, {useState, useEffect} from 'react'
import '../student.css'
import { Container, Row, Spinner } from 'react-bootstrap'
// import BudgetSearch from './BudgetSearch'
import BudgetContent from './BudgetContent'
import axios from 'axios'
import Search from '../../src/Search'

const Budget = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [query, setQuery] = useState(null)

    useEffect(()=> {
        if(query !== null){
            axios.get(`/budget/searchBudget/${query}`)
            .then((res)=>{
                setItems(res.data)
                setLoading(false)
            })
        } else {
            axios
            .get('/budget/getBudget')
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
        <h1 style={{fontSize: '60px'}} className='text-muted'>Budget</h1>
        <hr/>
               <Search query={query} onChange={handleQueryRequest} />
        <Row style={{overflow: "auto", height: "600px"}} className='text-center' > 
        { loading ?
          <div style={{marginLeft: '50%'}}>
          <Spinner animation="border" variant='primary' size='lg' /> 
          </div>
              :
            items.map(item => (
        <BudgetContent key={items._id} date={item.createdAt} id={item._id} url={item.url} title={item.title} file={item.file} />
        ))}
        </Row>
        </Container>
        </div>
    )
}

export default Budget
