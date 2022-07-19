import React from 'react'
import {observer}  from 'mobx-react-lite'
import { formatTotalTime } from '../../shared/date-time/formatTotalTIme'
type Props = {
    rows:any, 
    dayOffList:any, 
    days:any, 
    remainingTime :number
}

const TableData = ({rows,remainingTime,dayOffList,days}: Props) => {
console.log("🚀 ~ file: TableData.tsx ~ line 12 ~ TableData ~ dayOffList", dayOffList)

    const dates = days.map((day:any) => day.getDate())
    // console.log(rows)
    const tableHeader = [
      
        'Name',
        ...dates,
        'Total working hours',
        // 'Ngày nghỉ phép',
        'Totol missing hours',
      ]
    
  return (
    <div className='bg-[#FFFFFF] rounded-lg shadow-sm' >
        <table className='table-auto w-full border rounded-lg'>
            <thead className='bg-[#F3F4F6] h-12'>
                <tr className='bg-[#111827] text-[#ffffff]'>
                    {tableHeader.map((header:string,i:number)=><th key={i} className='border'>{header}</th>)}
                </tr>
            </thead>
            <tbody>
                {rows.map((row:any,i:number)=>{
                    return(
                        <tr key={i} className='border h-12' >
                            <td className='border text-center'>
                                {row.username}
                            </td>
                            {dates.map((date:number,i:number)=>{


                                    const timekeeping = row.attendanceList.find(
                                        (e:any) => e.date === date
                                    )
                                    const dayOff = dayOffList.find((e:any) => e === date)
                                    
                                    

                                return <td key={i} className={`border min-w-[2rem] text-center ${dayOff?('bg-[#B3B3B3]'):(null)}`}>
                                          {timekeeping &&
                                            timekeeping?.status !== false &&
                                            formatTotalTime(timekeeping.totalWorkingTime)}

                                </td>
                            })}
                             <td className='border text-center'>
                             {formatTotalTime(row.total)}
                            </td>
                            <td className='border text-center'>
                               {row.remainingTime?(formatTotalTime(row.remainingTime)):(remainingTime)}
                               {/* {row.remainingTime} */}

                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default observer(TableData)