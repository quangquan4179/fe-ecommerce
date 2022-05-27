import React, { useEffect, useState } from 'react'
import AttendanceStore  from '../../stores/AttendanceStore'
import AuthStore  from '../../stores/Authstore'
// import { createTable, PaginationState } from '@tanstack/react-table';
import Attandance  from './attendance'
import {observer} from 'mobx-react-lite'
import { getDaysInMonthUTC } from '../../shared/date-time/getDaysInMonthUTC';
import TimeComponent from '../times/TimeComponent';
import DataTime from './DataTime';
import { formatTotalTime } from '../../shared/date-time/formatTotalTIme';
// import AttendanceStore from '../../stores/AttendanceStore';
type Props = {}

const Dataworking = (props: Props) => {
  const [days, setDays] = useState<Date[]>();
  useEffect(()=>{
    let month, year;
    const now = new Date();
    month = now.getMonth() + 1;
    year = now.getFullYear();
    AttendanceStore.getAllAttendance(AuthStore.user?.userId,month,year)
    setDays(getDaysInMonthUTC(month - 1, year));

    // console.log("🚀 ~ file: index.tsx ~ line 21 ~ useEffect ~ AttendanceStore", AttendanceStore)

    

  },[])
  const handleChangeMonth = (month:number, year:number) => {

    AttendanceStore.getAllAttendance(AuthStore.user?.userId, month, year);
    // ScheduleStore.getHistoryMonthSchedule(authStore.user?.id, month, year);
    setDays(getDaysInMonthUTC(month - 1, year));
  };

  let tableHeader =[
    'Date',
    'IN',
    'OUT',
    'TOTAL REST',
    'TOTAL WORKING HOURS'
  ]
  const renderlistIN = (list:any) => {
    return list.filter((e:any) => e.type === "IN");
  };
  const renderlistOUT = (list:any) => {
    return list.filter((e:any) => e.type === "OUT");
  };


  return (
    <div className='mx-9 my-9'>
      <div className=''>
        <h2 className='font-medium text-4xl'>Data Time Working</h2>
      </div>
      <div className='h-12 mt-6 mb-6'>
          <TimeComponent handleChange={handleChangeMonth}/>
      </div>
      <div className='mb-6'>
        <p>Total working hours: {formatTotalTime(AttendanceStore.total)}</p>
        <p> Total working hours missing: {formatTotalTime(AttendanceStore.remainingTime)}</p>

      </div>
      <div className='grid  grid-cols-6'>
      <div className='col-span-5 bg-[#FFFFFF] shadow-sm rounded-r-lg' >
        <table className='table-auto w-full'>
            <thead className='h-12 '>
               <tr>
                 {tableHeader.map((header:string,index:number)=>(<th key={index} className='border'>
                  {header}
                 </th>))}

               </tr>
            </thead>
            <tbody>
              {days&&AttendanceStore.attendances &&AttendanceStore.dayOffList&&days.map((day:Date,i)=>{
                  

                  const attendance = AttendanceStore.attendances.find(
                    (attendance) => attendance?.date === day.getDate()
                  );

                  // const isDayOff =AttendanceStore.dayOffList.includes(day.getDate())? true: false;


                    if(attendance){
                      return <DataTime key={i} listIN={renderlistIN(attendance.attendances)} listOUT={renderlistOUT(attendance.attendances)} isDayOff={false} attendance={attendance}/>
                    }
                return <DataTime key={i} listIN={[]} listOUT={[]} isDayOff={false} attendance={
                  {
                    month: day.getMonth() + 1,
                    year: day.getFullYear(),
                    date: day.getDate(),
                    totalWorkingTime: null,
                    totalRestTime: null,
                    status: true,
                  }

                }/>
              })}
            </tbody>
        </table>

      </div>
      <div className='col-span-1  fixed top-32 right-12'>
         <Attandance/>
      </div>
     
    </div>
    </div>
  )
}

export default observer(Dataworking)