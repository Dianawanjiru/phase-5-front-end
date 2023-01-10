import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignupForm';

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

                <p>
                    Forgot Password? <a >Reset</a>
                </p> 

                
                <p>
                  Don't have an account? <a className='link' onClick={() => setShowLogin(false)}>Sign Up</a>
                </p>
              </>
          )
          : (
              <>
                <SignUpForm onLogin={onLogin} />
                <br />
                <p>
                  Already have an account?
                  <a className='link' onClick={() => setShowLogin(true)}>Log In</a>
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
 
  
