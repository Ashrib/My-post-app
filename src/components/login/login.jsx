import './login.css'
const logInSubmit = (e) => {
  e.preventDefault();

  alert("hi");
}


function LogIn() {
    return (
      <div id="login-container">
        <h2>LogIn</h2>
        <div id="login-inputs-box">
          <form onSubmit={logInSubmit}>
          <div className='input-col'>
            <input type="text" placeholder="Enter your email" className="email-inp inp-field" />
          </div>
          <div className='input-col'>
            <input type="text" placeholder="Enter your password" className="password-inp inp-field" />
          </div>
          <button type="submit">Log in</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default LogIn;