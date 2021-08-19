import React from 'react';
import './Portfolio.css';
import image from '../../../images/about.jpg';

const Portfolio = () => {
  return (
    <div class="container text-center for-padding">
      <div className="pb-5">
        <h3 className="font-style">[ OUR AWESOME <span className="for-US"><b>PORTFOLIO</b></span> ]</h3>
        <small className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, minus pariatur. Possimus nostrum inventore corrupti magnam at aliquam laborum nulla.</small>
      </div>
      <div>
        <div class="card-group">
          <div class="card for-border">
            <img src={image} class="card-img-top" alt="..." />
          </div>
          <div class="card for-border">
            <img src={image} class="card-img-top" alt="..." />
          </div>
          <div class="card for-border">
            <img src={image} class="card-img-top" alt="..." />
          </div>
        </div>
        <div class="card-group">
          <div class="card for-border">
            <img src={image} class="card-img-top" alt="..." />
          </div>
          <div class="card for-border">
            <img src={image} class="card-img-top" alt="..." />
          </div>
          <div class="card for-border">
            <img src={image} class="card-img-top" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;