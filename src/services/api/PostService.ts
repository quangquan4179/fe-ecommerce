import axiosInstance from "../custom_axios";


export const createPost  = async (data:any) => {
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    const res = await axiosInstance.post("post/create", data, config);
    return res.data;
};

export const getPosts = async(userId:string)=>{
    const response = await axiosInstance.get(`/post?userId=${userId}`)
    return response.data

}

export const getAllPost = async()=>{
    const res = await axiosInstance.get('/post/all');
    return res.data
}