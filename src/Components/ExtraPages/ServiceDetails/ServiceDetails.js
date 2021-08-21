import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Home/Navbar/Navbar';
import ServiceInfo from '../ServiceInfo/ServiceInfo';

const ServiceDetails = () => {
  const { serviceId } = useParams()
  const [ServiceDetail, setServiceDetail] = useState([])

  useEffect(() => {
    fetch(`https://secret-escarpment-99943.herokuapp.com/services?id=${serviceId}`)
      .then(res => res.json())
      .then(data => setServiceDetail(data))
  }, [serviceId])

  return (
    <div>
      <div className="bg-dark">
        <Navbar />
      </div>
      {
        ServiceDetail && ServiceDetail.map(service => <ServiceInfo key={serviceId._id} services={service}></ServiceInfo>)
      }
    </div>
  );
};

export default ServiceDetails;