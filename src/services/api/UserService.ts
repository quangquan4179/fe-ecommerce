import {axiosInstance} from "../custom_axios"



export const uploadAvatar = async (data:any) => {
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    const res = await axiosInstance.post("users/avatar", data, config);
    return res.data;
};


export const getUsers =async()=>{
  const res = await axiosInstance.get('/users');
  return res.data

}