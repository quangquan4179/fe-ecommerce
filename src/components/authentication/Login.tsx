import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Login = (props: Props) => {
  return (
    <div className='login'>
        <div className='login__box'>
            <h3 className="login__header">
                Login
            </h3>
            <div className="login__form">
               <form className='form'>
                   <div className="form-group">

                       <input type="email" className="form-input"  placeholder=' '/>
                       <label className='form-label'>Email</label>
                   </div>
                   <div className="form-group">
                     
                       <input type="password" className="form-input" placeholder=' '/>
                       <label className='form-label'>Passsword</label>
                   </div>
                   <button className='btn btn-login'> Log In</button>

               </form>
            </div>
            <div className="login__nav">
                <Link to='/register' className="login__link">Create new account</Link>
                <Link to="/password-recovery" className="login__link">Forgot password</Link>
            </div>
        </div>
    </div>
  )
}

export default Login