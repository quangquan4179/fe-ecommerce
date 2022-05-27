import React from 'react'
import { DatePicker } from "@material-ui/pickers";
import { useState } from 'react'
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
// import { alpha } from '@material-ui/core/styles'
import DateFnsUtils from '@date-io/date-fns';
import { IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
type Props = {
    handleChange:any
}

const TimeComponent = ({handleChange}: Props) => {
    // const [selectedDate, handleDateChange] = useState(new Date());

    const [time, setTime] = useState({
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
      })

      const buttonIncrease = () => {
        let month, year,day
        month = time.month + 1
        year = time.year
       
    
        if (month > 12) {
          month = 1
          year += 1
        }
        setTime({ month, year})
        handleChange(month, year,day)
        // let date = new Date(year,month-1,day)
        // setValue(date)
      }
    
      const buttonDecrease = () => {
        let month, year
        month = time.month - 1
        year = time.year
   
    
        if (month === 0) {
          month = 12
          year -= 1
        }
        setTime({ month, year })
        handleChange(month, year)
      }
    
    
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} >

     <div className='flex '>
        <button onClick={buttonDecrease}>
            <IoIosArrowBack size={30}/>
            </button>
            <DatePicker
                openTo='month'
                // variant="inline"
                inputVariant="outlined"
                label="Search"

                format='MM/yyyy'
                value={`${time.year}-${time.month}`}
                onChange={ 
                    (newValue:any) => {
                        const month = newValue.getMonth() + 1
                        const year = newValue.getFullYear()
                        setTime({
                        month,
                        year,
                        })
                        handleChange(month, year)
                    }
                    }
    
        />
            <button onClick={buttonIncrease}>
                <IoIosArrowForward size={30}/>
            </button>
     </div>
       
    </MuiPickersUtilsProvider>
  )
}

export default TimeComponent