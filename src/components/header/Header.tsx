import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { observer } from 'mobx-react-lite'
import './Header.css'
import {
  faBars,

  faBell,
  faEarthAfrica,
  faMagnifyingGlass,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { MdClear, MdOutlineTipsAndUpdates } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import Authstore from '../../stores/Authstore'
import { getImgName } from '../../shared/img/getName'
type Props = {}


const Header = (props: Props) => {
  const navigate = useNavigate()
  const [open, setOpen] = useState<Boolean>(false)
  const [openSetting, setOpenSetting] = useState<Boolean>(false)

  const [openContact, setOpenContact] = useState<Boolean>(false)
  const [openSearch, setOpenSearch] = useState<Boolean>(false)
  const handleOpen = () => {
    setOpenContact(false)
    setOpenSetting(false);
    setOpen(!open) 
  }
  const handleOpenContact = () => {
    setOpenSetting(false);
    setOpen(false);
    setOpenContact(!openContact)

  }

  const handleClickSignOut=()=>{
    Authstore.logout()
    navigate('/login')

    window.location.reload()

  }

  return (
    <header className='header__content bg-[#FFFFFF] h-16 shadow-sm grid lg:grid-cols-6 md:grid-cols-2 sm:grid-cols-2' >
      <div className='togger lg:hidden'><FontAwesomeIcon icon={faBars} /></div>
      <div className='header__list lg:col-start-6 flex  justify-evenly md:col-start-2 sm:col-start-2  items-center sm:text-sm lg:text-lg md:text-base relative ' >
        <button className='btn header__btn sm:font-mono sm:text-sm sm:p-2'>
          <FontAwesomeIcon icon={faEarthAfrica} />
        </button>
        <button className='btn header__btn ' onClick={() => { setOpenSearch(true) }}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <button className='btn header__btn'>
          <FontAwesomeIcon icon={faUserGroup} onClick={handleOpenContact} />
          <span>1</span>
        </button>
        <button className='btn header__btn' onClick={handleOpen}>
          <FontAwesomeIcon icon={faBell} />
          <span>1</span>
        </button>
        <button className='btn  header__avt ' onClick={()=>{setOpenContact(false); setOpen(false);setOpenSetting(!openSetting); }}>

          {Authstore.user.avatarURL?(<img src={getImgName(Authstore.user.avatarURL)} alt='avt' className='rounded-full h-10 w-10 object-cover ' />):(
            <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
        </div>
          )}
          
        </button>

       {openSetting?( <div className='absolute top-14 lg:-left-[0%] md:-left-[20%] sm:-left-[100%] min-w-[250px] bg-[#FFFFFF] h-[250px] rounded-lg border border-slate-300 z-10'>

         <ul className='divide-y'>
           <li className='h-20'>
             <div className='flex items-center'>
             {Authstore.user.avatarURL?(<img src={getImgName(Authstore.user.avatarURL)} alt='avt' className='rounded-full h-10 w-10 object-cover ' />):(
                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                   <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                </div>
              )}
              <div>
                <p className='ml-4'>{Authstore.user.username}</p>
              </div>
             </div>
           </li>
           <li className='flex flex-col justify-start items-start h-24'>
             <button className='h-11 hover:bg-[#F7F8F8] w-full ' ><Link to ='/employee/setting'> Setting</Link></button>
             <button className='h-11 hover:bg-[#F7F8F8] w-full mt-1'><Link to={'/employee/profile'}>Profile</Link></button>
           </li>
          
            
           
           <li className='flex justify-center items-center' onClick={handleClickSignOut}><button className='hover:bg-[#F7F8F8] w-full m-auto h-full'>Sign out</button></li>

         </ul>
       </div>):('')}


        {open ? (
          <div className='fixed top-16 left-0-0 w-[540px] h-screen border-2 bg-[#FFFFFF] z-10' >
            aaaaaaa
          </div>
        ) : ('')}
        {openContact ? (<div className='fixed top-16 left-0-0 w-[540px] h-screen border-2 bg-[#FFFFFF] z-10 ' >
          bbbb
        </div>) : ('')
        }

        {openSearch ? (<div className='w-screen h-screen bg-[rgba(31,31,34,0.3)] fixed top-0 right-0 z-40' >

          <div className='fixed top-[50%] left-[50%] min-w-[300px] lg:min-w-[600px] lg:min-h-[250px] bg-[#FFFFFF] min-h-[400px] translate-x-[-50%] translate-y-[-50%] rounded-lg' >
            <div className='flex justify-between align-baseline bg-[#5048E5] rounded-t-lg h-16 items-center text-[#FFFFFF] ' >
              <div className='font-semibold ml-6'>Search</div>
              <div>
                <MdClear className='font-bold mr-6 w-full  cursor-pointer' onClick={() => setOpenSearch(false)} />
              </div>
            </div>
            <div className='flex justify-start items-center text-sm bg-[#F3F4F6] rounded-lg h-9 mt-4 ml-6 mr-6'>
              <span className='ml-4'><MdOutlineTipsAndUpdates className='fill-[#65748B] text-lg' /></span>
              <span className='text-[#65748B] font-semibold ml-2'>Tip.</span>
              <p className='block ml-4 text-[#65748B]'>Search by entering a keyword and pressing Enter</p>
            </div>
            <div className='mt-6'>
              <form className='relative ml-6 mr-6'>
                <div className='absolute inset-y-4 left-3'>
                  <AiOutlineSearch className='h-6 w-6 fill-slate-400' />
                </div>

                <input type="text" placeholder='Search ' className='placeholder:italic placeholder:text-slate-400 w-full h-14 border-[#E6E8F0] border-[1px] focus:border-[2px] focus:border-[#5048E5] outline-none rounded-lg pl-10 sm:text-sm peer' />

                <span className='absolute -top-2 left-5 text-sm bg-[#FFFFFF] text-[#B0B8C4] peer-focus:text-[#5048E5]'>Search</span>
              </form>
            </div>
          </div>

        </div>) : (<div></div>)}
      </div>
    </header>
  )
}

export default observer(Header)