import React from 'react';
import About from '../About/About';
import Footer from '../FooterPage/FooterPage';
import Header from '../Header/Header'
import ManageServices from '../ManageServices/ManageServices';
import Portfolio from '../Portfolio/Portfolio';
import Team from '../Team/Team';

const Home = () => {
  return (
    <div>
      <Header/>
      <About/>
      <ManageServices/>
      <Portfolio/>
      <Team/>
      <Footer/>
    </div>
  );
};

export default Home;