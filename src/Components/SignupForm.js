import React,{useState} from 'react';
import './styles/style.css'


function SignUpForm({onLogin}) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [success] = useState([]);
    
    const [isLoading, setIsLoading] = useState(false);
    
      function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
    
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            username,
            email,
            password,
            password_confirmation
          }),
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
    <h3 className='header'>SIGN UP</h3>
          <div className='card-body'>
            <form  onSubmit={handleSubmit} method="post">
            <div className='form-group'>
               <input id='fontinput'  type="text" placeholder='Full Name' onChange={(e) => setName(e.target.value)} value={name} id='name' required className='form-control' />
              </div>
              <br/>
              <div className='form-group'>
          
              <input type="text" placeholder='Enter Username' onChange={(e) => setUsername(e.target.value)} value={username} id='username' required className='form-control' />
              </div>
              <br/>
                <div className='form-group'>
              
                <input id='fontinput'  type="email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} value={email} required name='email' className='form-control' />
                </div> 
                <br/>

                <div>
              
              <input id='fontinput'  type="text" placeholder='Enter Phone Number' onChange={(e) => setPhonenumber(e.target.value)} value={phonenumber} required name='phonenumber' className='form-control'/>
              </div> 
                <br/>
                <div>
              
                <input id='fontinput'  type="password" placeholder='Enter Password' required name='password' onChange={(e) => setPassword(e.target.value)} value={password} className='form-control' />
                </div> 
                <br/>
                <div>
               
                <input id='fontinput'  type="password" placeholder='Confirm Paasword' onChange={(e) => setConfirmPassword(e.target.password_confirmation)} value={password_confirmation} id='confirmPassword' required className='form-control' />
                </div>


                <br/>
                 <div className='signupBtn'>
               <button id='btn' type='submit' className='btn btn-md  btn-block '> {isLoading ? "Loading..." : "SignUp"}</button>
                </div> 
            </form> 
                     {errors?.map((err) => (
             <div className='alert alert-danger rounded-0'key={err}>{err}</div>
            ))}
    
             {success?.map((msg) => (
             <div className='alert alert-success rounded-0'key={msg}>{msg}</div>
            ))}
               
          </div>
     
          </div>
              
          </div>
    
      );
    }
    
    export default SignUpForm;