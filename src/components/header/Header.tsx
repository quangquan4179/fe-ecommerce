import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.css'
import {
  faBars,

  faBell,
  faEarthAfrica,
  faMagnifyingGlass,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
type Props = {}


const Header = (props: Props) => {
  const [open, setOpen]=useState<Boolean>(false)
  const handleOpen =()=>{
    setOpen(!open)
  }
  return (
    <header className='header__content bg-[#FFFFFF] h-16 shadow-sm grid lg:grid-cols-6' >
      <div className='togger'><FontAwesomeIcon icon={faBars}/></div>
      <div className='header__list col-start-6 flex justify-evenly  items-center sm:text-sm lg:text-lg md:text-base relative' >
        <button className='btn header__btn'>
          <FontAwesomeIcon icon={faEarthAfrica} />
        </button>
        <button className='btn header__btn'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <button className='btn header__btn'>
          <FontAwesomeIcon icon={faUserGroup} />
          <span>1</span>
        </button>
        <button className='btn header__btn' onClick={handleOpen}>
          <FontAwesomeIcon icon={faBell} />
          <span>1</span>
        </button>
        <button className='btn  header__avt '>
            <img src='/imgs/avt.jpg' alt='avt' className='rounded-full h-10'/>
        </button>
       {open?(
          <div className='absolute top-16 left-0-0 w-[300px] border-2 bg-[#FFFFFF] h-6' >
          aaaaaaa 
        </div>
       ):('')}
      </div>
    </header>
  )
}

export default Header