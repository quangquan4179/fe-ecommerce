
// import React, { useCallback, useEffect } from "react";

import {
  createTable,
  getCoreRowModelSync,
  // RowSelection,
  PaginationState,
  ColumnDef,
  useTableInstance,
  OnChangeFn,
  getColumnFilteredRowModelSync,
  getPaginationRowModel,
  // FiltersTableState,
  getGlobalFilteredRowModelSync,
  
  
} from '@tanstack/react-table'
import { User } from '../../interfaces/user'

import Member from '../members/Member'

/**
 * There's some boilter plate here
 * Important part is our globalFilter function
 * where we specify which columns to
 * filter
 * */


// interface TableProps<T extends object> {
// 
  // data: T[];
//   filters: string[]; // columns names to filter
//   filter: string[]; // Filter text
// }

/**
 * We have an Input in App.tsx which
 * passes the filter text
 */


 
export function Table({
  
  data,
  columns,
  pagination,
  setPagination,
  setGlobalFilter,
  globalFilter
}: {
  data: User[]
  columns: ColumnDef<typeof table.generics>[]
  pagination: PaginationState
  setPagination: OnChangeFn<PaginationState>
  setGlobalFilter: OnChangeFn<string>,
  globalFilter:string
  
}) {
  /**
   * Custom Filter Fucntion ----
   * Only filter by: code * name
   */
  
  
   const table = createTable<{ Row: User }>()
   
   const instance = useTableInstance(table, {
    data,
    columns,
    state: {
      pagination,
      globalFilter
    },
    onPaginationChange: setPagination,
    // Pipeline
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModelSync(),
    getColumnFilteredRowModel: getColumnFilteredRowModelSync(),
    getPaginationRowModel: getPaginationRowModel(),
    getGlobalFilteredRowModel: getGlobalFilteredRowModelSync(),
    //
    debugTable: true,
  })

//  console.log(instance.getState())

  return(
    <div>
       <table {...instance.getTableProps()}  className='table-auto w-full' >
        <thead >
          {instance.getHeaderGroups().map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} className="bg-[#F3F4F6] h-12">
              {headerGroup.headers.map(header => (
                <th {...header.getHeaderProps()} className='text-left'>
                  {header.isPlaceholder ? null : header.renderHeader()}
                </th>
              ))}
              <th>Actions</th>
            </tr>
          ))}
        </thead>
        <tbody {...instance.getTableBodyProps()}>
          {instance.getRowModel().rows.map((row,index) => {
            return <Member props={row.original} key={index}/>
           
          })}
          
        </tbody>
        
      </table>
       <div className="flex justify-end items-center gap-2 mt-4 ">
        <button
          className="border rounded p-1"
          onClick={() => instance.setPageIndex(0)}
          disabled={!instance.getCanPreviousPage()}
        >
          {'<<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => instance.previousPage()}
          disabled={!instance.getCanPreviousPage()}
        >
          {'<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => instance.nextPage()}
          disabled={!instance.getCanNextPage()}
        >
          {'>'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => instance.setPageIndex(instance.getPageCount() - 1)}
          disabled={!instance.getCanNextPage()}
        >
          {'>>'}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {instance.getState().pagination.pageIndex + 1} of{' '}
            {instance.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={instance.getState().pagination.pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              instance.setPageIndex(page)
            }}
            className="border p-1 rounded w-16"
          />
        </span>
        <select
          value={instance.getState().pagination.pageSize}
          onChange={e => {
            instance.setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-20 rounded-b-lg shadow-sm">{instance.getRowModel().rows.length} Rows</div>
    </div>
   
     
  );
}
