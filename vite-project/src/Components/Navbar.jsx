import React from 'react'
import {Link, useNavigate } from "react-router-dom"
import "./Navbar.css";


const Navbar = ({token, setToken}) => {
    const navigate = useNavigate
    const handleLogout = () => {
        setToken(null)
        navigate("/login")
    }
  return (
    <nav className="navbar-container">
        <div>
            Capstone
        </div>
        <div className='link'>
            <Link className='nav-link' to={"/"}>
                Prodcuts
            </Link>

            {token ? (
            <button className='logout-button' onClick={handleLogout}>Logout</button> ): (
            <Link to="/login" className='nav-link'>
                login
            </Link>  
        )}
        </div>
    </nav>
  )
}

export default Navbar