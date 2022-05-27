export const formatTime = (ts:any) => {
    const tsInt = parseInt(ts)
    const date = new Date(tsInt)
    let a:number|string = date.getHours()
    let b:number|string = date.getMinutes()


    if (a < 10) {
      a   = '0' + a 
    }
    if (b < 10) {
      b = '0' + b
    }
  
    return a + ':' + b
  }
  