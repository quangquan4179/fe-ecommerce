import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './login.css'

import { useNavigate } from 'react-router-dom';
import Authstore from '../../stores/Authstore';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline, useGoogleLogout } from 'react-google-login';
type Props = {}
// interface googleAuthInt {
//     profileObj: Object;
//     tokenId: string;
//     googleLoginResponse: GoogleLoginResponse | GoogleLoginResponseOffline;
//     onLoginSuccess:GoogleLoginResponse | GoogleLoginResponseOffline;

//  }
 interface IData {
    personalEmail: string,
    password: string
  }


const Login = (props: Props) => {
    const [formData, setFormData] = useState<IData>({
        personalEmail: '',
        password: '',
      });
    const {  personalEmail, password }: {  personalEmail: string, password: string } = formData;
    const handleChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const clientId = process.env.REACT_APP_CLIENT_ID as string ;
    const navigate = useNavigate();


    const [showloginButton, setShowloginButton] = useState(true);
    // const [showlogoutButton, setShowlogoutButton] = useState(false);


    const {signOut } = useGoogleLogout({
        onLogoutSuccess:()=>{},
        clientId: clientId,
        cookiePolicy: 'single_host_origin',
        onFailure:()=>{}
    })
    const onLoginSuccess =async (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        setShowloginButton(false);
        const out = res as GoogleLoginResponse
        await Authstore.loginWithGoogleStore(out.tokenId)
        signOut();
        navigate('/');  
    };

    const onLoginFailure = (res:GoogleLoginResponse) => {
        console.log('Login Failed:', res);
    };

    // const onSignoutSuccess =() => {
    //     alert("You have been logged out successfully");
    //     console.clear();
    //     setShowloginButton(true);
       
    // };
    const onHandleSubmit = async(event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();

        if(personalEmail!==''&&password!==''){
            navigate('/');
            await Authstore.loginStore(personalEmail, password);
        
        }
        
       


    } 
  return (

<div className='login col-span-7'>
        <div className='login__box rounded-lg shadow-md '>
            <h3 className="login__header">
                Login
            </h3>
            
            <div className="login__form">
               <form className='form' onSubmit={onHandleSubmit}>
                   <div className="form-group">

                       <input type="email" className="form-input"  placeholder=' ' name='personalEmail'onChange={handleChange}/>
                       <label className='form-label'>Email</label>
                   </div>
                   <div className="form-group">
                     
                       <input type="password" className="form-input" placeholder=' ' name='password' onChange={handleChange}/>
                       <label className='form-label'>Passsword</label>
                   </div>
                   <button className='btn btn-login font-medium rounded-lg text-lg h-12'> Sign in</button>

               </form>
            </div>
            <div>
            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In with Google"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                    className='w-full  mt-10 font-semibold'
                /> : null}

            
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