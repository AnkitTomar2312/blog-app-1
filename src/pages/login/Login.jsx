import { Link } from 'react-router-dom';
import './login.css'

export default function Login() {
  return (
    <div className='login'>
    <span className='loginTitle'>Login</span>
      <form className='loginForm'>
        <label>Email</label>
        <input type='text' className='loginInput' placeholder='Enter your Email...'></input>
        <label>Password</label>
        <input type='text'  className='loginInput' placeholder='Enter your password...'></input>
        <button className='loginButton'>Login</button>
      </form>
      <button className='RegisterButton'><Link className='link' to="/register">Register</Link></button>
    </div>
  );
}
