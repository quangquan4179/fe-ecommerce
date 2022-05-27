import React, {useLayoutEffect, useState } from 'react'
// import { Link, useParams } from 'react-router-dom';
// import AdminStore from '../../stores/AdminStore';
import { observer } from 'mobx-react-lite';
import moment from "moment";
import { BiImageAdd } from 'react-icons/bi';
import { useFormik } from 'formik'
import { userSchema } from '../members/userSchema';
import Authstore from '../../stores/Authstore';
import { uploadAvatar } from '../../services/api/AdminService' 
import { getImgName } from '../../shared/img/getName';

interface Values {
  userId:string,
  authorize: number|string
  dateAtWork:  string
  dateOfBirth:  string
  gender:  number|string
  location: string ,
  personalEmail: string
  username: string

}



function EditProfile() {
  const [avatar, setAvatar] = useState<File>();
  const [preview, setPreview] = useState<string>();
  // const userId =localStorage.getItem('userId');

  useLayoutEffect(() => {
   
    // if(userId){
    //  Authstore.getUserId(userId )
    // }
  }, [])

  const formik = useFormik(
    {
      enableReinitialize: true,
      validationSchema: userSchema,
      initialValues: {
        userId: Authstore.user?.userId,
        authorize: Authstore.user?.authorize ,
        dateOfBirth: moment(Authstore.user?.dateOfBirth).format("YYYY-MM-DD") || "",
        gender: Authstore.user?.gender,
        dateAtWork:  moment(Authstore.user?.dateAtWork).format("YYYY-MM-DD") || "",
        location: Authstore.user?.location as string || '',
        personalEmail: Authstore.user?.personalEmail||'',
        username: Authstore.user?.username||'',
      },
      onSubmit: (values: Values) => handle(values)
    }
  )
  const handle = async(values: Values) => {
    // console.log(values)

     values.gender=Number(values.gender)
     values.authorize=Number(values.authorize)
    //  await Authstore.updateEmployee(values)

  }

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }
    setAvatar(e.target.files[0]);
    const objectUrl = window.URL.createObjectURL(e.target.files[0]);

    setPreview(objectUrl);

}
const handleUploadAvatar = async () => {
  if (avatar) {
    const data = new FormData();
    data.append("avatar", avatar);
    data.append("userId", Authstore.user.userId);
    const res = await uploadAvatar(data);
    console.log("🚀 ~ file: EditProfile.tsx ~ line 80 ~ handleUploadAvatar ~ res", res)
    
  }
}


const handleCancal =()=>{
  setPreview('')
  setAvatar(undefined)
}
 

  return (
    <div><div>
      <div className='mx-auto w-[55%] mt-10'>
  
        <div className='mt-7'>

          <figure className='flex'>
           
            {Authstore.user.avatarURL?(<img src={getImgName(Authstore.user.avatarURL)} alt='avt' className='rounded-full h-10 w-10 object-cover ' />):(
                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                   <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                </div>
              )}
            <div className='ml-4'>
              <figcaption className='font-medium text-2xl mb-1'>{Authstore.user?.username}</figcaption>
              <figcaption >user_Id: <span className='bg-[#E5E7EB] rounded-lg font-normal'>{Authstore.user?.userId}</span></figcaption>
            </div>
          </figure>
        </div>
        <div className='mt-7'>
          <div className='bg-[#FFFFFF] w-full shadow-sm rounded-lg divide-y'>
            <h3 className='py-4 pl-5 font-medium text-lg'>Edit Profile</h3>
            <div>
            <h4 className='py-4 pl-5 font-medium text-lg'>Edit Avatar</h4>

            <div className='mx-2'>
                {avatar?(
                <div className="flex flex-col w-[50%] ">
                  <img className='object-contain h-48 w-96' src={preview} alt='avt'/>
                  <div>
                  <button className='bg-[#5048E5] text-[#FFFFFF] font-bold ml-4 w-24 pt-2 pb-2 rounded-lg mt-6' onClick={handleUploadAvatar}> 
                        Upload file
                  </button>
                  <button className='bg-[#b4232f] text-[#FFFFFF] font-bold ml-4 w-24 pt-2 pb-2 rounded-lg mt-6 mb-6' onClick={handleCancal}> 
                        Cancel
                  </button>
                  </div>
                </div>
                ):(
                    <label htmlFor='input-file' className=' cursor-pointer p-7 block'   >
                      <BiImageAdd size={40}/>
                     
                      <input type='file' className='hidden' id="input-file" accept="image/png, image/gif, image/jpeg" onChange={handleChangeFile} />
                  
                    </label>
                )}
               
              </div>

            </div>
            <div >
            <h4 className='py-4 pl-5 font-medium text-lg'>Edit Infomation</h4>

              <form onSubmit={formik.handleSubmit} className='flex flex-col divide-y' >

              
             
                <div className='py-7 flex'>

                  
                  <div className='w-[50%] relative h-12 mx-2' >
                    
                    <input className='border focus:border-[#5048E5] h-full w-full rounded-md pl-4 outline-none peer' id="username" name="username" defaultValue={formik.values.username} onChange={formik.handleChange} />
                    <label htmlFor="username" className='absolute top-[-0.9rem] left-5 bg-[#FFFFFF] peer-focus:text-[#5048E5]'>  Name</label>
                  </div>
                  <div className='w-[50%] relative h-12 mx-2'>
                    <select id="gender" className='w-full h-14 border-[#E6E8F0] border-[1px] focus:border-[2px] focus:border-[#5048E5] outline-none rounded-lg peer' onChange={formik.handleChange}  value={formik.values.gender}>
                      <option value={1}>Male</option>
                      <option value={2}>Female</option>
                    </select>
                    <label htmlFor="gender" className='members__sort-label absolute -top-[0.8rem] left-3 bg-[#FFFFFF] peer-focus:text-[#5048E5] '>Gender</label>
                    
                </div>
                </div>

                

                <div className='py-7 flex'>
                  <div className='w-[50%] relative h-12 mx-2'>
                  
                    <input className='border focus:border-[#5048E5] h-full w-full rounded-md pl-4 peer outline-none' id=" personalEmail" name=" personalEmail" defaultValue={formik.values.personalEmail} onChange={formik.handleChange}/>
                    <label  className='absolute top-[-0.9rem] left-5 bg-[#FFFFFF] peer-focus:text-[#5048E5] ' htmlFor=" personalEmail">  Email</label>
                  </div>
                  <div className='w-[50%] relative h-12 mx-2'>
                    <input  className='border focus:border-[#5048E5] h-full w-full rounded-md pl-4 outline-none peer' id="location" name="location" defaultValue={formik.values.location} onChange={formik.handleChange}/>
                    <label   className='absolute top-[-0.9rem] left-5 bg-[#FFFFFF] peer-focus:text-[#5048E5]'  htmlFor="location"> Location</label>
                  </div>

                </div>

                <div  className='py-7 flex'>
                  <div className='w-[50%] relative h-12 mx-2'>
                    <input className='border focus:border-[#5048E5] h-full w-full rounded-md pl-4 peer outline-none' id="dateOfBirth " name="dateOfBirth" type="date" onChange={formik.handleChange} value={formik.values.dateOfBirth}/>
                    <label  className='absolute top-[-0.9rem] left-5 bg-[#FFFFFF] peer-focus:text-[#5048E5] ' htmlFor="dateOfBirth ">  Date of Birth</label>
                  </div>
                  <div className='w-[50%] relative h-12 mx-2'>
                   

                    <input className='border focus:border-[#5048E5] h-full w-full rounded-md pl-4 peer outline-none' id="dateAtWork" name="dateAtWork" type="date" onChange={formik.handleChange} value={formik.values.dateAtWork}/>
                    <label  className='absolute top-[-0.9rem] left-5 bg-[#FFFFFF] peer-focus:text-[#5048E5] ' htmlFor="dateAtWork">  Date at work</label>
                  </div>


                </div>
                <div className='py-7 '>

                 <button className='bg-[#5048E5] text-[#FFFFFF] font-bold ml-4 w-24 pt-2 pb-2 rounded-lg' type="submit">Update</button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </div>
    </div></div>
  )
}
export default observer(EditProfile)