import React from 'react';
import {Link} from "react-router-dom";
import "../App.css"
import HomeIcon from '@mui/icons-material/Home';
import { useAuth } from "../contexts/AuthContext.jsx"; 
import { useCart } from "../contexts/CartContext.jsx";
 
function NavBar() {
  const { cart } = useCart();
  const { isAuthenticated, handleLogout, userData } = useAuth(); 
    return ( 
      
    <nav className="navbar navbar-expand-lg border-bottom w-100" style={{backgroundColor:"white"}}>
    <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={{ flex: "0 0 auto" }}>
        <img src='/images/logo.avif' style={{width:"70px",height:"50px"}} className=''/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item" >
          <Link className="nav-link active" to="/menu">Menu</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/cart">Cart ({cart?.items?.length || 0})</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/order">Orders</Link>
        </li>
      </ul>
      <ul className="navbar-nav mb-2 mb-lg-0">
        {isAuthenticated ? (
              <>
              {userData?.username==="admin" ? (
                <>
                <Link to="/admin_dash" className="p-6">
                    <HomeIcon  sx={{ fontSize: 50, color: "black" }}/>
                </Link>
                <li className="nav-item">
                  <span className="nav-link active">
                    Hi, {userData?.username || "User"}
                  </span>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-link nav-link active"
                    onClick={handleLogout}
                    style={{ textDecoration: "none" }}
                  >
                    Logout
                  </button>
                </li>
                </>
              ):(
                <>
                <li className="nav-item">
                  <span className="nav-link active">
                    Hi, {userData?.username || "User"}
                  </span>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-link nav-link active"
                    onClick={handleLogout}
                    style={{ textDecoration: "none" }}
                  >
                    Logout
                  </button>
                </li>
                </>
              )}
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link active" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/signUp">
                    SignUp
                  </Link>
                </li>
              </>
            )}
      </ul>
    </div>
  </div>
        </nav>
     );
}

export default NavBar;