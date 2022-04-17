import React, { useEffect } from 'react'
import './sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBagShopping,
  faCalendarMinus,
  faClipboardList,
  faEnvelope,
  faMessage,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import CustomLink from './CustomLink'
type Props = {}

const Sidebar = (props: Props) => {
  
  

  

  
  return (
    <div className=' lg:col-span-1 h-screen bg-[rgb(17,24,39)] lg:sticky fixed top-0  overflow-scroll sidebar lg:left-0 left-[-30rem] font-thin'>
      <div className='sidebar__logo h-40 border-b border-[rgb(45,55,72)]'> logo</div>
      <div className='sidebar__list-box p-4'>
        <h3 className='sidebar__title  ' >Apps</h3>
        <ul className='sidebar__list flex flex-col mt-4 mb-4'>
          <CustomLink
            to='/todo'
      
          
            
          >
            <span className='sidebar__item-icon'>
              <FontAwesomeIcon icon={faClipboardList} />
            </span>
            Todo
          </CustomLink>
          <CustomLink to='/mail'   >
            <span className='sidebar__item-icon'>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            Mail
          </CustomLink>

          <CustomLink to='/chat' >
            <span className='sidebar__item-icon'>
              <FontAwesomeIcon icon={faMessage} />
            </span>
            Chat
          </CustomLink>
          <CustomLink
            to='/calender'
       
           
          >
            <span className='sidebar__item-icon '>
              <FontAwesomeIcon icon={faCalendarMinus} />
            </span>
            Calender
          </CustomLink>
        </ul>
        <h4 className='sidebar__title '>Management</h4>
        <ul className='sidebar__list flex flex-col  mt-4 mb-4'>
          <CustomLink
            to='/members'
            
           
          >
            <span className='sidebar__item-icon '>
              <FontAwesomeIcon icon={faUserGroup} />
            </span>
            Members
          </CustomLink>
          <CustomLink
            to='/products'
           
           
          >
            <span className='sidebar__item-icon'>
              <FontAwesomeIcon icon={faBagShopping} />
            </span>
            Products
          </CustomLink>
        </ul>
      </div>
      <div className='sidebar__footer'>
        <div className=' text-[#FFF]'>Need Help?</div>
        <p className='text-[rgb(93,114,105)] font-thin'>Check our docs</p>
        <button className='bg-[rgb(16,185,129)] w-full rounded-lg h-10 mt-4 text-[#FFF]'>Ducumentation</button>
      </div>
    </div>
  )
}

export default Sidebar


