export const formatTotalTime = (miliSecond:number) => {
    let hour:number|string = Math.floor(miliSecond / (1000 * 60 * 60))
    if (hour < 10) {
      hour = '0' + hour
    }
    let minute:number|string = Math.round((miliSecond / (1000 * 60 * 60) - Number(hour) ) * 60)
    if (minute < 10) {
      minute = '0' + minute
    }
    return hour + ':' + minute
  }
  