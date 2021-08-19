import React from "react";
import './FooterPage.css';
import logo from '../../../images/Logo.png';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from "@material-ui/core";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4 bg-dark text-white">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <img style={{height:'100px'}} src={logo} alt="" />
          </MDBCol>
          <MDBCol md="4">
          <a className="footerIcon" target="_blank" rel="noreferrer" href="https://www.facebook.com/" ><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
              <a className="footerIcon" target="_blank" rel="noreferrer" href="https://www.twitter.com/" ><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                <a className="footerIcon" target="_blank" rel="noreferrer" href="https://www.linkedin.com/" ><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
                <a className="footerIcon" target="_blank" rel="noreferrer" href="https://www.instagram.com/" ><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="title for-US">Shutter Up</h5>
            <ul>
              <li className="list-unstyled">
                <Link className="text-white" href="#!">About</Link>
              </li>
              <li className="list-unstyled">
                <Link className="text-white" href="#!">Portfolio</Link>
              </li>
              <li className="list-unstyled">
                <Link className="text-white" href="#!">Team</Link>
              </li>
              <li className="list-unstyled">
                <Link className="text-white" href="#!">Contact Us</Link>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a className="text-white" style={{textDecoration:"none"}} href="https://abdul-mozid-fahim.netlify.app/"> Abdul Mozid Fahim </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;