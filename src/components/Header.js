import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#fff" : "rgb(220, 220, 220)",
      textDecoration: isActive ? "none" : "underline"
    };
  };

  return (
    <div className='header'>
      <h1>useEffect</h1>
      <div>
        <NavLink className={"navElement"} style={navLinkStyles} to={'/'}>Home</NavLink>
        <NavLink className={"navElement"} style={navLinkStyles} to={'/about'}>About</NavLink>
        <NavLink className={"navElement"} style={navLinkStyles} to={"/contact"}>Contact us</NavLink>
      </div>
    </div>
  )
}

export default Header