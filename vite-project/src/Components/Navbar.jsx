import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ token, setToken }) => {
  const navigate = useNavigate;
  const handleLogout = () => {
    setToken(null);
    navigate("/login");
  };
  return (
    <nav className="navbar-container">
      <div>Capstone</div>
      <div className="link">
        <Link className="nav-link" to={"/"}>
          Products
        </Link>

        <Link to="/register" className="nav-link">
          Register
        </Link>

        {token ? (
          <>
            <Link className="nav-link" to={"/cart"}>
              Cart
            </Link>
            <Link className="nav-link" to={"/checkout"}>
              Checkout
            </Link>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="nav-link" >
            login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
