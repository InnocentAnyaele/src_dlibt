import React from 'react'
// import image from '../../../assets/img/img1.jpg'
import {Col, Button} from 'react-bootstrap'
import axios from 'axios'
import {storage} from '../../../firebase/firebase'


const Images = (props) => {


   const deleteHandler = () => {

        axios.delete(`/gallery/deleteGallery/${props.id}&${props.image}`)
        .then(()=> {
            const deleteRef = storage.ref().child(`gallery/${props.image}`)
            deleteRef.delete().then(function() {
            window.location.reload(false)
                }).catch(function(error) {
                    alert('Could not delete. Try again later!')
                });
        })
        .catch(()=> {
            alert('Could not delete. Try again later!')
        })
    }

        return (
            <Col md={6} lg={4}>
{/* {
    props.loading ? 
    <Spinner animation="border" variant='primary'/> 
    : */}

    <div key={props.id} className="card border-0 transform-on-hover" style={{transition: "0.4s ease", boxShadow:"0px 2px 10px rgba(0,0,0,0.15)", marginBottom: "30px"}}>
                {/* <a className="lightbox" href={require(`../../../assets/gallery/${props.image}`)}> */}
                <a className="lightbox" href={props.url}>
                <img src={props.url} alt="" className="card-img-top"/>
                    {/* <img src={require(`../../../assets/gallery/${props.image}`)} alt="" className="card-img-top"/> */}
                </a>
                <div className="card-body" style={{textAlign: "center"}}>
                    <p className="text-muted card-text">{props.title}</p>
                </div>
                <div className='card-footer'>
                    <Button variant='outline-danger' onClick={deleteHandler} >Delete</Button>
                </div>
            </div>

{/* } */}
            </Col>
        
        // items.map(item => (
        //     <div key={item._id} className="card border-0 transform-on-hover" style={{transition: "0.4s ease", boxShadow:"0px 2px 10px rgba(0,0,0,0.15)", marginBottom: "30px"}}>
        //         <a className="lightbox" href={require(`../../../assets/gallery/${item.file}`)}>
        //             <img src={require(`../../../assets/gallery/${item.file}`)} alt="" className="card-img-top"/>
        //         </a>
        //         <div className="card-body" style={{textAlign: "center"}}>
        //             <p className="text-muted card-text">{item.title}</p>
        //         </div>
        //         <div className='card-footer'>
        //             <Button variant='danger'>Delete</Button>
        //         </div>
        //     </div>
        // )

        
        
        
    
        
            )
    }

export default Images