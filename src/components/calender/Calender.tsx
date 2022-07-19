import React from 'react'
import type { CalendarMode } from 'antd/lib/calendar/generateCalendar';
import { Calendar } from 'antd';
import type { Moment } from 'moment';
type Props = {}

const Calender = (props: Props) => {
  const onPanelChange = (value: Moment, mode: CalendarMode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  return(
    <div className='w-[80%] m-auto' >
       <Calendar onPanelChange={onPanelChange} />
    </div>
  );
}

export default Calender