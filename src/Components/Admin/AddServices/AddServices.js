import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Dashboard from '../Dashboard/Dashboard';


const AddServices = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [imageURL, setImageURL] = useState(null);



  const onSubmit = data => {
    // console.log(data);
    const eventData = {
      name: data.name,
      price: data.price,
      description: data.description,
      imageURL: imageURL
    }
    const url = `http://localhost:5000/addServices`;
    // console.log(eventData);
    fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
      .then(res => console.log('adding new event:', res))
  };
  const handleImageUpload = event => {
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', '46ba524bf4d6daba591164d58506f874');
    imageData.append('image', event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload',
      imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });


  }
  return (
    <div className="row">
      <div className="col-md-4">
        <Dashboard/>
      </div>
      <div className="col-md-8">
        <form onSubmit={handleSubmit(onSubmit)} className="container">
          <p>Service Name:-</p>
          <input style={{ width: "400px" }} className="form-control" placeholder="name" {...register("name")} />
          <br />
          <br />
          <p>Price:-</p>
          <input style={{ width: "400px" }} className="form-control" placeholder="Price" type="number" {...register("price")} />
          <br />
          <br />
          <p>Description:-</p>
          <textarea style={{ width: "400px" }} className="form-control" placeholder="Description" {...register("description")} />
          <br />
          <br />
          <input type="file" name="exampleRequired" onChange={handleImageUpload} />
          {/* {errors.exampleRequired && <span>This field is required</span>} */}
          <br />
          <br />
          <input className="btn btn-warning" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddServices;