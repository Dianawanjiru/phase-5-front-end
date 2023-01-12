import { useEffect, useState,React } from 'react';
import { Router, Route } from 'react-router-dom';
import Login from './Components/Login';
import ResetPasswordForm from './Components/PswdresetForm';

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
<></>
// {/* <Router>
// /**code goes here */
// {/* <Route exact path="/" component={Login} /> */}
// <Route exact path="/Forgot Password" component={ResetPasswordForm} />
//     </Router>
//    */}
  );
}

export default App;
