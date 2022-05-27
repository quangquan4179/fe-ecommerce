import React from 'react'
import  { BiTimeFive} from 'react-icons/bi'
type Props = {
  handleCheck: Function,
  type:string,
  time:any,
  method:string
}

const Back= ({handleCheck,type, time, method}: Props) => {
  return (
    <div className='border-2 w-40 rounded-lg h-40'>
      <div>
          <p className=''>
              Current Status: <span className='text-[#5048E5] font-medium'>{type}</span>
          </p>
          <p className=' flex'>
            <BiTimeFive size={30}/> {time} With:  <span className='text-[#5048E5] font-medium'>{method}</span>
             
          </p>

      </div>
      <button className='bg-[#17be17] text-[#FFFFFF] font-bold ml-7 w-24 pt-2 pb-2 rounded-lg' onClick={()=>handleCheck("BACK")}>
        <h1>
          BACK
        </h1>
      </button>
    </div>
  )
}

export default Back