import React from 'react';
import FooterPage from '../Home/FooterPage/FooterPage';
import ManageServices from '../Home/ManageServices/ManageServices';
import Navbar from '../Home/Navbar/Navbar';

const ServicePage = () => {
  return (
    <div>
      <div className="bg-dark">
        <Navbar/>
      </div>
      <ManageServices/>
      <FooterPage/>
    </div>
  );
};

export default ServicePage;