import './login.css'
import {Link} from 'react-router-dom';

const logInSubmit = (e) => {
  e.preventDefault();

  alert("hi");
}


function LogIn() {
    return (
      <div id="login-page">
        <div id="login-container">
        <div id="login-header">
        <span className='login-title'>LogIn</span>
        </div>
        <div id="login-inputs-box">
          <form onSubmit={logInSubmit}>
          <div className='input-col'>
            <input type="text" placeholder="Enter your email" className="email-inp inp-field" />
          </div>
          <div className='input-col'>
            <input type="text" placeholder="Enter your password" className="password-inp inp-field" />
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