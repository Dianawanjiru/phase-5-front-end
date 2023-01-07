import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignupForm';

function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);
    return (
      <div className="container">
      <div className='row justify-content-center'>
    <div className='col-md-6 mt-4' style={{  backgroundColor:"#dede"  }} >
    <h2 className='text-center mt-4 font-weight-bold'>CA.RE.NTAL</h2>
         {
          showLogin
          ? (
              <>
                <LoginForm onLogin={onLogin} />
                <br />
                <p>
                  Don't have an account? &nbsp;
                  <a href='' onClick={() => setShowLogin(false)}>Sign Up</a>
                </p>
              </>
          )
          : (
              <>
                <SignUpForm onLogin={onLogin} />
                <br />
                <p>
                  Already have an account? &nbsp;
                  <a href='' onClick={() => setShowLogin(true)}>Log In</a>
                </p>
         
              </>
             
          )
        }
    </div>
        <div className='col-m-6'>  </div>
  </div>
  </div>
  
    );
  }
  
  export default Login;
 
  
