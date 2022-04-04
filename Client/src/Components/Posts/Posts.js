import React, {useState} from 'react'
import axios from 'axios'
import Post from '../Post/Post'
import useStyles from './styles';


 


const Posts = () => {  

  const classes = useStyles();

  const [data, setData] = useState([])

  axios.get('/api/posts')
  .then((result) => {
      setData(result.data)
  })
  .catch((err) => console.log(err))

  return (
    
    <div>
      <h1>Posts</h1>
      {data.map((post) => (
        <Post post={post} />
      ))}
    </div>
  )
}

export default Posts