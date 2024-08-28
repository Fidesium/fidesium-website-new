import Navigation from '../components/Navigation'
import Footer from '../components/Footer'


export default function Pricing() {
	return (
		<>
			<Navigation/>

		    <div className="container-fluid subContent">
		    	<div className="row justify-content-center">
		    		<div className="col-xs-12 content">

				    	<div className="section-title ptb-30">
				    		<h2>Real time automated risk assessments</h2>
				    		<p>Automatic due diligence at your fingertips</p>
				    	</div>

				    	<div className="row ptb-30">
				    		<div className="col-lg-4 col-sm-12 align-items-center ptb-30">
					    		<div className="price-box">
					    			<div className="price-head">
						    			<h3>Fid Basic</h3>
						    			<p><span>$399</span> / month</p>
						    			<a href="https://calendly.com/fidesium/20min" target="_blank" className="btn btn-outline-primary">Book Demo</a>
					    			</div>
					    			<div className="price-body">
						    			<h4>2 re-mint p/m</h4>
						    			<ul>
						    				<li>3 sub contracts</li>
						    				<li>Smart Contract Analysis</li>
						    				<li>AML / Suspicious Activity</li>
						    				<li>Market Risk Analysis</li>
						    				<li>Deployer Wallet Analysis</li>
						    				<li>Audit Snapshot History</li>
						    				<li>Email Support</li>
						    			</ul>
						    		</div>
						    	</div>
						    </div>
						    <div className="col-lg-4 col-sm-12 align-items-center ptb-30">
							    <div className="price-box">
								    <div className="price-head">
									    <h3>Fid Pro</h3>
									    <p><span>$799</span> / month</p>
						    			<a href="https://calendly.com/fidesium/20min" target="_blank" className="btn btn-outline-primary">Book Demo</a>
									</div>
									<div className="price-body">
									    <h4>5 re-mint p/m</h4>
									    <ul>
										    <li>7 sub contracts</li>
										    <li>Smart Contract Analysis</li>
										    <li>AML / Suspicious Activity</li>
										    <li>Market Risk Analysis</li>
										    <li>Deployer Wallet Analysis</li>
										    <li>Audit Snapshot History</li>
										    <li><strong>API Access</strong></li>
										    <li><strong>Chain Risk Analysis</strong></li>
										    <li>Email Support</li>
									    </ul>
								    </div>
							    </div>
						    </div>
						    <div className="col-lg-4 col-sm-12 align-items-center ptb-30">
						    	<div className="price-box">
						    		<div className="price-head">
						    			<h3>Fid Enterprise</h3>
						    			<p><span>$1499</span> / month</p>
						    			<a href="https://calendly.com/fidesium/20min" target="_blank" className="btn btn-outline-primary">Book Demo</a>
						    		</div>
						    		<div className="price-body">
						    			<h4>10 re-mint p/m</h4>
						    			<ul>
						    				<li>15 sub contracts</li>
						    				<li>Smart Contract Analysis</li>
						    				<li>AML / Suspicious Activity</li>
						    				<li>Market Risk Analysis</li>
						    				<li>Deployer Wallet Analysis</li>
						    				<li>Audit Snapshot History</li>
						    				<li>API Access</li>
						    				<li>Chain Risk Analysis</li>
						    				<li><strong>Custom Data Endpoints</strong></li>
						    				<li><strong>Robust Analytics</strong></li>
						    				<li><strong>Dedicated Support</strong></li>
						    			</ul>
						    		</div>
						    	</div>
						    </div>
						</div>
					</div>
				</div>
			</div>
			<Footer/>
		</>
	)
}



