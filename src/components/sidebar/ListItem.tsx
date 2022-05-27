import React, { ReactNode } from 'react'
import CustomLink from './CustomLink'


type RouteType={
    path:string,
    name:string,
    element: ReactNode
  
  }
  type Props = {
    title:string
    routes:RouteType[]
  }

const ListItem = ({title,routes}: Props) => {
  return (
    <div>
        <h3 className='sidebar__title  ' >{title}</h3>
        <ul className='sidebar__list flex flex-col mt-4 mb-4'>
            {routes.map((route:RouteType,index:number)=>(
                 <CustomLink
                 to={route.path} 
                 key={index} 
               >
                 <span className='sidebar__item-icon'>
                   {route.element}
                 </span>
                 {route.name}
               </CustomLink>
            ))}

         
          
        </ul>
    </div>
  )
}

export default ListItem