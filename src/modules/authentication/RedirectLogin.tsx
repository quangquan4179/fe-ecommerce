import React, { ReactElement, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'


interface Props{
  component: ReactElement
}
function RedirectLogin ( props:Props){
  const isLoggedIn = Boolean(localStorage.getItem('accessToken'));
  if(!isLoggedIn) return <Navigate to="/login" />
  return props.component
}

export default RedirectLogin