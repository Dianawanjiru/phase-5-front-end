import { useEffect, useState,React } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Components/Login';
import ResetPasswordForm from './Components/PswdresetForm';
import SignUpForm from './Components/SignupForm';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


  if (!user) return <Login onLogin={setUser} />;

  return (
<>
<Router>
  <Routes>
  <Route path='/' element={<Login/>}></Route>
  <Route path='/ForgotPassword' element={<ResetPasswordForm/>}></Route>
  <Route path='/signup' element={<SignUpForm/>}></Route>
  </Routes>
</Router>
</>

  );
}

export default App;
