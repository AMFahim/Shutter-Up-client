import React from 'react';
import './HeaderMain.css';

const HeaderMain = () => {
  return (
    <div className="container pt-5">
      <h1 className="text-white modern-font">We Are Modern</h1>
      <h1 className="text-white font-size"><span className="photographer">PHOTOGRAPHER</span></h1>
      <h1 className="teller text-white"><span className="setUnderline">& best</span> story teller</h1>
      <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor nulla natus illum sed sint, hic nesciunt in iure aspernatur id et nemo mollitia voluptatum officiis corporis ullam doloremque odio alias possimus repellat minima. Esse quasi molestiae, tenetur sed labore ullam eligendi harum deleniti ipsa natus adipisci ipsum odio sit commodi?</p>
      <br />
      <br />
      <button className="btn btn-warning view-btn">View Our Works</button>
    </div>
  );
};

export default HeaderMain;