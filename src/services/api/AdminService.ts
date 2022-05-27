// import axios from "axios"
import axiosInstance from "../custom_axios";

export const getAllUsers =async()=>{
    const res = await axiosInstance.get('/users');
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


export const uploadAvatar = async (data:any) => {
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    const res = await axiosInstance.post("users/avatar", data, config);
    return res.data;
  };
  