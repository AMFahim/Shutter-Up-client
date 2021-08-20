import React from 'react';
import Services from '../Services/Services';
import { useState } from 'react';
import { useEffect } from 'react';


const ManageServices = () => {
  const [service, setService] = useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data => setService(data))
  } , [])

  return (
    <div className="for-padding container text-center">
      <h2 className="font-style">[ WE PROVIDE <span className="for-US"><b>THE BEST SERVICES</b></span> ]</h2>
      <small className="text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde maxime, veritatis, soluta ut velit quasi voluptatum tempora.</small>
      <div className="justify-content-center text-center">
      <div className="row container justify-content-center">
      {
        service.map(services => <Services key={Object._id} services={services}></Services> )
      }
    </div>
    </div>
    </div>
  );
};

export default ManageServices;