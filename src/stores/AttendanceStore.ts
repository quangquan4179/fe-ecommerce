import { action, makeObservable, observable } from "mobx"
import { checkService, getAllAttendance, getDayOff, getStatusService } from "../services/api/AttendanceService"
import { Nullable } from "../interfaces";
import { attendancesInterface } from "../interfaces/attendance";
class AttendanceStore {
  attendances:attendancesInterface[] = []
  dayOffList:number[] = []
  month:Nullable<number> = null
  year:Nullable<number> = null
  status = {}
  data = []
  remainingTime = 0
  total=0
  constructor(){
      makeObservable(this,{
          attendances:observable,
          dayOffList:observable,
          status:observable,
          remainingTime:observable,
          total:observable,
          setAttendances:action,
          setStatus:action,
          setDayOffList:action,
          setRemainingTime:action,
          setTotal:action

      })
  }
  async getAllAttendance(userId:string, month:number, year:number) {
    if (!month || !year) {
      return
    }
    const resAttendance = await getAllAttendance(userId, month, year)
    
    if (resAttendance.success) {
      this.setAttendances(resAttendance.data)
      this.setRemainingTime(resAttendance.remainingTime)
      this.setTotal(resAttendance.total)
    } else {
      this.setAttendances([])
      this.setRemainingTime(0)
    }

    this.month = month
    this.year = year
    const data = await getDayOff(month, year)
    this.setDayOffList([
      ...data.dayOffList,
     
    ])
  }

  async getStatus(userId:string) {
    const res = await getStatusService(userId)
    if (res.success) {
      // const status = res.attendance
      // status.total = res.total
      // status.total_rest = res.total_rest
      this.setStatus(res.attendance)
      
    }
  }
  async check(type:string, userId:string) {
    const ts = new Date().getTime()
    await checkService(type, ts, userId)
  }



  setDayOffList(dayOffList:any) {
    this.dayOffList = dayOffList
  }



  setAttendances(attendances:any) {
    this.attendances = attendances
  }
  setRemainingTime(time:any) {
    this.remainingTime = time
  }
  setTotal(time:number){
    this.total=time
  }
  setStatus(status:any) {
    this.status = status
  }


    
}
export default new AttendanceStore()