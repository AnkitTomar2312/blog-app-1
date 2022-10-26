import './register.css'
import { Link } from 'react-router-dom'; 
export default function Register() {
  return (
    <div className='register'>
    <span className='registerTitle'>Register</span>
      <form className='registerForm'>
        <label>Username</label>
        <input type='text' className='registerInput' placeholder='Enter your Username...'></input>
        <label>Email</label>
        <input type='text' className='registerInput' placeholder='Enter your Email...'></input>
        <label>Password</label>
        <input type='text'  className='registerInput' placeholder='Enter your password...'></input>
        <button className='registerButton'>Register</button>
      </form>
      <button className='loginRegButton'><Link className='link' to="/login">Login</Link></button>
    </div>
  );
}
