import React from 'react'

type Props = {}

const PasswordRecovery = (props: Props) => {
  return (
    <div className='password-recovery'>
    <div className='password-recovery__box'>
        <h2 className="password-recovery__header">
            Password Recovery
        </h2>
        <p className="password-recovery__header-p">Tell us your email so we can send you a reset link</p>
        <div className="password-recovery__form">
           <form className='form'>
               <div className="form-group">

                   <input type="email" className="form-input"  placeholder=' '/>
                   <label className='form-label'>Email</label>
               </div>
               
               <button className='btn btn-password-recovery'> Recovery PassWord</button>

           </form>
        </div>
       
    </div>
</div>
  )
}

export default PasswordRecovery