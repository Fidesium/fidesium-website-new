import { useState } from 'react'
import './App.scss'
import 'bootstrap'
import SVGbackground from './components/SVGbackground';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LogoCarousel from './components/LogoCarousel';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navigation />


    <div className="container-fluid main banner">
      <SVGbackground />
      <div className="row justify-content-center">
        <div className="col-xs-12 col-sm-10 content">
          <h1>Recurring automated <span>smart contract</span> and <span>risk</span> audits</h1>
          <p>Security pre and post deployment</p>
          <a className="btn btn-outline-primary btn-lg" href="#" role="button">Signup</a>
        </div>
      </div>
    </div>

    <div className="container-fluid clients my-5 py-2">
      <div className="row">
        <div className="col-12">
          <h3>our clients</h3>
        </div>
      </div>
      <LogoCarousel />
    </div>

    <div className="container-fluid product my-5 py-2">
      <div className="row justify-content-center">
        <div className="col-xs-12 col-sm-10">
          <h3>web3 security<br/>code based and on chain</h3>
          <p>Fidesium takes security to the next level, not only making sure your smart contracts are error free, but also counterparty risk once your project is live.</p>
        </div>
      </div>
      <div className="row justify-content-center py-3">
        <div className="col-xs-12 col-sm-10 wrap-box">
          <div className="row">
            <div className="col-xs-12 col-sm-6 p-6">
              <svg width="128" height="135" viewBox="0 0 128 135" fill="none" xmlns="http://www.w3.org/2000/svg" className="my-5">
                <path d="M2 4C2 2.89543 2.89543 2 4 2H68.6476C69.1562 2 69.6458 2.19383 70.0166 2.54203L71.3857 1.08407L70.0166 2.54204L99.5945 30.3164C99.9971 30.6944 100.225 31.2221 100.225 31.7744V131C100.225 132.105 99.33 133 98.2254 133H4.00001C2.89543 133 2 132.105 2 131V4Z" stroke="#56CCF2" strokeWidth="4" className="scar-1"></path>
                <circle cx="27.7023" cy="40.9681" r="7.97399" stroke="#56CCF2" strokeWidth="2" className="scar-2"></circle>
                <path d="M36.6763 40.5781H110.029" stroke="#56CCF2" strokeWidth="2" className="scar-3"></path>
                <rect x="110.029" y="31.9941" width="17.948" height="17.948" rx="4" fill="#27AE60" className="scar-4"></rect>
                <circle cx="27.7023" cy="64.3785" r="7.97399" stroke="#56CCF2" strokeWidth="2" className="scar-5"></circle>
                <path d="M36.6763 63.9885H110.029" stroke="#56CCF2" strokeWidth="2" className="scar-6"></path>
                <rect x="110.029" y="55.4045" width="17.948" height="17.948" rx="4" fill="#F2E14C" className="scar-7"></rect>
                <circle cx="27.7023" cy="87.7889" r="7.97399" stroke="#56CCF2" strokeWidth="2" className="scar-8"></circle>
                <path d="M36.6763 87.3989H110.029" stroke="#56CCF2" strokeWidth="2" className="scar-9"></path>
                <rect x="110.029" y="78.8149" width="17.948" height="17.948" rx="4" fill="#27AE60" className="scar-10"></rect>
                <circle cx="27.7023" cy="111.199" r="7.97399" stroke="#56CCF2" strokeWidth="2" className="scar-11"></circle>
                <path d="M36.6763 110.809H110.029" stroke="#56CCF2" strokeWidth="2" className="scar-12"></path>
                <rect x="110.029" y="102.225" width="17.948" height="17.948" rx="4" fill="#F2B04C" className="scar-13"></rect>
              </svg>
              <h2>Code Audit</h2>
              <p className="p-5">Smart Contract and Risk audits using automation of open source libraries, fuzzing and custom LLMs to increase security, speed and accuracy in reporting.</p>
            </div>
            <div className="col-xs-12 col-sm-6 p-6">
              <svg width="158" height="139" viewBox="0 0 158 139" fill="none" xmlns="http://www.w3.org/2000/svg" className="my-5">
                <path d="M69.5 2C32.2208 2 2 32.2208 2 69.5H69.5V2Z" fill="#56CCF2" fillOpacity="0.5" className="svg-elem-1"></path>
                <path d="M137 69.5C137 32.2208 106.779 2 69.5 2L69.5 69.5L137 69.5Z" fill="#56CCF2" fillOpacity="0.7" className="svg-elem-2"></path>
                <path d="M2 69.5C2 106.779 32.2208 137 69.5 137L69.5 69.5L2 69.5Z" fill="#56CCF2" fillOpacity="0.2" className="svg-elem-3"></path>
                <path d="M137 69.5C137 32.2208 106.779 2 69.5 2C32.2208 2 2 32.2208 2 69.5C2 106.779 32.2208 137 69.5 137" stroke="#56CCF2" strokeWidth="4" className="svg-elem-4"></path>
                <circle cx="69.4999" cy="69.4999" r="3.11538" fill="#56CCF2" className="svg-elem-5"></circle>
                <circle cx="154.654" cy="69.4999" r="3.11538" fill="#56CCF2" className="svg-elem-6"></circle>
                <path d="M69.5 69.5H154.654" stroke="#56CCF2" strokeWidth="2" className="svg-elem-7"></path>
                <path d="M120.962 70.0193C120.962 98.7275 97.6889 122 68.9808 122C40.2726 122 17 98.7275 17 70.0193C17 41.3112 40.2726 18.0386 68.9808 18.0386C97.6889 18.0386 120.962 41.3112 120.962 70.0193Z" stroke="#56CCF2" strokeWidth="3" className="svg-elem-8"></path>
                <circle cx="68.9808" cy="70.0192" r="33.7885" stroke="#56CCF2" strokeWidth="2" className="svg-elem-9"></circle>
                <path d="M84.5769 69.5C84.5769 77.8268 77.8268 84.5769 69.5 84.5769C61.1733 84.5769 54.4231 77.8268 54.4231 69.5C54.4231 61.1733 61.1733 54.4231 69.5 54.4231C77.8268 54.4231 84.5769 61.1733 84.5769 69.5Z" stroke="#56CCF2" className="svg-elem-10"></path>
                <circle cx="99.6153" cy="96.5001" r="6.23077" fill="#EB5757" className="svg-elem-11"></circle>
                <circle cx="85.077" cy="43.5384" r="6.23077" fill="#EB5757" className="svg-elem-12"></circle>
                <circle cx="24.8462" cy="69.5001" r="6.23077" fill="#EB5757" className="svg-elem-13"></circle>
              </svg>
              <h2>Deployed Audit</h2>
              <p className="p-5">Real time scans of your contract and the risks present in it’s ecosystem. Evaluating AML, counterparty, flaws and other issues to help prevent loss.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center py-3">
        <div className="col-xs-12 col-sm-6">
          <a className="btn btn-outline-primary btn-lg" href="#" role="button">Signup</a>
        </div>
      </div>
    </div>

    <div className="container-fluid testimonials my-5 py-2">
      <div className="row justify-content-center">
        <div className="col-xs-12 col-sm-10">
          <h3>testimonials</h3>
          <p>Our clients love the speed, accuracy and cost of Fidesium automated audits</p>
        </div>
      </div>
      <div className="row justify-content-center py-3">
        <div className="col-xs-12 col-sm-10">
          <div className="row">
            <div className="col-xs-12 col-sm-6 p-6">
              <div className="wrap-box">
                <p className="p-5">Smart Contract and Risk audits using automation of open source libraries, fuzzing and custom LLMs to increase security, speed and accuracy in reporting.</p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 p-6">
              <div className="wrap-box">
                <p className="p-5">Real time scans of your contract and the risks present in it’s ecosystem. Evaluating AML, counterparty, flaws and other issues to help prevent loss.</p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 p-6">
              <div className="wrap-box">
                <p className="p-5">Smart Contract and Risk audits using automation of open source libraries, fuzzing and custom LLMs to increase security, speed and accuracy in reporting.</p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 p-6">
              <div className="wrap-box">
                <p className="p-5">Real time scans of your contract and the risks present in it’s ecosystem. Evaluating AML, counterparty, flaws and other issues to help prevent loss.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container-fluid process my-5 py-2">
      <div className="row justify-content-center">
        <div className="col-xs-12 col-sm-10">
          <h3>Review Process</h3>
          <p>Fidesium is easy to use, simply sign up and connect your Github and/or enter your contract address to get you audit.</p>
        </div>
      </div>
      <div className="row justify-content-center py-3">
        <div className="col-xs-12 col-sm-10">
          <div className="row">
            <div className="col-xs-12 col-sm-6 p-6">
              <img src="/code-audit.svg" className="my-5"/>
            </div>
            <div className="col-xs-12 col-sm-6 p-6 list">
              <div className="list-item-1">
                <span className="process-icon">1</span>
                <div className="process-text">
                  <h6>simulation</h6>
                  <p>Simulate contract on private RPS node</p>
                </div>
              </div>
              <div>
                <span className="process-icon">2</span>
                <div className="process-text">
                  <h6>analysis</h6>
                  <p>Static analysis using several open source libraries and proprietary detectors</p>
                </div>
              </div>
              <div>
                <span className="process-icon">3</span>
                <div className="process-text">
                  <h6>fuzzing</h6>
                  <p>Advanced fuzzing to check edge cases and expected outputs</p>
                </div>
              </div>
              <div className="list-item-4">
                <span className="process-icon">4</span>
                <div className="process-text">
                  <h6>scanning</h6>
                  <p>On-chain data analysis for AML, wallet issues and counterparty risk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container-fluid NFT my-5 py-2">
      <div className="row justify-content-center">
        <div className="col-xs-12 col-sm-10">
          <h3>Your audit minted on chain</h3>
          <p>Built trust with you investors, community and partners. Make it easy for others to do their awn research and support you.</p>
        </div>
      </div>
      <div className="row justify-content-center py-3">
        <div className="col-xs-12 col-sm-8">
            <img src="/nft.png" className="my-5"/>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-xs-12 col-sm-5 p-6">
          <div className="bullet-box">
            <h6>Build Trust</h6>
            <p>A record of good behaviour to create goodwill in your ecosystem</p>
          </div>
        </div>
        <div className="col-xs-12 col-sm-5 p-6">
          <div className="bullet-box">
            <h6>Get Listed</h6>
            <p>Smart contract audits are a must if you project is going to get listed</p>
          </div>
        </div>
        <div className="col-xs-12 col-sm-5 p-6">
          <div className="bullet-box">
            <h6>Find Investment</h6>
            <p>They don’t read them but investors like to know you have had them done</p>
          </div>
        </div>
        <div className="col-xs-12 col-sm-5 p-6">
          <div className="bullet-box">
            <h6>Scanning</h6>
            <p>Keep track of large trends after your project has launched</p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center py-3">
        <div className="col-xs-12">
          <a className="btn btn-outline-primary btn-lg" href="#" role="button">Signup</a>
        </div>
      </div>
    </div>

    <Footer />

    </>
  )
}

export default App