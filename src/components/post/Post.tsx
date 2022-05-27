import React from 'react'
import {PostInterFace, Comment} from '../../interfaces/posts'
import { getImgName } from '../../shared/img/getName'

type Props = {
    post:PostInterFace
}

const Post = (data: Props) => {
  return (
    <div className='bg-[#FFFFFF] shadow-sm rounded-lg mb-10 '>
        <div  className=''>
            <figure className='flex  pl-9 pt-9'>
               
                {data.post.user.avatarURL?(<img src={getImgName(data.post.user.avatarURL)} alt='avt' className='rounded-full h-10 w-10 object-cover ' />):(
                    <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                    </div>
                )}
                <div className='ml-4'>
                  <figcaption className=' text-base mb-1'><span className='font-medium'> {data.post.user.username}</span> updated her status</figcaption>  
                </div>   
            </figure>
            <h2 className='pl-9 mt-9 font-normal '>{data.post.contents}</h2>
            <div className='h-[40vh]'></div>
            <div>
                {data.post.comments.map((comment:Comment, index:number)=>
                <div key={index}>
                    <figure className='flex  pl-9 pt-9'>
                       
                            {comment.user.avatarURL?(<img src={getImgName(comment.user.avatarURL)} alt='avt' className='rounded-full h-10 w-10 object-cover ' />):(
                            <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                            </div>
                        )}
                        <div className='ml-4'>
                        <figcaption className=' text-base mb-1'><span className='font-medium'> {comment.user.username}</span></figcaption>
                        <figcaption>{comment.contents}</figcaption>
                        </div>
                    </figure>
                </div>)}
            </div>
        </div>
    </div>
  )
}

export default Post