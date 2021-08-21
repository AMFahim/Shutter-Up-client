import React from 'react';
import './CheckOut.css';
import CheckOutImg from '../../../images/checkOut.svg';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';
import Navbar from '../../Home/Navbar/Navbar';

const CheckOut = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = data => {
    const orderData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address
    }

    fetch('https://secret-escarpment-99943.herokuapp.com/addOrders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    })
      .then(res => res.json())
      .then(success => {
        if (success) {
          alert('Your Order Successfully Done');
          Redirect('/home')
        }
      })

  }

  return (
    <div>
      <div className="bg-dark">
        <Navbar />
      </div>
      <div className="row container align-center">
        <div className="col-md-6 pt-5">
          <img style={{ maxWidth: "280px" }} src={CheckOutImg} alt="" />
        </div>
        <div className="col-md-6">
          <div className="pt-5">
            <h1 className="for-US">Hello</h1>
            <p className="text-secondary">Give the information below</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input className="form-control input-style" type="text" placeholder="Name" {...register("name")} required /> <br />
            <input className="form-control input-style" type="email" placeholder="Email" {...register("email")} required /> <br />
            <input className="form-control input-style" type="tel" placeholder="Phone" {...register("phone")} required /> <br />
            <input className="form-control input-style" type="text" placeholder="Address" {...register("address")} required /> <br />
            <input className="rounded" type="submit" value="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;