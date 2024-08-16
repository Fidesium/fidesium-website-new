import { useState } from 'react'
import './App.scss'
import 'bootstrap'
import SVGbackground from './components/SVGbackground';
import Footer from './components/footer';
import Navigation from './components/navigation';
import logo from './assets/images/fidesium-logo-white.svg'
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
              <img src="/code-audit.svg" className="my-5"/>
              <h2>Code Audit</h2>
              <p className="p-5">Smart Contract and Risk audits using automation of open source libraries, fuzzing and custom LLMs to increase security, speed and accuracy in reporting.</p>
            </div>
            <div className="col-xs-12 col-sm-6 p-6">
              <img src="/deployed-audit.svg" className="my-5"/>
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