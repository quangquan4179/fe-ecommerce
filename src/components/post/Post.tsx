import React, { useState } from 'react'
import {PostInterFace} from '../../interfaces/posts'
import { getImgName, getImgPost } from '../../shared/img/getName'
import AuthStore  from '../../stores/Authstore'
import {BsHeart} from 'react-icons/bs'
import {FaRegCommentAlt} from 'react-icons/fa'
import {FcLike} from 'react-icons/fc'
import Comments from '../comments'
import {observer} from 'mobx-react-lite'
import CreateComments from '../comments/CreateComments'
type Props = {
    post:PostInterFace
}

const Post = (data: Props) => {
    const [open,setOpen] =useState<Boolean>(false);
  return (
    <div className='bg-[#FFFFFF] shadow-sm rounded-lg mb-10 '>
        <div  className='last:pb-7'>
            <figure className='flex  pl-9 pt-9'>
               
                {AuthStore.user.avatarURL?(<img src={getImgName(AuthStore.user.avatarURL)} alt='avt' className='rounded-full h-10 w-10 object-cover ' />):(
                    <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                    </div>
                )}
                <div className='ml-4'>
                  <figcaption className=' text-base mb-1'><span className='font-medium'> {AuthStore.user.username}</span> updated her status</figcaption>  
                </div>   
            </figure>
            <h2 className='pl-9 mt-9 font-normal '>{data.post.content}</h2>
            <div className='w-[90%] scroll-smooth border  rounded-lg m-auto'>
               {data.post.images?( <img src={getImgPost(data.post.images)} className='object-cover w-full rounded-lg p-2'/>):''}
            </div>
            <div className='flex '>
                <button className='grow flex justify-center items-center'>
                    <BsHeart size={30}/>
                </button>
                <button className='grow flex justify-center items-center' onClick={()=>(setOpen(!open))}>
                    <FaRegCommentAlt size={25} className={open?('text-[#2440e0]'):('')}/>
                </button>
                
            </div>
            <div className='w-[90%] m-auto'>
                    <CreateComments post={data.post}  />

                    {open?(<Comments post={data.post}/>):('')}
                    
            </div>
        </div>
    </div>
  )
}

export default observer(Post)