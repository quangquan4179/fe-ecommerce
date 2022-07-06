import {axiosInstance} from "../custom_axios"

export const getComments = async(postId:string)=>{
    const response = await axiosInstance.get(`/comments?postId=${postId}`)
    return response.data

}

export const createComment = async (data:any) => {
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    const res = await axiosInstance.post("comments/create", data, config);
    return res.data;
  };
  