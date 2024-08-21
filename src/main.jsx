import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AboutUs from './pages/AboutUs.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/about' element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
