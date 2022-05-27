import React, { useState, useMemo, useEffect } from 'react'

import { RiDownloadLine, RiUploadLine } from 'react-icons/ri'
import { AiOutlineSearch } from 'react-icons/ai'
import { observer } from 'mobx-react-lite'

// import { data } from '../../mocks/MOCK_DATA';
import { Table } from '../table/Table'
import { createTable, PaginationState } from '@tanstack/react-table';
import {User} from '../../interfaces/user'
import AdminStore  from '../../stores/AdminStore';
import { Link } from 'react-router-dom'
type Props = {}
// interface state {
//   width: number
//   left: number
// }


const Members = (props: Props) => {
  // const [size, setSize] = useState<state | any>({
  //   width: 0,
  //   left: 0,
  // })
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
    pageCount: -1, // -1 allows the table to calculate the page count for us via instance.getPageCount()
  })
  const [globalFilter, setGlobalFilter] = React.useState('')

  const [selected, setSelected] = useState('Name');
  // const inputEl = useRef<HTMLSpanElement>(null);
  // const btnref = useRef<HTMLButtonElement>(null)

  





  useEffect(()=>{
    AdminStore.getUsers();
  },[])





  // const handerClickTab = (e: any) => {
  //   console.log(btnref.current?.offsetLeft)
  //   console.log(btnref.current?.offsetWidth)
  //   setSize({ width: btnref.current?.offsetWidth, left: btnref.current?.offsetLeft })
  // }
  const onHandleChange=(event: React.ChangeEvent<HTMLSelectElement>)=> {

    setSelected(event.target.value);
    console.log(selected)
  }
  let table = createTable<{ Row: User }>()
  const columns = useMemo(
    () => table.createColumns([

      table.createDataColumn(row => row.username,{
        id: 'Name',
        cell: info => info.value,
        header: () => <span>Name</span>,

      }),
      table.createDataColumn(row => row.location, {
        id: 'Location',
        cell: info => info.value,
        header: () => <span>Location</span>,

      }),
      table.createDataColumn(row => row.personalEmail, {
        id: 'Position',
        cell: info => info.value,
        header: () => <span>Position</span>,

      }),
      table.createDataColumn(row=>row.dateOfBirth,{
        id: 'DateOfBirth',
        cell: info => info.value,
        header: () => <span>Date of birth</span>,
      }),
      table.createDataColumn(row=>row.dateAtWork,{
        id: 'DateAtWork',
        cell: info => info.value,
        header: () => <span>Date at Work</span>,
      }),
      table.createDataColumn(row => row.dateOfBirth, {
        id: 'address',
        cell: info => info.value,
        header: () => <span>Address</span>,

      })
    ])
    , [table]
  )
 


  return (
    <div className='ml-4 mr-4'>

      <div className='flex mt-16 justify-between items-center'>
        <div>
          <h1 className='font-medium text-4xl '>Members</h1>
        </div>
        <div>
          <Link to='/dashboard/members/add'><button className='bg-[#5048E5] text-[#FFFFFF] font-bold mr-4 w-24 pt-2 pb-2 rounded-lg'>+Add</button></Link>
        </div>
      </div>
      <div className='flex mt-9 mb-9'>
        <button className='flex items-center text-[#5048E5] font-medium hover:bg-[#F2F3FB] rounded-lg pt-2 pb-2 pl-5 pr-5'>
          <RiUploadLine />
          <p className='ml-2'>Import</p>

        </button>
        <button className='flex items-center text-[#5048E5] font-medium ml-4 hover:bg-[#F2F3FB] rounded-lg pt-2 pb-2 pl-5 pr-5'>
          <RiDownloadLine />
          <p className='ml-2'>Export</p>
        </button>

      </div>

      <div className='bg-[#FFFFFF]'>

        <div className='flex p-4'>
          <form className='relative grow-[7] '>
            <div className='absolute inset-y-4 left-3'>
              <AiOutlineSearch className='h-6 w-6 fill-slate-400' />
            </div>

            <input type="text" placeholder='Search Members '  className='placeholder:italic placeholder:text-slate-400 w-full h-14 border-[#E6E8F0] border-[1px] focus:border-[2px] focus:border-[#5048E5] outline-none rounded-lg pl-10 sm:text-sm'  onChange={e => setGlobalFilter(e.target.value)}  value={globalFilter ?? ''}/>
          </form>
          <div className='members__sort grow-[1] relative ml-8 flex items-center pl-2'>


            <select id="sort" className='w-full h-14 border-[#E6E8F0] border-[1px] focus:border-[2px] focus:border-[#5048E5] outline-none rounded-lg peer' value={selected} onChange={onHandleChange} >
              <option value="DateAtWork">Date At Work</option>
              <option value="DateOfBirth">Date Of Birth</option>
              <option value="MSNV">MSNV</option>
              <option value="Name">Name</option>
            </select>
            <label htmlFor="sort" className='members__sort-label absolute -top-[0.8rem] left-3 bg-[#FFFFFF] peer-focus:text-[#5048E5] italic'>Sort by</label>
          </div>

        </div>

        <div>
        <Table
            data={AdminStore.users}
            columns={columns}
            pagination={pagination}
            setPagination={setPagination}
            setGlobalFilter={setGlobalFilter}
            globalFilter={globalFilter}
       
      />
        </div>

      </div>


    </div>
  )
}

export default observer(Members)