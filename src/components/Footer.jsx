import React from 'react';
import '../App.scss'
import logo from '../assets/images/fidesium-logo-white.svg'

const footer = () => {
	return (

	    <div className="container-fluid footer mt-5 pt-5">
	      <div className="row justify-content-center">
	        <div className="col-xs-12 col-sm-4">
	          <a className="brand" href="#"><img src={logo} alt="Logo"></img></a>
	        </div>
	        <div className="col-xs-12 col-sm-2">
	          <h6>Company</h6>
	          <ul>
	            <li><a href="">About Us</a></li>
	            <li><a href="">Blog</a></li>
	          </ul>
	        </div>
	        <div className="col-xs-12 col-sm-2">
	          <h6>Pricing</h6>
	          <ul>
	            <li><a href="">Pricing</a></li>
	          </ul>
	        </div>
	        <div className="col-xs-12 col-sm-2">
	          <h6>Contact</h6>
	          <ul>
	            <li><a href="mailto:info@fidesium.xyz">info@fidesium.xyz</a></li>
	          </ul>
	        </div>
	      </div>
	      <div className="row justify-content-center">
	        <div className="col-xs-6 col-sm-5">
	          <p>Copyright @ Fidesium 2023. All Rights Reserved.</p>
	        </div>
	        <div className="col-xs-6 col-sm-5 terms">
	          <p>Terms and Conditions - Privacy Policy</p>
	        </div>
	      </div>
	    </div>

	);
};

export default footer;