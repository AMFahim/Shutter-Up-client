import React from 'react';
import About from '../Home/About/About';
import FooterPage from '../Home/FooterPage/FooterPage';
import Navbar from '../Home/Navbar/Navbar';

const AboutPage = () => {
  return (
    <div>
      <div className="bg-dark">
        <Navbar />
      </div>
      <About />
      <FooterPage/>
    </div>
  );
};

export default AboutPage;