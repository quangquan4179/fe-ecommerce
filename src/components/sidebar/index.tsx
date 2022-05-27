import React, { ReactNode } from 'react';
import { observer } from 'mobx-react-lite';
import './sidebar.css'

import ListItem from './ListItem'


type RouteType={
  path:string,
  name:string,
  element: ReactNode

}
type Props = {
  title:string
  routes:RouteType[]
}
type SidebarProps ={
  OurRoutes:Props[]
}
const Sidebar = (props: SidebarProps) => {
  
  

  

  
  return (
    <div className=' lg:col-span-1 h-screen bg-[rgb(17,24,39)] lg:sticky fixed top-0  overflow-scroll sidebar lg:left-0 left-[-30rem] font-thin'>
      <div className='sidebar__logo h-40 border-b border-[rgb(45,55,72)]'> logo</div>
      <div className='sidebar__list-box p-4'>
       {props.OurRoutes.map((routes:Props,index:number)=>(
         <ListItem routes={routes.routes} title={routes.title} key={index}/>))
         }
        
      </div>
      <div className='sidebar__footer'>
        <div className=' text-[#FFF]'>Need Help?</div>
        <p className='text-[rgb(93,114,105)] font-thin'>Check our docs</p>
        <button className='bg-[rgb(16,185,129)] w-full rounded-lg h-10 mt-4 text-[#FFF]'>Ducumentation</button>
      </div>
    </div>
  )
}

export default observer(Sidebar)


