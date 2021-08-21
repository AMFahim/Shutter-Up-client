import React from 'react';

const AllService = ({manageService}) => {

  const handleDeleteService = (event, id) => {
    fetch(`https://secret-escarpment-99943.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(result => {
      if(result){
        event.target.parentNode.style.display= 'none'
      }
    })
  }
  return (
    <div className="row">
      <div className="text-center">
        <table className="table table-borderless">
          <thead>
            <tr>
              <th className="text-secondary text-left" scope="col">Sr No</th>
              <th className="text-secondary" scope="col">Name</th>
              <th className="text-secondary" scope="col">Price</th>
              <th className="text-secondary" scope="col">Manage</th>
            </tr>
          </thead>
          <tbody>
            {
              manageService && manageService.map((service, index) =>
                <tr>
                  <td>{index + 1}</td>
                  <td>{service.name}</td>
                  <td>{service.price}</td>
                  <td onClick={handleDeleteService}><button className="btn btn-danger">Delete</button></td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllService;