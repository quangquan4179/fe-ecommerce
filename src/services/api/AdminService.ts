// import axios from "axios"
import axiosInstance from "../custom_axios";

export const getAllUsers =async()=>{
    const res = await axiosInstance.get('/api/admin/users');
    return res.data

}
export const update =async(user:any)=>{
    const res = await axiosInstance.post('/users/update-user',user)
    return res.data
}

export const createUser = async( user:any)=>{
    const res = await axiosInstance.post('/users/create-user',user)
    return res.data
}


