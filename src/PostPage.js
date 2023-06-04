import React from 'react'
import { useParams } from 'react-router-dom'

const PostPage = ({posts,handleDelete}) => {
  const {id}=useParams();
  const post=posts.find(post=>(post.id).toString()===id)
  return (
  

    <main className='PostPage'>
    <article className='Post'>
    {
      post && <>
      <h2>{post.title}</h2>
      <p className='postDate'>{post.dateTime}</p>
      <p className='postBody'>{post.body}</p>

      <button onClick={()=>{handleDelete(post.id)}}>Delete Post</button>
      
      </>
    }
    
    </article>

   
    </main>
  )
}

export default PostPage
