import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error404 = () => {
  const navigate = useNavigate()
  return (
    <>
      <h1>404. Page not found</h1>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>

  )
}

export default Error404