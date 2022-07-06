import axiosInstance from "../custom_axios";

export const createProject  = async (data:any) => {
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    const res = await axiosInstance.post("project/create", data, config);
    return res.data;
};