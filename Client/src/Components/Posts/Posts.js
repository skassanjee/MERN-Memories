import React, {useState} from 'react'
import axios from 'axios'
import Post from '../Post/Post'

const Posts = () => {  

  const [data, setData] = useState([])

  axios.get('/api/posts')
  .then((result) => {
      setData(result.data)
    console.log(data)
  })
  .catch((err) => console.log(err))

  return (
    <div>

      {data.map((post) => (
        <Post location={post.location} />
      ))}
    </div>
  )
}

export default Posts