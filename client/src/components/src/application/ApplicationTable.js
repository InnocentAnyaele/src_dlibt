import React, {useState, useEffect} from 'react'
import {Table, Spinner} from 'react-bootstrap'
import axios from 'axios'
import DeleteApplication from './DeleteApplication'

const ApplicationTable = () => {
    
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('/application/getApplication')
        .then((res) => {
            setItems(res.data)
            setLoading(false)
            console.log(res.data)
        })
        .catch(() => {
            setLoading(false)
            alert('Error retrieving data')
        })
    }, [])


    return (
        <div>
            <Table striped>
                <thead style={{color: 'blue'}}>
                    <tr>
                        <th>Photo</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Position</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Reference</th>
                        <th>Date</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loading ?
                    <div className="m-3">
                        <Spinner animation='border' variant='primary' size='lg' />
                    </div>
                    :
                    items.map(item => (
                        <tr key ={item._id}>
                            {/* <td>{item.file}</td> */}
                            <td><a className="lightbox" href={item.url}> <img src={item.url} alt="" className="card-img-top"/></a></td>
                            {/* <td><img className="card-img-top" src={require(`../../../assets/application/${item.file}`)} alt="Card"/></td> */}
                            <td>{item.ID}</td>
                            <td>{item.name}</td>
                            <td>{item.department}</td>
                            <td>{item.position}</td>
                            <td>{item.contact}</td>
                            <td>{item.email}</td>
                            <td>{item.reference}</td>
                            <td>{item.createdAt}</td>
                            <td><DeleteApplication key={item._id} id={item._id} file={item.file}/></td>
                        </tr>
                    ))
                    }
                </tbody>
            </Table>
        </div>
    )}
    
export default ApplicationTable