import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
                  Don't have an account? <button className='link' onClick={() => setShowLogin(false)}>Sign Up</button>
                </p>
              </>
          )
          : (
              <>
      
                <SignUpForm onLogin={onLogin} />
                <div>
                <p className='option'>
                  Already have an account?
                  <button className='link' onClick={() => setShowLogin(true)}>Log In</button>
                </p>
              </div>
              </>
             
          )
          
                }
    </div>
        <div>  </div>
  </div>
  </div>
  
    );
  }
  
  export default Login;
 
  
