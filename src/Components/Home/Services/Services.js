import React from 'react';
import './Services.css';

const Services = ({ services }) => {
  return (
       <div className="col-md-4 pt-5 container for-services">
      <div className="productsCard">
        <img style={{ height: "200px", width: '280px' }} src={services.imageURL} alt="" />
        <div className="details">
         <h4 className="font-style">{services.name}</h4>
         <h5>${services.price}</h5>
         <button className="btn for-btn">See More</button> <button className="btn for-btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Services;