import React, { useEffect } from 'react'
import { formatTime } from '../../shared/date-time/formatTime'
import { formatTotalTime } from '../../shared/date-time/formatTotalTIme'
import {observer} from 'mobx-react-lite'


type Props = {
    listIN:any,
    listOUT:any,
    attendance:any,
    isDayOff:boolean,



}

const DataTime = ({listIN,listOUT,attendance,isDayOff}: Props) => {
  useEffect(()=>{

  },[listIN,listOUT,attendance])
    const renderList = (listIN:any, listOUT:any) => {
        const max = Math.max(listIN.length, listOUT.length)
        let jsx = []
        for (let i = 0; i < max; i++) {
          jsx.push(
            <div
              key={i}
              
              className='border-b h-12 w-full'
            >
              {listIN[i] ? formatTime(listIN[i].timestamp) : ''}
            </div>
          )
        }
        return jsx
      }
    
  return (
  <tr  className='h-12 border'>
        <td className='border'>{`${attendance.date}/${attendance.month}/${attendance.year}`}</td>
        <td className='border'>
            {renderList(listIN,listOUT)}
        </td>
        <td className='border'>
            {renderList(listOUT,listIN)}
        </td>
        <td className='border'>{formatTotalTime(attendance.totalRestTime)}</td>
        <td className='border'>{formatTotalTime(attendance.totalWorkingTime)}</td>
    </tr>
  )
}

export default observer(DataTime)