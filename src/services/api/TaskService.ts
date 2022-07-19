import axiosInstance from "../custom_axios";

export const createTask  = async (data:any) => {
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    const res = await axiosInstance.post("task/create", data, config);
    return res.data;
};

export const getTaskByProjectId = async(projectId:string)=>{
    const res = await axiosInstance.get(`task/projectId`,{
        params:{projectId}
    })
    return res.data
}
export const updateState = async(id:number,state:number)=>{
    const res = await axiosInstance.post('task/update',{
        id,
        state
    })
}