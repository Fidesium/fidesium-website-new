import React, { useEffect } from 'react';
import '../App.scss';


const logos = [
  'bondex.png',
  'degen.png',
  'dlclink.png',
  'oglong.png',
  'ordict.png',
  'zarban.png',
  'fore.png',
  // Add as many logos as you need
];

const LogoCarousel = () => {
  useEffect(() => {
    const logoContainer = document.querySelector('.logo-carousel-inner');
    const cloneLogos = () => {
      logoContainer.innerHTML += logoContainer.innerHTML; // Duplicate the logos for infinite scroll
    };
    cloneLogos();
  }, []);

  return (
    <div className="logo-carousel">
      <div className="logo-carousel-inner d-flex">
        {logos.map((logo, index) => (
          <div className="logo-container" key={index}>
            <img src={logo} alt={`logo-${index}`} className="img-fluid" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
