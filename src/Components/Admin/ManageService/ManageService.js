import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';
import AllService from '../AllService/AllService';
import Dashboard from '../Dashboard/Dashboard';

const ManageService = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [manageService, setManageService] = useState([])

  useEffect(() => {
    fetch('https://secret-escarpment-99943.herokuapp.com/services')
    .then(res => res.json())
    .then(data => setManageService(data))
  })
  return (
    <div className="row">
      <div className="col-md-2">
        <Dashboard/>
      </div>
      <div className="col-md-8 text-center pt-5">
        <h5 className="for-US font-style">Our All Services</h5>
        <AllService manageService={manageService}/>
      </div>
    </div>
  );
};

export default ManageService;