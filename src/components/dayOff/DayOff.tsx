import React, { useEffect, useState } from 'react'
import { getDayOff } from '../../services/api/AttendanceService'
import { Calendar } from "react-multi-date-picker";
import type { Value } from "react-multi-date-picker"
import DatePanel from "react-multi-date-picker/plugins/date_panel"
import { setDayOffService } from '../../services/api/DayOffService';
import { observer} from 'mobx-react-lite'
import DayOffPicker from './DayOffPicker';
import { toast } from 'react-toastify';
type Props = {}

const DayOff = (props: Props) => {
  const [dates, setDates] = useState<Value>();


  useEffect(() => {
    const getDates = async () => {
      const month = new Date().getMonth() + 1
      const year = new Date().getFullYear()

      const res = await getDayOff(month, year)
      const dates = formatDate(res.dayOffList, month, year)
      setDates(dates)
    }
    getDates()
  }, [])

  const setDayoff = async(dates:any) => {
    const res = await setDayOffService(dates)
    console.log(res)
    if (res.success) {
            
      toast.success("set dayoffs success.", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  }else{
      toast.error(" set dayoffs false.", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

  }
  }
  const handleChangeMonth = async (data:any) => {
    const month = data.month.number;
    const year = data.year
    // console.log(data)
    const res = await getDayOff(month, year)
    const dates = formatDate(res.dayOffList, month, year)
    setDates(dates)
  }


  
  const formatDate = (dayOffList: any, month: any, year: any) => {
    return dayOffList.map((day: any) => new Date(`${month}-${day}-${year}`))
  }





  return (
    <div className='mx-9 my-9'>
      <div>
        <h1 className='font-medium text-4xl'>
          Set Day Off
        </h1>
      </div>
      <div className='my-28'>
       <DayOffPicker onMonthChange={handleChangeMonth} onSubmit={setDayoff} selectedDate={dates}/>
      

      </div>

      
    </div>
  )
}

export default observer(DayOff)