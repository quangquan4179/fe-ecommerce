import React, { ReactNode } from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from '../header/Header'

type RouteType={
  path:string,
  element: ReactNode

}
type Props = {
  routes:RouteType[]
}

const Main = ({routes}: Props) => {
  return (
    <div className='col-span-6 bg-[#F9FAFC]'>
      <Header/>
      <Routes>
        {routes.map((route:RouteType,index:number)=>(<Route path={route.path} element={route.element} key={index}/>))}
       
      </Routes>
    </div>
  )
}
export default Main