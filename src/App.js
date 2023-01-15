import { useEffect, useState,React } from 'react';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Components/Login';


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
</>

  );
}

export default App;
