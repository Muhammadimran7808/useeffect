import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Contact() {
  return (
    <>
      <h1 style={{ marginTop: "10rem" }}>Contact</h1>
      <Link to={"insta"}><h4 className='contact'>Contact via instagram</h4></Link>
      <Link to={"mail"}><h4 className='contact'>Contact via Mail</h4></Link>
      <Outlet />
    </>

  )
}

export default Contact