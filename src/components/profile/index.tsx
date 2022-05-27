import React,{useEffect} from 'react'
import UserStore from '../../stores/UserStore'

import { observer} from 'mobx-react-lite'
import {IoBagCheckSharp, IoSchoolOutline} from 'react-icons/io5'
import { AiFillHome } from 'react-icons/ai'
import {GrMail} from 'react-icons/gr'
import Authstore from '../../stores/Authstore'
import Post from '../post/Post'
import { getImgName } from '../../shared/img/getName'
import CreatePost from '../post/CreatePost'
// import { PostInterFace } from '../../interfaces/posts'

type Props = {}

const Profile = (props: Props) => {


  useEffect(()=>{

    const userId =localStorage.getItem('userId');
    if(userId){
      UserStore.getUser(userId )
      UserStore.getAllPosts(userId)
    }
    

  },[])

  
  return (
    <div className='mx-9 my-9'>
      
      <div className='mx-36'>
       <div>
        <img src='/imgs/cover_1.jpg' alt='' className='w-full object-cover h-96 rounded-lg'></img>

       </div>
        <div className='mt-5'>
            <figure className='flex'>
              
            {Authstore.user.avatarURL?(<img src={getImgName(Authstore.user?.avatarURL)} alt='avt' className='rounded-full h-10 w-10 object-cover ' />):(
                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                   <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                </div>
              )}
                
                <div className='ml-4'>
                  <figcaption className='font-medium text-4xl mb-1'>{UserStore.user?.username}</figcaption>
                  <figcaption >user_Id: <span className='bg-[#E5E7EB] rounded-lg font-normal'>{UserStore.user?.userId}</span></figcaption>
                </div>
            </figure>
      </div>
      <div className=' grid grid-cols-3 mt-7 gap-16'>
        <div className='col-span-1'>

          <div className='bg-[#FFFFFF] shadow-sm rounded-lg divide-y'>
            <h2 className='p-12 font-medium'>About </h2>
            <div >
              <h3 className='italic text-[#6A748B] text-center p-6'>"Everyone thinks of changing the world, but no one thinks of changing himself"</h3>
             <div className='divide-y'>
             <div className='py-3 flex  items-center'>
                <IoBagCheckSharp className=' fill-[#6B7280] ml-4'/>
                <p className='ml-14'>Product Designer at Devias IO</p>
              </div>
              <div className='py-3 flex  items-center'>
                <IoSchoolOutline className=' fill-[#6B7280] ml-4'/>
                <p className='ml-14'>Product Designer at Devias IO</p>
              </div>
              <div className='py-3 flex  items-center'>
                <AiFillHome className=' fill-[#6B7280] ml-4'/>
                <p className='ml-14'>Product Designer at Devias IO</p>
              </div>
              <div className='py-3 flex  items-center'>
                <GrMail className=' fill-[#6B7280] ml-4'/>
                <p className='ml-14'>{Authstore.user?.personalEmail}</p>
              </div>
             </div>
            </div>
          </div>
        </div>
        <div className='col-span-2'>
          <CreatePost/>
          {UserStore.posts.map((post:any,index:number)=>(
            <Post post={post} key={index}/>
          )
          )}
        </div>

      </div>
      </div>
     
    </div>
  )
}
export default observer(Profile)