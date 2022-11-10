import './login.css'
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const logInSubmit = (e) => {
    e.preventDefault();
  
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
    console.log("login success",user);
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    console.log("login errror",error);
  });
  }


    return (
      <div id="login-page">
        <div id="login-container">
        <div id="login-header">
        <span className='login-title'>LogIn</span>
        </div>
        <div id="login-inputs-box">
          <form onSubmit={logInSubmit}>
          <div className='input-col'>
            <input type="email" name='username'
            placeholder="Enter your email" className="email-inp inp-field" 
            onChange={ (e) => {setEmail(e.target.value)} }
            />
          </div>
          <div className='input-col'>
            <input type="password" name='current-password'
            placeholder="Enter your password" className="password-inp inp-field" 
            onChange={ (e) => {setPassword(e.target.value)} }
            />
          </div>
          <button type="submit" id='login-btn'>Log In</button>
          </form>
        </div>
          <Link to={`../components/signup/signup`}><button type="submit" id='signup-btn'>Create New Account</button></Link>
      </div>
      </div>
    );
  }
  
  export default LogIn;