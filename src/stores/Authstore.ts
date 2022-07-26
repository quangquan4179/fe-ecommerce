import { action, makeObservable, observable } from "mobx";
import { Nullable } from "../interfaces";

import { User } from "../interfaces/user";
import { login,loginWithGoogle, getUserById} from '../services/api/Authservice'


class AuthStore {
    isAuthentication = false
    user: Nullable<User>=null
  
    constructor(){
        makeObservable(this,{
            isAuthentication:observable,
            user:observable,
            setUser: action,
        
            
        })
    }

    setUser(isAuthentication:boolean,user:any){
        this.isAuthentication=isAuthentication
        this.user=user

    }
   

    storeToken(token:any){
        localStorage.setItem('accessToken', token);
        // localStorage.setItem('refreshToken', token.refresh_token);
        

    }
    storeUserId(userId:string){
        localStorage.setItem('userId',userId)
    }

    async loginStore (personalEmail:string,password:string){
        const res = await login(personalEmail,password)
       
        
        if(res.status){
            this.setUser(true,res.admin)
            this.storeToken(res.token)
            this.storeUserId(res.admin.id)
           
        }
        else(
            this.logout()
        )
        return res

    }
    // async loginWithGoogleStore (tokenId:string){
    //     const res = await loginWithGoogle(tokenId)
    //     if(res.success){
    //         this.setUser(true,res.data.user)
    //         this.storeUserId(res.data.user.userId)
    //         this.storeToken(res.data.tokens)
    //         return res
    //     }
    //     else{
    //         this.logout()
    //     }

    // }

    getAccessToken(){
        
        const accessToken = localStorage.getItem('accessToken');
        
        if(accessToken!==undefined&&accessToken){
           
            return (accessToken);
        }
        return ''
    }
    getUserId(){
        const userId =localStorage.getItem('userId');
        if(userId!=='undefined'&&userId){
            return userId
        }
        return''
    }

    async logout(){

        this.setUser(false,null)
        localStorage.removeItem('accessToken')
        localStorage.removeItem('userId')
       
    }

    async loadUser(){
        const userId = this.getUserId()
        if( userId!==''){
            const res =  await getUserById(userId)

            
            if(res.status){
                this.setUser(true,res.admin)
            }
            else{
                this.logout()
            }
        }   
    }
        

}
export default new AuthStore()