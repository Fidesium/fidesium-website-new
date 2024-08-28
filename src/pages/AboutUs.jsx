import Navigation from '../components/Navigation'
import Footer from '../components/Footer'


export default function AboutUs() {
	return (
		<>
			<Navigation/>

		    <div className="container-fluid subContent">
		      <div className="row justify-content-center">
		        <div className="col-xs-12 col-sm-10 about">
					<h2>About Fidesium</h2>
					<p>Fidesium was started as a side project for Abe just to protect him and some of his degen friends. 
					It has since grown to cast a larger net of protection for the whole ecosystem. 
					Providing a service that provides Web3 security tools and code auditing services using the best open source tooling as well as in house rules and algorithms.
					We also incorporate the best practices from insure techs to protect our clients post deployment.</p>
		        </div>

		        <div className="col-xs-12 col-sm-10 about">
					<h2>Our Mission</h2>
					<p>Fidesiums mission is to help onboard the next billion users to Web3. 
					We believe protecting the Web3 space so that projects can innovate with confidence and offer reliable safe serveices to end users.
					Fidesium is dedicated to helping projects launch the most secure and reliable projects possible and lay the groundwork for a healthy growing ecosystem.</p>
		        </div>

		        <div className="col-xs-12 col-sm-10 about team">
					<h2>The Team</h2>
					<p>Crypto degens since 2017. We have been stung by many scams, frauds and exploits. 
					We are both on a personal mission help security catch up to the growth of the ecosystem.</p>
		        </div>
				<div className="col-xs-12 col-sm-5 founder">
					<img src="/bock-profile.jpeg"/>
					<h5>Greg Bock - CEO 
					<a href="https://twitter.com/bockus" target="_blank"><img src="/x-logo.svg"/></a> 
					<a href="https://www.linkedin.com/in/greg-bock-4591814/" target="_blank"><img src="/linkedin.svg"/></a></h5>
					<p>15 years in startups, delivering enterprise solutions for high street retail and banks.
					Building products that adhear to the highest industry security standards.</p>
				</div>
					
				<div className="col-xs-12 col-sm-5 founder">
					<img src="/abe-profile.png"/>
					<h5>Abraham Polishchuk - CTO 
					<a href="https://twitter.com/cryptoabe4" target="_blank"><img src="/x-logo.svg"/></a> 
					<a href="hhttps://www.linkedin.com/in/abraham-polishchuk-022a2628/" target="_blank"><img src="/linkedin.svg"/></a></h5>
					<p>15 years leading dev teams and using large data sets to compute actuarial risk in real time.
					Writing and auditing many smart contracts along the way.</p>
				</div>
		      </div>
		    </div>

			<Footer/>
		</>
	)
}