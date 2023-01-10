import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignupForm';
import ResetPasswordForm from './PswdresetForm';

function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);
    return (
      <div className="container">
      <div>
    <div className='loginForm' >
    <h1 className='logoName'>CA.R.ENTAL</h1>
         {
          showLogin
          ? (
              <>
                <LoginForm onLogin={onLogin} />

                <p className='option'>
                    Forgot Password? <a id='passwordReset' onClick={()=> setShowLogin(false)}>Reset</a>
                </p> 

                
                <p className='option'>
                  Don't have an account? <a className='link' onClick={() => setShowLogin(false)}>Sign Up</a>
                </p>
              </>
          )
          : (
              <>
            
                <SignUpForm onLogin={onLogin} />
                <br />
                <p className='option'>
                  Already have an account?
                  <a className='link' onClick={() => setShowLogin(true)}>Log In</a>
                </p>
         
              </>
             
          )
          
          // (
          //   <>
          //    <br/>
          //    <ResetPasswordForm onLogin={onLogin}/>
          //     <br/></>
          // )
        }
    </div>
        <div>  </div>
  </div>
  </div>
  
    );
  }
  
  export default Login;
 
  
