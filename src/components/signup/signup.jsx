import './signup.css';

const signUpSubmit = () => {
  alert("bye");
}


function SignUp() {
    return (
      <div id="signup-container">
        <h2>SignUp</h2>
        <div id="signup-inputs-box">
          <form onSubmit={signUpSubmit}>
          <div className='input-col'>
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
            <input type="radio" value={`male`} />
            <label htmlFor="male">Male</label>
            <input type="radio" value={`female`} />
            <label htmlFor="male">Female</label>
          </div>
          <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default SignUp;