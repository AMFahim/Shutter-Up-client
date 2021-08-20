import React from 'react';
import './Portfolio.css';
import boyFashion from '../../../images/boyFashion.jpg';
import journey from '../../../images/Journey.jpg';
import girlWithCamera from '../../../images/girlWithCamera.jpg';
import travellingCouple from '../../../images/travellingCouple.jpg';
import city from '../../../images/city.jpg';
import menFashion from '../../../images/menFashion.jpg';

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
            <img src={boyFashion} class="card-img-top" alt="..." />
          </div>
          <div class="card for-border">
            <img src={journey} class="card-img-top" alt="..." />
          </div>
          <div class="card for-border">
            <img src={girlWithCamera} class="card-img-top" alt="..." />
          </div>
        </div>
        <div class="card-group">
          <div class="card for-border">
            <img src={travellingCouple} class="card-img-top" alt="..." />
          </div>
          <div class="card for-border">
            <img src={city} class="card-img-top" alt="..." />
          </div>
          <div class="card for-border">
            <img src={menFashion} class="card-img-top" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;