import { action, makeObservable, observable } from "mobx"
// import { getAllUsers } from "../services/api/AdminService";
import { getDayOff } from "../services/api/AttendanceService";
import { getTimekeepingAllUserService } from "../services/api/Timekeeping";
class TimekeepingStore {
    timekeepings=[]
    month = 0;
    year = 0;
    employee = [];
    dayOffList = [];

    constructor(){
        makeObservable(this,{
            timekeepings:observable,
            employee: observable,
            dayOffList: observable,

            setTimekeepings:action,
            setDayOff: action,

        })
    }

    async getAllTimekeepings(month:number, year:number){
        this.month = month;
        this.year = year;
        try {
            // const allEmployees = await getAllUsers();
            const data = await getTimekeepingAllUserService(month,year);
            // console.log("🚀 ~ file: TimeKeepingStore.ts ~ line 30 ~ TimekeepingStore ~ getAllTimekeepings ~ data", data)
            const res = await getDayOff(month, year);
            
            if (data.success) {
                // data.data.forEach((e:any) => {
                //   for (let i = 0; i < allEmployees.length; i++) {
                //     if (e.userId=== allEmployees[i].userId) {
                //       e.furloughs = allEmployees[i].furloughs;
                //     }
                //   }
                // });
                this.setTimekeepings(data.data);
                // console.log(this.timekeepings)
              }
        
              this.setDayOff(res.dayOffList);
        
        } catch (error) {
            
            
        }
    

    }

    setTimekeepings(arr:any){
        this.timekeepings=arr
    }
    setDayOff(dayOffList:any) {
        this.dayOffList = dayOffList;
      }
    
}

export default new TimekeepingStore()