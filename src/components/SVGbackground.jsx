import React, { useEffect } from 'react';
import '../App.scss'

const SVGbackground = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      document.querySelector('.rect1').style.transform = `translateY(${scrollPosition * 0.07}px)`;
      document.querySelector('.rect2').style.transform = `translateY(${scrollPosition * 0.05}px)`;
      document.querySelector('.rect3').style.transform = `translateY(${scrollPosition * 0.04}px)`;
      document.querySelector('.rect4').style.transform = `translateY(${scrollPosition * 0.04}px)`;
      document.querySelector('.rect5').style.transform = `translateY(${scrollPosition * 0.03}px)`;
      document.querySelector('.rect6').style.transform = `translateY(${scrollPosition * 0.03}px)`;
      document.querySelector('.rect7').style.transform = `translateY(${scrollPosition * 0.02}px)`;
      document.querySelector('.rect8').style.transform = `translateY(${scrollPosition * 0.02}px)`;
      document.querySelector('.rect9').style.transform = `translateY(${scrollPosition * 0.01}px)`;
      document.querySelector('.rect10').style.transform = `translateY(${scrollPosition * 0.01}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <svg className="svg-background" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <rect className="rect1" x="-16" y="16" width="32" height="32" fill="#56CCF2" opacity="0.1"></rect>
        <rect className="rect2" x="80" y="24" width="24" height="24" fill="#56CCF2" opacity="0.05"></rect>
        <rect className="rect3" x="0" y="40" width="24" height="24" fill="#56CCF2" opacity="0.1"></rect>
        <rect className="rect4" x="16" y="56" width="16" height="16" fill="#56CCF2" opacity="0.05"></rect>
        <rect className="rect5" x="64" y="64" width="16" height="16" fill="#56CCF2" opacity="0.2"></rect>
        <rect className="rect6" x="72" y="8" width="16" height="16" fill="#56CCF2" opacity="0.025"></rect>
        <rect className="rect7" x="72" y="40" width="16" height="16" fill="#56CCF2" opacity="0.025"></rect>
        <rect className="rect8" x="8" y="56" width="8" height="8" fill="#56CCF2" opacity="0.1"></rect>
        <rect className="rect9" x="48" y="64" width="8" height="8" fill="#56CCF2" opacity="0.05"></rect>
        <rect className="rect10" x="88" y="64" width="8" height="8" fill="#56CCF2" opacity="0.2"></rect>
      </svg>
  );
};

export default SVGbackground;