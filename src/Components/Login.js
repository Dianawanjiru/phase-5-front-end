import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignupForm';

function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);
    return (
      <div className="container">
      <div className='row justify-content-center'>
    <div className='loginForm' >
    <h2 className='logoName'>CA.RE.NTAL</h2>
         {
          showLogin
          ? (
              <>
                <LoginForm onLogin={onLogin} />
                <p>
                  Don't have an account?
                  <a onClick={() => setShowLogin(false)}>Sign Up</a>
                </p>
              </>
          )
          : (
              <>
                <SignUpForm onLogin={onLogin} />
                <br />
                <p>
                  Already have an account?
                  <a className='btn   btn-block btn-light text-primary ' onClick={() => setShowLogin(true)}>Log In</a>
                </p>
         
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
 
  
