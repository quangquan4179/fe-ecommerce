import axiosInstance from "../custom_axios";

export const setDayOffService = async (dates:any) => {
    if (dates.length > 0) {
      const datesArray = dates.map((date:any) => date.day);
      const datesString = datesArray.join(",");
    //   // {month, dates[0].getMonth(), year: dates[0].getFullYear(), dayOffList: datesString}
      const month = dates[0].month.number
      const year = dates[0].year;
      const res = await axiosInstance.post("/dayoff", {
        dayOffList: datesString,
        month,
        year,
      });
      return res.data;
    }
  };
  