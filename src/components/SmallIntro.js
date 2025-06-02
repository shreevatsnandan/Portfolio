import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const SmallIntro = () => {
  const isDesktop = window.innerWidth >= 768; // example threshold for mobile screens

  useEffect(() => {
    if (isDesktop) {
      AOS.init();
    }
  }, [isDesktop]);

  return (
    <div data-aos={isDesktop ? "fade-right" : undefined}
      data-aos-anchor-placement="top-center"
      data-aos-duration="1500"
      className='smallintro t'>
      <div className='small'>
      I'm a Full-Stack Developer with hands-on experience in React, Next.js, Node.js, PHP, and MySQL, building scalable and performant web applications. I'm currently upskilling in Express and MongoDB to deepen my backend capabilities. With professional experience at Rayds Services and BIC Ads Digital, I thrive on turning complex requirements into clean, efficient solutions — always learning, always shipping code that matters.
      </div>
    </div>
  );
};
