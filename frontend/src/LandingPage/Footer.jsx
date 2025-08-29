import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row">

          {/* Logo & About */}
          <div className="col-md-3 mb-4">
            <h4 className="fw-bold mb-4">The Dream Kitchen</h4>
            <p>
              Bringing flavors to life with fresh ingredients, warm ambiance, 
              and unforgettable dining experiences.
            </p>
            <img src="/images/logo.avif" style={{height:"10vh",width:"7vw"}}/>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-semibold">Quick Links</h5>
            <ul className="list-unstyled mt-4">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/menu" className="text-light text-decoration-none">Menu</Link></li>
              <li><Link to="/about" className="text-light text-decoration-none">About Us</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
              <li><Link to="/SignUp" className="text-light text-decoration-none">SignUp</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-semibold">Contact</h5>
            <p><i className="fa-solid fa-location-dot me-2 mt-4"></i> 123 Flavor Street, Food City, Lucknow</p>
            <p><i className="fa-solid fa-phone me-2"></i> +91 98765 43210</p>
            <p><i className="fa-solid fa-envelope me-2"></i> info@dreamkitchen.com</p>
          </div>

          {/* Social Media */}
          <div className="col-md-3 mb-5">
            <h5 className="fw-semibold">Follow Us</h5>
            <div className="d-flex gap-3" style={{paddingLeft:"80px",paddingTop:"20px"}}>
              <a href="#" className="text-light fs-4"><i className="fa-brands fa-facebook"></i></a>
              <a href="#" className="text-light fs-4"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className="text-light fs-4"><i className="fa-brands fa-twitter"></i></a>
              <a href="#" className="text-light fs-4"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center border-top pt-3 mt-3">
          <p className="mb-0">&copy; {new Date().getFullYear()} Dream Kitchen. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
