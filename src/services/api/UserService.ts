import {axiosInstance} from "../custom_axios"

export const getPosts = async(userId:string)=>{
    const response = await axiosInstance.get(`/post/${userId}`)
    return response.data

}