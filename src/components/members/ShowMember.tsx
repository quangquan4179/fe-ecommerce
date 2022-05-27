import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react'
import { Link, useParams} from 'react-router-dom'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi';
import UserStore from '../../stores/UserStore';
import { DateToView } from '../../shared/date-time/DateToView';
import { getImgName } from '../../shared/img/getName';
import Authstore from '../../stores/Authstore';
const ShowMember = () => {
  const {id} = useParams();
  useEffect(()=>{
    if(id){
      UserStore.getUser(id )
    }
  },[id])

  const positionSwitch=(num:number|undefined)=>{
    if(num===7){
      return 'Admin'
    }
    if(num===8){
      return 'Employee'
    }
    if(num===9){
      return 'Leader'
    }
  }
  return (
    <div>
      <div className='mx-auto w-[55%] mt-10'>
        <div className='sideback'>
          <Link to='/dashboard/members' className='flex items-center hover:text-[#5048E5]' > 
            <AiOutlineArrowLeft/>
            <h4 className='ml-3 font-medium '>Members</h4>
          </Link>
        </div>
      <div className='mt-7 flex justify-between'>
          
          <figure className='flex'>
          {UserStore.user?.avatarURL?(<img src={getImgName(Authstore.user.avatarURL)} alt='avt' className='rounded-full h-10 w-10 object-cover ' />):(
                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                   <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                </div>
              )}
            <div className='ml-4'>
               <figcaption className='font-medium text-4xl mb-1'>{UserStore.user?.username}</figcaption>
               <figcaption >user_Id: <span className='bg-[#E5E7EB] rounded-lg font-normal'>{UserStore.user?.userId}</span></figcaption>
            </div>
          </figure>

          <div >
              <Link to={`/dashboard/members/${id}/edit`}>
                <button className='bg-[#5048E5] text-[#FFFFFF] font-bold mr-4 w-12 pt-2 pb-2 rounded-lg'>
                   <FiEdit className='w-full' />
                </button>
                </Link>
          </div>
      </div>
      <div className='mt-7 divide-y'>
        <h2 className='my-4 text-[#5048E5] font-medium'>Details</h2>
        <div className='bg-[#FFFFFF] w-full shadow-sm rounded-lg divide-y'>
            <h3 className='py-4 pl-5 font-medium text-lg'>Basic Details</h3>
            <div className='divide-y ' >
                <div className='py-4 pl-5 text-justify flex w-full '>
                  <span className={` inline-block  after:content-[':'] w-[40%] `}> Name</span> 
                  <p className=' block w-full '>{UserStore.user?.username}</p>
                </div>
                <div className='py-4 pl-5  flex w-full'>
                    <span className={` block after:content-[':'] w-[40%]`}>Email</span> 
                    <p className=' block w-full'>{UserStore.user?.personalEmail}</p>
                </div>
                <div className='py-4 pl-5 flex w-full'>
                    <span className={` block after:content-[':'] w-[40%]`}>Location</span> 
                    <p className=' block w-full'>{UserStore.user?.location}</p>
                </div>
                <div className='py-4 pl-5 flex w-full'> 
                    <span className={` block after:content-[':'] w-[40%]`}>Date of Birth</span> 
                    <p className=' block w-full'>{DateToView(UserStore.user?.dateOfBirth)}</p>
                </div>
                <div className='py-4 pl-5 flex w-full'>
                    <span className={` block after:content-[':'] w-[40%]`}> Date at work</span>
                    <p className=' block w-full'>{DateToView(UserStore.user?.dateAtWork)}</p>
                </div>
                <div className='py-4 pl-5 flex w-full'>
                    <span className={` block after:content-[':'] w-[40%]`}> Position</span>
                    <p className=' block w-full'>{positionSwitch(UserStore.user?.authorize)}</p>
                </div>
                <div className='py-4 pl-5 flex w-full'>
                    <span className={` block after:content-[':'] w-[40%]`}> Gender</span>
                    <p className=' block w-full'>{UserStore.user?.gender===1?'Male':'Female'}</p>
                </div>
            </div>
          
        </div>
      </div>
      </div>
    </div>
  )
}

export default observer(ShowMember)