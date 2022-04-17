import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Calender from '../calender/Calender'
import Chat from '../chat/Chat'
import Header from '../header/Header'
import Mail from '../mail/Mail'
import Members from '../members/Members'
import Products from '../products/Products'
import Todos from '../todo/Todos'

type Props = {}

const Main = (props: Props) => {
  return (
    <div className='col-span-6 bg-[#F9FAFC]'>
      <Header/>
      <Routes>
       
          <Route path='todo' element={<Todos />} />
          <Route path='calender' element={<Calender />} />
          <Route path='chat' element={<Chat />} />
          <Route path='mail' element={<Mail />} />
          <Route path='products' element={<Products/>}/>        
          <Route path='members' element={<Members/>}/>
      </Routes>
    </div>
  )
}
export default Main