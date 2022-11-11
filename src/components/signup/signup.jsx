import './signup.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contact, setContact] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const signUpSubmit = (e) => {
    e.preventDefault();
    
    const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("signup success",user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("signup errror",error);
    // ..
  });

  }
    return (
      <div id="signup-page">
        <div id="signup-container">
        <div id="signup-header">
        <span className='signup-title'>Create New Account</span>
        <span className='head-text'>It's easy and quick.</span>
        </div>
        <div id="signup-inputs-box">
          <form onSubmit={signUpSubmit}>
          <div className='input-col sm-col'>
            <input type="text" 
            placeholder="Your First Name" name='name' 
            className="fname-inp sm-field" 
            onChange={ (e) => {setFirstName(e.target.value)} }
            />
            <input type="text" 
            placeholder="Your Last Name" name='name' 
            className="lname-inp sm-field" 
            onChange={ (e) => {setLastName(e.target.value)} }
            />
          </div>
          <div className='input-col'>
            <input type="email" 
            placeholder="Enter your email" name='username'
            className="email-inp inp-field" 
            onChange={ (e) => {setEmail(e.target.value)} }
            />
          </div>
          <div className='input-col'>
            <input type="password" 
            placeholder="Create your password" name='new-password'
            className="password-inp inp-field" 
            onChange={ (e) => {setPassword(e.target.value)} }
            />
          </div>
          <div className='input-col'>
            <input type="password" 
            placeholder="Confrim password" name='new-password'
            className="cpassword-inp inp-field" 
            onChange={ (e) => {setConfirmPassword(e.target.value)} }
            />
          </div>
          <div className='input-col'>
            <input type="text" 
            placeholder="Contact Number" name='tel-country-code'
            className="contact-inp inp-field" 
            onChange={ (e) => {setContact(e.target.value)} }
            />
          </div>
          <div className='input-col'>
            Gender:<br/>
            <input type="radio" name='gender' value={`male`} />
            <label htmlFor="male" >Male</label>
            <input type="radio" name='gender' value={`female`} />
            <label htmlFor="male" >Female</label>
          </div>
          <button type="submit" id='signup-btn'>Sign Up</button>
          </form>
          <p><Link to={`../components/login/login`}>Already have an account?</Link></p>
        </div>
      </div>
      </div>
    );
  }
  
  export default SignUp;