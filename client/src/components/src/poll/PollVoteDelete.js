import React from 'react'
import {Button} from 'react-bootstrap'
import DeleteIcon from '@material-ui/icons/Delete'
import axios from 'axios'

const PollVoteDelete = (props) => {


    const deleteHandler = () => {
        axios.post(`/poll/deleteVote/${props.id}&${props.vote}`)
        .then(()=> { 
            window.location.reload(false)
        })
        .catch((err)=> {
            alert('Could not delete. Try again later!')
        })
        console.log(props.id)
        console.log(props.vote)
      }
      
    return (
        <div>
            <Button variant='Link' size='sm' onClick={deleteHandler} ><DeleteIcon style={{color: 'red'}}/></Button>    
        </div>
    )
}

export default PollVoteDelete
