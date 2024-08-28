import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Pricing from './pages/Pricing.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsAndConditions from './pages/TermsAndConditions.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/About' element={<AboutUs />} />
        <Route path='/Pricing' element={<Pricing />} />
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
        <Route path='/TermsAndConditions' element={<TermsAndConditions />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
