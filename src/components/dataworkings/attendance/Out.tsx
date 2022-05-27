import React from 'react'
import  { BiTimeFive} from 'react-icons/bi'
type Props = {
  handleCheck: Function,
  type:string,
  time:any,
  method:string
}

const Out= ({handleCheck,type, time, method}: Props) => {
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

      <button className='bg-[#aebe17] text-[#FFFFFF] font-bol ml-7  w-24 pt-2 pb-2 rounded-lg' onClick={()=>handleCheck("REST")}>
        <h1>
          REST
        </h1>
      </button>
      <p>
          You Want out now ?
      </p>
      <button className='bg-[#be3017] text-[#FFFFFF] font-bold ml-7 w-24 pt-2 pb-2 rounded-lg' onClick={()=>handleCheck("OUT")}>
        <h1>
          OUT
        </h1>
      </button>
    </div>
  )
}

export default Out