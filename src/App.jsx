import './App.css';
import {Route , Routes, Link} from 'react-router-dom';
import SignUp from './components/signup/signup.jsx';
import LogIn from './components/login/login.jsx';
import Home from './components/home/home';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  
  const [isLogin, setIsLogin] = useState(false);
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setIsLogin(true);
      const uid = user.uid;
      console.log("login success", user);
      // setIsHome(true)************
      // window.location.assign("http://localhost:3000/components/home/home");**********
      // ...
      } else {
        // User is signed out
      console.log("logout success");
      setIsLogin(false);
      // setIsHome(false)**************
      // ...
      }
    });

  }, []);
 

  //logout--------
  const logOutHandler = ()  => {
    setIsLogin(false);

  }


  return (
    <div id='body-div'>
      {
        (isLogin)?
        <nav>
        <ul>
          {/* <li><Link to={`./components/signup/signup`}>Logout</Link></li> */}
          <li onClick={logOutHandler}>Logout</li>
          <li><Link to={`./components/login/login`}>login</Link></li>
        </ul>
        </nav>
        :
        null
      }

      <div id='container'>
      <Routes>
        <Route path="/" element={<LogIn />}/>
        <Route path="/components/signup/signup" element={<SignUp />} />
        <Route path="/components/login/login" element={<LogIn />} />
        <Route path="*" element={<div>page not found</div>} />
        {/* {  **********************
        (isHome)?
        <Route path="/components/home/home" element={<Home />} />
        : null
        } */}
      </Routes> 
      </div> 
    </div>
  );
}

export default App;
