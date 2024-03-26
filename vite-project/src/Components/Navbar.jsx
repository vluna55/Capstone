import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/signup"}>Signup</Link>
        <Link to={"/cart"}>Cart</Link>
        <Link to={"/login"}>Login</Link>
    </div>
  )
}

export default Navbar