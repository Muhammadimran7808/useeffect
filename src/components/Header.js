import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <h1>useEffect</h1>
      <div>
        <Link to={"/"}><h3>Home</h3></Link>
        <Link to={"/about"}><h3>About</h3></Link>
        <Link to={"/contact"}><h3>Contact us</h3></Link>
      </div>
    </div>
  )
}

export default Header