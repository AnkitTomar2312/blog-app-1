import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
  const user =   false;
  return (
    <div className="top">
      <div className="topLeft">
      <i className=" topIcon fa-brands fa-twitter"></i>
      <i className=" topIcon fa-brands fa-pinterest"></i>
      <i className=" topIcon fa-brands fa-square-instagram"></i>
      <i className=" topIcon fa-brands fa-facebook"></i></div>
      <div className="topCenter">
      <ul className="topList">
        <li className="listItem">
          <Link className="link" to="/">HOME</Link>
        </li>
        <li className="listItem"><Link className="link" to="/">ABOUT</Link></li>
        <li className="listItem"><Link className="link" to="/">CONTACT</Link></li>
        <li className="listItem"><Link className="link" to="/write">WRITE</Link></li>
        <li className="listItem">  
        {user && "LOGOUT"}
        </li>
      </ul></div>
      <div className="topRight">
      {
        <>
        <img className="topImage" src="https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png" alt="User Image"></img> 
        <ul className="topList">
          <li  className="listItem"><Link className="link" to="/login">Login</Link></li>
          <li  className="listItem"><Link className="link" to="/register">Register</Link></li>
        </ul>
        </>
      }
          
     
      
        
        <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
