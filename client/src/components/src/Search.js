import React from 'react'
import {Paper, TextField} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
// import {Row} from 'react-bootstrap'
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from '@material-ui/core/InputAdornment';


const useStyles = makeStyles({
    underline: {
        "&&&:before": {
          borderBottom: "none"
        },
        "&&:after": {
          borderBottom: "none"
        }
      }
})

const Search = (props) => {

  function queryRequest (e) {
    props.onChange(e.target.value)
  }
    const classes = useStyles()
    return (
    <Paper elevation={2} style={{padding: '6px'}} className='mb-3'>
    <form style={{}}>
    <TextField fullWidth label="Search..." InputProps={{classes, endAdornment: (<InputAdornment><SearchIcon/></InputAdornment>) }}
    onChange={queryRequest} value ={props.query} name='query' />
    </form>
</Paper>

    )
}

export default Search
