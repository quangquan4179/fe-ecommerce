import axiosInstance from "../custom_axios";

export const createProject  = async (data:any) => {
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    const res = await axiosInstance.post("/api/product/create", data, config);
    return res.data;
};


export const getAllProject = async()=>{
    const res = await axiosInstance.get("project/all");
    return res.data
}
export const getProjects = async(page:number)=>{
    const res = await axiosInstance.get("/api/product/all");
    return res.data
}

export const getProject = async(projectId:string)=>{
    const res = await axiosInstance.get("project/projectId",{
        params:{
            projectId
        }
    })
    return res.data
}

export const getProjectByUserId = async(userId:string)=>{
    const res = await axiosInstance.get(`project/userId`,{
        params:{userId}
    })
    return res.data
}
export const deleteProduct = async(id:number)=>{
    const res = await axiosInstance.delete(`api/product/${id}`)
    return res.data;
}
export const getCatalog=async()=>{
    const res = await axiosInstance.get('api/catalog/all');
    return res.data;
}