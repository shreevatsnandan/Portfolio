import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Wrapper = ({ img, name, duration = 500 }) => {
  useEffect(() => { 
    window.innerWidth >= 768 && AOS.init() 
  }, []);

  return (
    <div 
      data-aos={window.innerWidth >= 768 ? "fade-down" : undefined} 
      data-aos-duration={duration} 
      className="toaster-card"
    >
      <img src={img} alt={name} className="toaster-img" />
      <span className="toaster-text">{name}</span>
    </div>
  )
}