import React, { useEffect, useState } from 'react'
import AuthStore from '../../../stores/Authstore'
import AttendanceStore  from '../../../stores/AttendanceStore'
import CheckIn from './CheckIn'
import {observer} from 'mobx-react-lite'
import InPregress from './InProgress'
import { formatTime } from '../../../shared/date-time/formatTime'
import Back from './Back'
import Out from './Out'

type Props = {

}
// type RenderComponentProp={
//     type:string,

// }
const IN = 'IN'
const OUT = 'OUT'
const REST = 'REST'
const BACK = 'BACK'

const Attendance = (props: Props) => {
    const [load, setLoad] = useState<Boolean>(false)


    useEffect(() => {
      const userId = AuthStore.user.userId;
    //   console.log("🚀 ~ file: index.tsx ~ line 22 ~ useEffect ~ userId ", userId )
      AttendanceStore.getStatus(userId)

      
    }, [load])
    


    const handeCheck = async(type:string)=>{
        const userId = AuthStore.user.userId
        setLoad(true)
        if (true) {
            await AttendanceStore.check(type, userId)
            setLoad(false)
        }
      
    }
    const renderComponent =(status:any)=>{
   
        
         const  time = formatTime(status.timestamp)
        
         
        switch(status?.type){
            case OUT:
                return <CheckIn type={IN    } handleCheck={handeCheck}/>
            case IN:
                return <InPregress type={IN} handleCheck={handeCheck} time={time} method={status.method}/>
            case REST:
                return <Back type={REST} handleCheck={handeCheck} time={time} method={status.method}/>
            case BACK:
                return <Out type={BACK}  handleCheck={handeCheck} time={time} method={status.method}/>


        }

    }




  return (
    <div>
        {renderComponent(AttendanceStore.status)}
    </div>
  )
}

export default observer(Attendance)