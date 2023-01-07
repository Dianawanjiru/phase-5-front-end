import React, {useState} from 'react';
import style from './styles/style.css'

const LoginForm = ({onLogin}) =>{ 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    // const [showLogin, setShowLogin] = useState(true);
    
      function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({username, password }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((user) => onLogin(user));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }
     return ( 
      
    
      <div className="login-card"> 
     
    
        <div className='card'>
           <div className='card-body'>
    
    <h3>LOGIN</h3>
            <form  onSubmit={handleSubmit}>
              <div className='form-group'>
     
                <input type="email" id='email' placeholder='Enter Email Address' onChange={(e) => setUsername(e.target.value)}   required className='form-control' />
             </div>   
             <br/>
                 <div className='form-group'>
               
                <input type="password" required name='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)}  className='form-control' />
                </div>

                <div>
                    <p>Don't have an account? <a href='#'>Sign Up</a></p> 
                    <p>Forgot Password? <a href='#'>Reset</a></p> 
                    </div>
<br/>
                 <div>
               <button type='submit' >{isLoading ? "Loading..." : "Login"}</button>
                </div> 
                </form> 
            <div>
              <hr></hr>
    
            {errors?.map((err) => (
             <div className='alert alert-danger rounded-0'key={err}>{err}</div>
            ))}
                
                </div>
          </div>
          </div>
              
          </div>
    
      );
    }

export default LoginForm;