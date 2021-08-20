import React from 'react';
import './ServiceInfo.css';

const ServiceInfo = (props) => {
  console.log(props)
  const {name, imageURL, description, price} = props.services
  return (
    <div>
      <div className="text-center pt-5 container">
      <img style={{maxHeight:"300px"}} className="pt-3" src={imageURL} alt="" />
      <h3 className="font-style pt-3"><span className="for-US">{name}</span> details</h3>
      <h4 className="for-US">Price: ${price}</h4>
      <p>{description}</p>
    </div>
    </div>
  );
};

export default ServiceInfo;