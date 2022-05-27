import React, { useEffect, useState } from 'react'
import { getDaysInMonthUTC } from '../../shared/date-time/getDaysInMonthUTC';
import TimeComponent from '../times/TimeComponent';
import TimekeepingStore from '../../stores/TimeKeepingStore'
import TableData from './TableData';
import { observer } from 'mobx-react-lite'
import ExportExcel from './ExportExcel';


type Props = {}

const TotalDataWorking = (props: Props) => {
  const [days, setDays] = useState<Date[]>();
  useEffect(() => {
    let month, year;
    const now = new Date();
    month = now.getMonth() + 1;
    year = now.getFullYear();
    TimekeepingStore.getAllTimekeepings(month, year)
    setDays(getDaysInMonthUTC(month - 1, year));

  }, [])


  const handleChangeMonth = (month: number, year: number) => {

    TimekeepingStore.getAllTimekeepings(month, year)
    setDays(getDaysInMonthUTC(month - 1, year));
  };
  return (
    <div className='mx-9 my-9'>
      <div>
        <h2 className='font-medium text-4xl'>Total Data Time Working</h2>

      </div>
      <div className='h-12 mt-6 mb-6 flex items-center'>
        <div >
          <TimeComponent handleChange={handleChangeMonth} />
        </div>
        <div>
          {days ? (<ExportExcel days={days} rows={TimekeepingStore.timekeepings} />
          ) : ('')}
        </div>
      </div>
      <div>

        {days ? (<TableData rows={TimekeepingStore.timekeepings}
          days={days}
          dayOffList={TimekeepingStore.dayOffList}
          remainingTime={(new Date(TimekeepingStore.year, TimekeepingStore.month, 0).getDate() - TimekeepingStore.dayOffList.length) * 8}
        />) : ('')}
      </div>

    </div>
  )
}

export default observer(TotalDataWorking)