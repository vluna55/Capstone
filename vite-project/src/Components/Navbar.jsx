import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='Navbar'>
        <Link to={"/"}>Home</Link>
        <Link to={"/signup"}>Signup</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/cart"}>Cart</Link>
    </div>
  )
}

export default Navbar