import { useEffect, useState,React } from 'react';
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
/**code goes here */
    </>
  
  );
}

export default App;
