import './App.css';
import {Route , Routes, Link} from 'react-router-dom';
import SignUp from './components/signup/signup.jsx';
import LogIn from './components/login/login.jsx';

function App() {
  return (
    <div >
      <nav>
      <ul>
        <li><Link to={`./components/signup/signup`}>Signup</Link></li>
        <li><Link to={`./components/login/login`}>login</Link></li>
      </ul>
      </nav>
      <div id='container'>
      <Routes>
        <Route path="/" element={<LogIn />}/>
        <Route path="/components/signup/signup" element={<SignUp />} />
        <Route path="/components/login/login" element={<LogIn />} />
        <Route path="*" element={<div>page not found</div>} />
      </Routes> 
      </div> 
    </div>
  );
}

export default App;
