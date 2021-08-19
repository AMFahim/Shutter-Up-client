import React from 'react';
import Services from '../Services/Services';
import about from '../../../images/about.jpg'

const service =[
  {
    title: "Wedding Photography",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tenetur, rerum qui tempora necessitatibus dignissimos repellat nesciunt nam laboriosam pariatur autem ut, sapiente atque quaerat harum, eaque vitae eveniet at?",
    image: about,
    price: "300"
  },
  {
    title: "Wedding Photography",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tenetur, rerum qui tempora necessitatibus dignissimos repellat nesciunt nam laboriosam pariatur autem ut, sapiente atque quaerat harum, eaque vitae eveniet at?",
    image: about,
    price: "300"
  },
  {
    title: "Wedding Photography",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tenetur, rerum qui tempora necessitatibus dignissimos repellat nesciunt nam laboriosam pariatur autem ut, sapiente atque quaerat harum, eaque vitae eveniet at?",
    image: about,
    price: "300"
  }
]

const ManageServices = () => {
  return (
    <div className="for-padding container text-center">
      <h2 className="font-style">[ WE PROVIDE <span className="for-US"><b>THE BEST SERVICES</b></span> ]</h2>
      <small className="text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde maxime, veritatis, soluta ut velit quasi voluptatum tempora.</small>
      <div className="justify-content-center text-center">
      <div className="row container justify-content-center">
      {
        service.map(services => <Services services={services}></Services> )
      }
    </div>
    </div>
    </div>
  );
};

export default ManageServices;