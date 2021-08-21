import React from 'react';

const AllOrders = ({orders}) => {
  return (
    <div className="row">
      <div className="text-center">
        <table className="table table-borderless">
          <thead>
            <tr>
              <th className="text-secondary text-left" scope="col">Sr No</th>
              <th className="text-secondary" scope="col">Name</th>
              <th className="text-secondary" scope="col">Email</th>
              <th className="text-secondary" scope="col">Phone</th>
              <th className="text-secondary" scope="col">Address</th>
            </tr>
          </thead>
          <tbody>
            {
              orders && orders.map((order, index) =>
                <tr>
                  <td>{index + 1}</td>
                  <td>{order.name}</td>
                  <td>{order.email}</td>
                  <td>{order.phone}</td>
                  <td>{order.address}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrders;