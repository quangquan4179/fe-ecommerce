import React from 'react'
import { Link } from 'react-router-dom';
// import AdminStore from '../../stores/AdminStore';
import moment from "moment";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useFormik } from 'formik'
// import { userSchema } from './userSchema';

import UserStore from '../../stores/UserStore';

interface Values {
  authorize: number | string
  dateAtWork: string
  dateOfBirth: string
  gender: number | string
  location: string,
  personalEmail: string
  username: string

}



function AddMember() {


  const formik = useFormik(
    {
      enableReinitialize: true,
      initialValues: {
        authorize: 8,
        dateOfBirth: moment(new Date()).format("YYYY-MM-DD") || "",
        gender: 1,
        dateAtWork: moment(new Date()).format("YYYY-MM-DD") || "",
        location: '',
        personalEmail: '',
        username: ''
      },
      onSubmit: (values: Values) => handle(values)
    }
  )
  const handle = async (values: Values) => {
    values.gender = Number(values.gender)
    values.authorize = Number(values.authorize)


    console.log(values)
    await UserStore.createEmployee(values)

  }


  return (
    <div><div>
      <div className='mx-auto w-[55%] mt-10'>
        <div className='sideback'>
          <Link to='/dashboard/members' className='flex items-center hover:text-[#5048E5]' >
            <AiOutlineArrowLeft />
            <h4 className='ml-3 font-medium'>Members</h4>
          </Link>
        </div>
        <div className='mt-7'>
        </div>
        <div className='mt-7'>

          <div className='bg-[#FFFFFF] w-full shadow-sm rounded-lg divide-y'>
            <h3 className='py-4 pl-5 font-medium text-lg'>Add Member</h3>
            <div >

              <form onSubmit={formik.handleSubmit} className='flex flex-col divide-y' >
                <div className='py-7 flex'>
                  <div className='w-[50%] relative h-12 mx-2' >

                    <input className='border focus:border-[#5048E5] h-full w-full rounded-md pl-4 outline-none peer' id="username" name="username" defaultValue={formik.values.username} onChange={formik.handleChange} />
                    <label htmlFor="username" className='absolute top-[-0.9rem] left-5 bg-[#FFFFFF] peer-focus:text-[#5048E5]'>  Name</label>
                  </div>
                  <div className='w-[50%] relative h-12 mx-2'>
                    <select id="gender" className='w-full h-14 border-[#E6E8F0] border-[1px] focus:border-[2px] focus:border-[#5048E5] outline-none rounded-lg peer' onChange={formik.handleChange} value={formik.values.gender}>
                      <option value={1}>Male</option>
                      <option value={2}>Female</option>
                    </select>
                    <label htmlFor="gender" className='members__sort-label absolute -top-[0.8rem] left-3 bg-[#FFFFFF] peer-focus:text-[#5048E5] '>Gender</label>

                  </div>
                </div>
                <div className='py-7 flex'>
                  <div className='w-[50%] relative h-12 mx-2'>

                    <input className='border focus:border-[#5048E5] h-full w-full rounded-md pl-4 peer outline-none' id="personalEmail" name="personalEmail" defaultValue={formik.values.personalEmail} onChange={formik.handleChange} />
                    <label className='absolute top-[-0.9rem] left-5 bg-[#FFFFFF] peer-focus:text-[#5048E5] ' htmlFor="personalEmail">  Email</label>
                  </div>

                  <div className='w-[50%] relative h-12 mx-2'>
                    <select id="authorize" className='w-full h-14 border-[#E6E8F0] border-[1px] focus:border-[2px] focus:border-[#5048E5] outline-none rounded-lg peer' onChange={formik.handleChange} value={formik.values.authorize} >
                      <option value={7}>Admin</option>
                      <option value={8}>Employee</option>
                      <option value={9}>Leader</option>
                    </select>
                    <label htmlFor="authorize" className='members__sort-label absolute -top-[0.8rem] left-3 bg-[#FFFFFF] peer-focus:text-[#5048E5] '>Position</label>
                  </div>
                </div>

                <div className='py-7 flex'>
                  <div className='w-[50%] relative h-12 mx-2'>
                    <input className='border focus:border-[#5048E5] h-full w-full rounded-md pl-4 peer outline-none' id="dateOfBirth " name="dateOfBirth" type="date" onChange={formik.handleChange} value={formik.values.dateOfBirth} />
                    <label className='absolute top-[-0.9rem] left-5 bg-[#FFFFFF] peer-focus:text-[#5048E5] ' htmlFor="dateOfBirth ">  Date of Birth</label>
                  </div>
                  <div className='w-[50%] relative h-12 mx-2'>


                    <input className='border focus:border-[#5048E5] h-full w-full rounded-md pl-4 peer outline-none' id="dateAtWork" name="dateAtWork" type="date" onChange={formik.handleChange} value={formik.values.dateAtWork} />
                    <label className='absolute top-[-0.9rem] left-5 bg-[#FFFFFF] peer-focus:text-[#5048E5] ' htmlFor="dateAtWork">  Date at work</label>
                  </div>


                </div>

                <div className='py-7 flex'>
                  <div className='w-[50%] relative h-12 mx-2'>
                    <input className='border focus:border-[#5048E5] h-full w-full rounded-md pl-4 outline-none peer' id="location" name="location" defaultValue={formik.values.location} onChange={formik.handleChange} />
                    <label className='absolute top-[-0.9rem] left-5 bg-[#FFFFFF] peer-focus:text-[#5048E5]' htmlFor="location"> Location</label>
                  </div>
                </div>
                <div className='py-7 '>
                  <button className='bg-[#5048E5] text-[#FFFFFF] font-bold ml-4 w-24 pt-2 pb-2 rounded-lg' type="submit">+Add</button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </div>
    </div></div>
  )
}
export default AddMember