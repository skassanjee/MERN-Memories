import React, {useState} from 'react'
import axios from 'axios'
import Post from '../Post/Post'
import useStyles from './styles';
import { Grid, CircularProgress } from '@material-ui/core';


 


const Posts = () => {  

  const classes = useStyles();

  const [data, setData] = useState([])

  axios.get('/api/posts')
  .then((result) => {
      setData(result.data)
  })
  .catch((err) => console.log(err))

  return (
    !data.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {data.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post}  />
          </Grid>
        ))}
      </Grid>
  )
  )
}

export default Posts