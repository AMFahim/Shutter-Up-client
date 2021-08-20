import React from 'react';
import Dashboard from '../Dashboard/Dashboard';

const ManageOrders = () => {
  return (
    <div className="row">
      <div className="col-md-4">
        <Dashboard/>
      </div>
      <div className="col-md-8">
        <h1>This is manage order page.</h1>
      </div>
    </div>
  );
};

export default ManageOrders;