export const getDaysInMonthUTC = (month:number, year:number) => {
    var date = new Date(Date.UTC(year, month, 1))
    var days = []
    while (date.getUTCMonth() === month) {
      days.push(new Date(date))
      date.setUTCDate(date.getUTCDate() + 1)
    }
    return days
  }
  