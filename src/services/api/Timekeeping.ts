import axiosInstance from "../custom_axios";

export const getTimekeepingAllUserService = async (month:number, year:number) => {
    const res = await axiosInstance.get("/timekeeping", {
      params: {
        month,
        year,
      },
    });
  
    return res.data;
  };
  