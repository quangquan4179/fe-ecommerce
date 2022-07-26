import React from 'react'
import { Link } from 'react-router-dom'
import './register.css'
type Props = {}

const Register = (props: Props) => {
  return (
    <div className='register col-span-7'>
    <div className='register__box'>
        <h3 className="register__header">
            Register
        </h3>
        <div className="register__form">
           <form className='form'>
               <div className="form-group">

                   <input type="email" className="form-input"  placeholder=' '/>
                   <label className='form-label'>Email</label>
               </div>
               <div className="form-group">
                 
                   <input type="password" className="form-input" placeholder=' '/>
                   <label className='form-label'>Passsword</label>
               </div>
               <button className='btn btn-register font-medium rounded-lg text-lg h-12'> Register</button>

           </form>
        </div>
        <div className="register__nav">
            <Link to='/' className="register__link">Having an account</Link>
          
        </div>
    </div>
</div>
  )
}

export default Register