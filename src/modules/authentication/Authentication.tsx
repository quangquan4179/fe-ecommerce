import React from 'react'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './Login'
import PasswordRecovery from './PasswordRecovery'
import Register from './Register'
import  AuthStore from '../../stores/Authstore'
type Props = {}

const Authentication = (props: Props) => {

  if(AuthStore.isAuthentication===false)
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Navigate to="/login"  />}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/password-recovery' element={<PasswordRecovery/>}/>
          
          </Routes>
      </BrowserRouter>)
    
  else{
    return <div></div>
  }
}

export default Authentication