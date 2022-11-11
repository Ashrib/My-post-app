import './App.css';
import {Route , Routes, Link, Navigate } from 'react-router-dom';
import SignUp from './components/signup/signup.jsx';
import LogIn from './components/login/login.jsx';
import Home from './components/home/home.jsx';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

function App() {
  
  const [isLogin, setIsLogin] = useState(false);
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setIsLogin(true);
      const uid = user.uid;
      console.log("login success", user);
      // setIsHome(true)//************
      // ...
    } else {
      // User is signed out
      console.log("logout ");
      setIsLogin(false);
      // setIsHome(false)**************
      // ...
      }
    });


    return () => {
      unSubscribe();
    }

  }, []);
 

  //logout--------
  const logOutHandler = ()  => {
    setIsLogin(false);
    // window.location.assign("http://localhost:3000/components/home/home");//**********
    
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("logout success");
    }).catch((error) => {
  // An error happened.
});



  }


  return (
    <div id='body-div'>
      {
        (isLogin)?
        <nav>
        <ul>
          {/* <li><Link to={`./components/signup/signup`}>Logout</Link></li> */}
          <li onClick={logOutHandler}>Logout</li>
          {/* <li><Link to={`./components/login/login`}>login</Link></li> */}
        </ul>
        </nav>
        :
        null
      }

      <div id='container'>
      {/* <Routes>
        <Route path="/" element={<LogIn />}/>
        <Route path="/components/signup/signup" element={<SignUp />} />
        <Route path="/components/login/login" element={<LogIn />} />
        <Route path="/components/home/home" element={<Home />} />
        <Route path="*" element={<div>page not found</div>} /> */}
        {(isLogin) ?

          <Routes>
  <Route path="/" element={<Home />} />
  <Route path="*" element={<Navigate to="/" replace={true} />} />
          </Routes>
        :
        <Routes>
  <Route path="/" element={<LogIn />}/>
  <Route path="/components/signup/signup" element={<SignUp />} />
  <Route path="/components/login/login" element={<LogIn />} />
  {/* <Route path="/components/home/home" element={<Home />} /> */}
  <Route path="*" element={<div>page not found</div>} />
  <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
        }
      {/* </Routes>  */}
      </div> 
    </div>
  );
}

export default App;
