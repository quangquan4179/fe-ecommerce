import React from 'react'

type Props = {
  handleCheck: Function,
  type:string
}

const CheckIn = ({handleCheck,type}: Props) => {
  return (
    <div className='border-2 w-40 rounded-lg h-40 relative'>
      <div className='absolute top-8 left-8'>
        <div>
          <p>Forgot check In ?</p>
        </div>
        <button className='bg-[#5048E5] text-[#FFFFFF] font-bold mr-4 w-24 pt-2 pb-2 rounded-lg' onClick={()=>handleCheck(type)}>
          <h1>
            {type}
          </h1>
        </button>
      </div>
    </div>
  )
}

export default CheckIn