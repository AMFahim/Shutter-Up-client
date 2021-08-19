import React from 'react';
import './About.css';
import about from '../../../images/about.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <div className="pt-5">
      <div class="card mb-3 container card-style">
        <div class="row g-0">
          <div class="col-md-6">
            <img src={about} class="img-fluid rounded-start img-style" alt="About Us" />
          </div>
          <div class="col-md-6">
            <div class="card-body container-fluid text-center">
              <h1 class="card-title for-about">[ABOUT <span className="for-US">US</span>]</h1>
              <h3 className="pt-3 pb-3">We are excellent photographer and creative designer.</h3>
              <small className="card-text text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos odit aliquam quis modi ab dolor ea harum libero.</small>
              <br />
              <p>
                <small className="card-text text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit deleniti voluptatem, non accusamus perferendis numquam.</small>
              </p>
              <div className="icon-style">
              <a className="contactStyle" target="_blank" rel="noreferrer" href="https://www.facebook.com/" ><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
              <a className="contactStyle" target="_blank" rel="noreferrer" href="https://www.twitter.com/" ><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                <a className="contactStyle" target="_blank" rel="noreferrer" href="https://www.linkedin.com/" ><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
                <a className="contactStyle" target="_blank" rel="noreferrer" href="https://www.instagram.com/" ><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;