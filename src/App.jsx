
import './App.css';
import {Route , Routes, Link} from 'react-router-dom';
import SignUp from './components/signup/signup';
import LogIn from './components/login/login';

function App() {
  return (
    <div >
      <ul>
        <li><Link to={`./components/signup/signup`}>Signup</Link></li>
        <li><Link to={`./components/login/login`}>login</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<LogIn />}/>
        <Route path="tasks" element={<SignUp />} />
        <Route path="about" element={<LogIn />} />
      </Routes>  
    </div>
  );
}

export default App;
