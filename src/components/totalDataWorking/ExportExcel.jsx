import React from 'react'
import { formatTotalTime } from '../../shared/date-time/formatTotalTIme'
import { RiDownloadLine } from 'react-icons/ri'

import ReactExport from 'react-export-excel'
const ExcelFile = ReactExport.ExcelFile
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn



const ExportExcel = ({rows,days}) => {
    const dates = days.map((day) => day.getDate())

    const tableHeader = [
        { title: 'STT', value: 'stt' },
        { title: 'Họ và tên', value: 'username' },
        ...dates.map((e) => ({ title: e, value: 'workingTime' + e })),
        { title: 'Tổng giờ làm', value: 'total' },
        // { title: 'Ngày nghỉ phép', value: 'dayOff' },
        { title: 'Giờ làm còn thiếu', value: 'remainingTime' },
      ]
    


      const data = [
        ...rows.map((attendance, i) => {
          let numb=0;
                if(attendance.furloughs){
                  attendance.furloughs.forEach((e)=>{
                    if(e.type===1){
                      numb++;
                    }
                  })
                }
          const dataDate = dates.map((date) => {
            const dataAttendance = attendance.attendanceList.find(
              (e) => e.date === date
            )
            let a='';
     
            return dataAttendance
              ? {
                  key: `workingTime${date}`,
                  value: formatTotalTime(dataAttendance.totalWorkingTime),
                }
              : {
                  key: `workingTime${date}`,
                  value: a,
                }
          })
    
          var dataDateObject = {}
       
          for (let i = 0; i < dataDate.length; i++) {
            dataDateObject[dataDate[i].key] = dataDate[i].value
              
          }

    
          return {
        
            username: attendance.username,
            ...dataDateObject,
            total: attendance.total,
            dayOff: numb,
            remainingTime: formatTotalTime(attendance.remainingTime),
          }
        }),
      ]
    
  return (
    <ExcelFile element={
      <button className='flex items-center text-[#5048E5] font-medium ml-4 hover:bg-[#F2F3FB] rounded-lg pt-2 pb-2 pl-5 pr-5'>
      <RiDownloadLine />
      <p className='ml-2'>Export</p>
    </button>
    }>
      <ExcelSheet data={data} name="Employees">
      {tableHeader.map((header) => {
          return (
            <ExcelColumn
              label={header.title}
              value={header.value}
              key={header.value}
            />
          )
        })}

      </ExcelSheet>
       
    </ExcelFile>
  )
}

export default ExportExcel