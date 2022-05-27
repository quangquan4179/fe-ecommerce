import axiosInstance from "../custom_axios";

export const getAllAttendance = async (userId:string, month:number, year:number) => {
    const res = await axiosInstance.get("/attendance/view", {
      params: {
        userId,
        month,
        year,
      },
    });
    return res.data;
  };

  export const getDayOff = async (month:number, year:number) => {
    const { data } = await axiosInstance.get("/dayOff", {
      params: {
        month,
        year,
      },
    });
    let dayOffList = [];
    if (data.dayOffList !== "") {
      dayOffList = data.dayOffList.split(",").map((e:any) => parseInt(e));
    }
    return {
      dayOffList,
      month,
      year,
    };
  };
  
export const getStatusService = async (userId:string) => {
    const res = await axiosInstance.post("/attendance/getStatus", {
      userId,
    });
    return res.data;
};
  
export const checkService = async (type:string, ts:number, userId:string) => {
  const res = await axiosInstance.post("/attendance", {
    ts,
    type,
    userId,
    method: "PING",
  });
  return res;
};

  