import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../../images/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
      <nav className="navbar font-style navbar-expand-lg navbar-light container">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand" href="#"><img className="imgStyle" src={logo} alt="Shutter Up" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon className="for-US" icon={faBars}></FontAwesomeIcon>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active text-white text-bg" aria-current="page" href="#">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white text-bg" href="#">ABOUT US</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white text-bg" href="#">SERVICES</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white text-bg" href="#">PORTFOLIO</Link>
              </li>
              <li className="nav-item">
                <Link to="/signin" className="nav-link text-white text-bg" href="#">SIGN IN</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white text-bg" href="#">CONTACT US</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Header;