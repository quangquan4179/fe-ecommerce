import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import PasswordRecovery from './PasswordRecovery'
import Register from './Register'
type Props = {}

const Authentication = (props: Props) => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/password-recovery' element={<PasswordRecovery/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Authentication