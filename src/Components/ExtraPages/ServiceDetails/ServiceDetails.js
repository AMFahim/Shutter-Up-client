import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ServiceInfo from '../ServiceInfo/ServiceInfo';

const ServiceDetails = () => {
  const {serviceId} = useParams()
  const [ServiceDetail, setServiceDetail] = useState([])

  useEffect(() => {
    // const url = `http://localhost:5000/services?${serviceId}`;
    // const service = url.find(sr => sr._id == serviceId)
    // console.log(service)
    fetch(`http://localhost:5000/services?id=${serviceId}`)
    // .find(sr=> sr._id == serviceId)
    .then(res => res.json())
    .then(data => setServiceDetail(data))
  }, [serviceId])

  return (
    <div>
      {
       ServiceDetail && ServiceDetail.map(service => <ServiceInfo key={serviceId._id} services={service}></ServiceInfo>)
      }
    </div>
  );
};

export default ServiceDetails;