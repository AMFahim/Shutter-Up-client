import React from 'react';
import './Header.css'
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar'

const Header = () => {
  return (
    <div className="setBackground">
      <div className="backgroundLayer">
        <Navbar></Navbar>
        <HeaderMain></HeaderMain>
      </div>
    </div>
  );
};

export default Header;