import React,{useRef, useState} from 'react'

import { RiDownloadLine, RiUploadLine } from 'react-icons/ri'
import {AiOutlineSearch} from 'react-icons/ai'

type Props = {}
interface state{
  width:number
    left:number
}

const Members = (props: Props) => {
  const [size,setSize]=useState<state|any>({
    width:0,
    left:0,
  })

  const inputEl = useRef<HTMLSpanElement>(null);
  const btnref = useRef<HTMLButtonElement>(null)
  const handerClickTab =(e:any)=>{
    console.log(btnref.current?.offsetLeft)
    console.log(btnref.current?.offsetWidth)
    setSize({width:btnref.current?.offsetWidth, left: btnref.current?.offsetLeft })
    
    





  }
  return (
    <div className='ml-4 mr-4'>

      <div className='flex mt-16 justify-between items-center'>
        <div>
          <h1 className='font-medium text-4xl '>Members</h1>
        </div>
        <div>
          <button className='bg-[#5048E5] text-[#FFFFFF] font-bold mr-4 w-24 pt-2 pb-2 rounded-lg'>+Add</button>
        </div>
      </div>
      <div className='flex mt-9 mb-9'>
        <button className='flex items-center text-[#5048E5] font-medium hover:bg-[#F2F3FB] rounded-lg pt-2 pb-2 pl-5 pr-5'>
          <RiUploadLine />
          <p className='ml-2'>Import</p>

        </button>
        <button className='flex items-center text-[#5048E5] font-medium ml-4 hover:bg-[#F2F3FB] rounded-lg pt-2 pb-2 pl-5 pr-5'>
          <RiDownloadLine />
          <p className='ml-2'>Export</p>
        </button>

      </div>

      <div className='bg-[#FFFFFF]'>
        <div className=' h-12 flex items-center shadow-sm relative'>
          <button className='ml-5 focus:text-[#5048E5] font-normal p-3'  onClick={handerClickTab}  ref={btnref}>All</button>
          <button className='ml-5 focus:text-[#5048E5] font-normal' onClick={handerClickTab}>CEO</button>
          <button className='ml-5 focus:text-[#5048E5] font-normal' onClick={handerClickTab} >BM</button>
          <button className='ml-5 focus:text-[#5048E5] font-normal' onClick={handerClickTab} >Leader</button>
          <span ref={inputEl} className={`bg-[#5048E5] w-[${size.width}px] h-1 absolute bottom-0 left-[${size.left}px] block`} id="line"> </span>
        </div>
  
        <div className='flex p-4'>
        <form className='relative grow-[7] '>
          <div className='absolute inset-y-4 left-3'>
            <AiOutlineSearch className='h-6 w-6 fill-slate-400'/>
          </div>
          
          <input type="text" placeholder='Search Members ' className='placeholder:italic placeholder:text-slate-400 w-full h-14 border-[#E6E8F0] border-[1px] focus:border-[2px] focus:border-[#5048E5] outline-none rounded-lg pl-10 sm:text-sm'/>
        </form>
        <div className='members__sort grow-[1] relative ml-8 flex items-center pl-2'>
              

                <select id="sort"  className='w-full h-14 border-[#E6E8F0] border-[1px] focus:border-[2px] focus:border-[#5048E5] outline-none rounded-lg peer' >
                  <option value="DateAtWork">Date At Work</option>
                  <option value="DateOfBirth">Date Of Birth</option>
                  <option value="MSNV">MSNV</option>
                  <option value="Name">Name</option>
                </select>
                <label htmlFor="sort" className='members__sort-label absolute -top-[0.8rem] left-3 bg-[#FFFFFF] peer-focus:text-[#5048E5] italic'>Sort by</label>
        </div>
        
         </div>

         <div>
         <table className="table-auto  w-full">
          <thead>
            <tr className='h-10 bg-[#F3F4F6]'>
              <th><input type="checkbox"   className="default:ring-4 "/></th>
              <th className='text-left'>Name</th>
              <th className='text-left'>Location</th>
              <th className='text-left'>Position</th>
              <th className='text-left'>Date of Birth</th>
              <th className='text-left'>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td >The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
              <td></td>
              <td>1961</td>
              <td></td>
            </tr>
           
          </tbody>
        </table>
         </div>
        
      </div>
      
      
    </div>
  )
}

export default Members