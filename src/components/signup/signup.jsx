import './signup.css';
import {Link} from 'react-router-dom';

const signUpSubmit = (e) => {
  e.preventDefault();
  alert("bye");
}


function SignUp() {
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
            <input type="text" placeholder="Your First Name" className="fname-inp sm-field" />
            <input type="text" placeholder="Your Last Name" className="lname-inp sm-field" />
          </div>
          <div className='input-col'>
            <input type="text" placeholder="Enter your email" className="email-inp inp-field" />
          </div>
          <div className='input-col'>
            <input type="text" placeholder="Create your password" className="password-inp inp-field" />
          </div>
          <div className='input-col'>
            <input type="text" placeholder="Confrim password" className="cpassword-inp inp-field" />
          </div>
          <div className='input-col'>
            <input type="text" placeholder="Contact Number" className="contact-inp inp-field" />
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