import { useEffect, useState,React } from 'react';
import {  Routes, Route} from 'react-router-dom';
import Login from './Components/Login';
import home from './Components/Pages/home';


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
{/*routes goes here */}
<Routes>
  <Route path='/' element={ <home /> }/>
</Routes>
</>

  );
}

export default App;
