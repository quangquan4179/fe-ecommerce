import React, { useState } from 'react'
import { Calendar, Value } from 'react-multi-date-picker'
import DatePanel from 'react-multi-date-picker/plugins/date_panel'

type Props = {
    selectedDate:any,
    onSubmit:any,
    onMonthChange:any
}

const DayOffPicker = ({selectedDate,onSubmit,onMonthChange}: Props) => {
  const [dates, setDates] = useState<Value>(selectedDate);
  return (
    <div>
        <Calendar
        multiple value={selectedDate}
      
        onMonthChange={(data:any)=>onMonthChange(data)}
        onChange={setDates}
        plugins={[
          <DatePanel  sort="date"  />
        ]} />

        <div className='mt-6'>

          <button onClick={()=>onSubmit(dates)} className='bg-[#5048E5] text-[#FFFFFF] font-bold mr-4 w-24 pt-2 pb-2 rounded-lg'>
            Submit
          </button>
        </div>
    </div>
  )
}

export default DayOffPicker