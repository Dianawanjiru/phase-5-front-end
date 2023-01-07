import React,{useState} from 'react';


function SignUpForm({onLogin}) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
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
    <h6 className='alert alert-info rounded-0'>SIGN UP</h6>
          <div className='card-body'>
            <form  onSubmit={handleSubmit} method="post">
            <div className='form-group'>
               <input type="text" placeholder='Full Name' onChange={(e) => setName(e.target.value)} value={name} id='name' required className='form-control' />
              </div>
              <br/>
              <div className='form-group'>
          
              <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} value={username} id='username' required className='form-control' />
              </div>
              <br/>
                <div className='form-group'>
              
                <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} required name='email' className='form-control' />
                </div> 
                <br/>
                <div className='form-group'>
              
                <input type="password" placeholder='Password' required name='password' onChange={(e) => setPassword(e.target.value)} value={password} className='form-control' />
                </div> 
                <br/>
                <div className='form-group'>
               
                <input type="password" placeholder='Confirm Paasword' onChange={(e) => setConfirmPassword(e.target.password_confirmation)} value={password_confirmation} id='confirmPassword' required className='form-control' />
                </div>

                <br/>
                 <div className='signupBtn'>
               <button  type='submit' className='btn btn-md  btn-block '> {isLoading ? "Loading..." : "SignUp"}</button>
                </div> 
            </form> 
            <hr></hr>
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