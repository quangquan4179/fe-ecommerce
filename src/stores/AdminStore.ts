import { action, makeObservable, observable } from "mobx";
import { User } from "../interfaces/user";
import { getAllUsers } from "../services/api/AdminService";
import { Nullable } from "../interfaces";
import { getUserById } from "../services/api/Authservice";
 class AdminStore {
    users:User[]=[]
    user: Nullable<User>=null
  
    constructor(){
        makeObservable(this,{
            users:observable,
            user:observable,
            setUsers:action,
            setCurrentUser:action
        })
    }

    setUsers(users:User[]){
        this.users=users
    }

    setCurrentUser(user:User){
        this.user=user;
    }



    async getUsers(){
      const res = await getAllUsers()
      this.setUsers(res.users)
      
    }
    async getUser(userId:string){
        const res = await getUserById(userId)
        if(res.status){
            this.setCurrentUser(res.data)
        }
    }
}

export default new AdminStore()