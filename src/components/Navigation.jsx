import React from 'react';
import '../App.scss'
import logo from '../assets/images/fidesium-logo-white.svg'

const navigation = () => {
	return (
	    <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
	      <div className="container-fluid">
	        <a className="brand" href="#"><img src={logo} alt="Logo"></img></a>
	        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
	          <span className="navbar-toggler-icon"></span>
	        </button>
	        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
	          <ul className="navbar-nav ml-auto mb-2 mb-md-0">
	          <li className="nav-item dropdown">
	            <a className="btn nav-link dropdown-toggle" id="dropdown01" role="button" data-bs-toggle="dropdown" aria-expanded="false">Company</a>
	            <div className="dropdown-menu" aria-labelledby="dropdown01">
	              <a className="dropdown-item" href="#">About</a>
	              <a className="dropdown-item" href="#">Blog</a>
	            </div>
	          </li>
	            <li className="nav-item">
	              <a className="btn nav-link" href="#">Pricing</a>
	            </li>
	            <li className="nav-item">
	              <a className="btn btn-outline-primary" href="#">Signup</a>
	            </li>
	          </ul>
	        </div>
	      </div>
	    </nav>
	);
};

export default navigation;