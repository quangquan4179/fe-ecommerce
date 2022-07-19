import React, { useEffect, useState } from 'react'
import { PostInterFace } from '../../interfaces/posts'
import { getAllPost } from '../../services/api/PostService'
import CreatePost from '../post/CreatePost'
import Post from '../post/Post'

type Props = {}

const OverView = () => {
  const [posts, setPosts] = useState<PostInterFace[]>([])


  useEffect(()=>{
    getAllPost().then(
      response=>setPosts(response.posts)
    )
  },[])
  return (
    <div className='w-full'>
      <div>
        Company Blog
      </div>
      {/* <div className='w-[60%] m-auto '>
         <CreatePost/>
         {posts.map((post:PostInterFace,index:number)=><Post post={post} key={index}/>)}
      </div> */}
    </div>
  )
}

export default OverView