import { action, makeObservable, observable } from "mobx";
import { User } from "../interfaces/user";
import { Nullable } from "../interfaces";
import { getUserById } from "../services/api/Authservice";
import { update, createUser } from "../services/api/AdminService";
import { PostInterFace } from "../interfaces/posts";
import { getPosts } from "../services/api/PostService";
 class UserStore {
   
    user: Nullable<User>=null
    posts : Nullable<PostInterFace>=[]
    constructor(){
        makeObservable(this,{
            posts:observable,
            user:observable,
            setCurrentUser:action,
            setPost:action
        })
    }
    setCurrentUser(user:User){
        this.user=user;
    }
    setPost(data:PostInterFace[]){
      this.posts=data

  }
  async getAllPosts(userId:string){
      const res = await getPosts(userId)
      if(res.success){
        this.setPost(res.posts)
      }
     
      

  }



  
    async getUser(userId:string){
        const res = await getUserById(userId)
        // console.log(res)
        if(res.success){
            this.setCurrentUser(res.data)
        }
    }
    async updateEmployee(employee:any) {
        for (let key in employee) {
          if (employee[key] === '' || employee[key] === 'Invalid date') {
            employee[key] = null
          }
        }

        // console.log(employee)
         const res =await update(employee);
         console.log(res)
        // const res = await updateEmployee(employee)
        return res
    }
    async createEmployee(employee:any) {
        for (let key in employee) {
          if (employee[key] === '' || employee[key] === 'Invalid date') {
            employee[key] = null
          }
        }

        console.log(employee)
        await createUser(employee);
        // const res = await updateEmployee(employee)
        // return res
    }
    
}

export default new UserStore()