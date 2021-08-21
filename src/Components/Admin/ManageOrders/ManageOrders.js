import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';
import AllOrders from '../AllOrders/AllOrders';
import Dashboard from '../Dashboard/Dashboard';

const ManageOrders = () => {

  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
    .then(res => res.json())
    .then(data => setAllOrders(data))
  })
  return (
    <div className="row">
      <div className="col-md-2">
        <Dashboard/>
      </div>
      <div className="col-md-8 text-center">
        <h5 className="for-US">All Orders</h5>
          <AllOrders orders={allOrders}/>
      </div>
    </div>
  );
};

export default ManageOrders;