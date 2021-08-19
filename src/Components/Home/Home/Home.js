import React from 'react';
import About from '../About/About';
import Header from '../Header/Header'
import ManageServices from '../ManageServices/ManageServices';

const Home = () => {
  return (
    <div>
      <Header/>
      <About/>
      <ManageServices/>
    </div>
  );
};

export default Home;