
import React from 'react'
import {FiEdit} from 'react-icons/fi'
import { User } from '../../interfaces/user'
import {BsArrowRight} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { DateToView } from '../../shared/date-time/DateToView';
interface Row {
 props: User| undefined;
}


const positionSwitch=(num:number|undefined)=>{
  if(num===7){
    return 'Admin'
  }
  if(num===8){
    return 'Employee'
  }
  if(num===9){
    return 'Leader'
  }
}
const Member=({props}:Row)=> {
  return (
  <tr  className='h-12 border-b'>
      <td>{props?.username}</td>
      <td>{props?.location}</td>
      <td>{positionSwitch(props?.authorize)}</td>
      <td>{DateToView(props?.dateOfBirth)}</td>
      <td>{DateToView(props?.dateAtWork)}</td>
      <td></td>
      <td className='text-center flex justify-evenly items-center h-12'>
        <Link to={`/dashboard/members/${props?.userId}/edit`}><FiEdit/></Link>
        <Link to={`/dashboard/members/${props?.userId}`}><BsArrowRight/></Link>
      </td>
  </tr>
  )
}

export default Member