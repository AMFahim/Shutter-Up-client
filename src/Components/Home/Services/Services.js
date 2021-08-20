import { Link } from 'react-router-dom';
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
         <Link to={"/details/"+services._id}><button className="btn for-btn">See More</button> </Link> <Link to="/checkOut"><button className="btn for-btn">Buy Now</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Services;