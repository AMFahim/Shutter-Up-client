import React from 'react';
import FooterPage from '../Home/FooterPage/FooterPage';
import Navbar from '../Home/Navbar/Navbar';
import Portfolio from '../Home/Portfolio/Portfolio';

const PortfolioPage = () => {
  return (
    <div>
      <div className="bg-dark">
        <Navbar/>
      </div>
      <Portfolio/>
      <FooterPage/>
    </div>
  );
};

export default PortfolioPage;