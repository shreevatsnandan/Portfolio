
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Home = () => {
 
  const isDesktop = window.innerWidth >= 768; // example threshold for mobile screens

  useEffect(() => {
    if (isDesktop) {
      AOS.init();
    }
  }, [isDesktop]);

  const scrollToSection = (name) => {
  
    const element=document.getElementById(name);
    if(element){
      element.scrollIntoView({behavior:'smooth'})
    }
  };

  const Click=(url)=>{
    window.location.href=url;
  }
  
  useEffect(() => {
    const emailButton = document.getElementById("emailButton");
    if (emailButton) {
      emailButton.addEventListener("click", function () {
        window.location.href = "mailto:dhushyanthravichandran@gmail.com?subject=Subject%20Here&body=Hello%20Dhushyanth,";
      });
    }
});

  return (
    <div id="home">
      <div className="container">
         <span className="text first-text">Hi, I am </span><br/>
         <span className="text second-text">Shreevats Nandan</span>
       </div>




      <div className="home-content">
        <p>
          Full-Stack Web Developer skilled in React, PHP, and MySQL, passionate about building responsive web apps and enhancing backend expertise with Next.js. Experienced in client-focused development and dynamic project contributions.
        </p>

        
      </div>
      <div className="social-button">
        <button 
          onClick={()=>{Click("https://github.com/shreevatsnandan");}}
          >
          <i className="fa-brands fa-github" style={{ color: "#FFC107" }}></i>
        </button>
        <button   onClick={()=>{Click("https://www.linkedin.com/in/shreevats-nandan/");}}
        >
          <i
            className="fa-brands fa-linkedin-in"
            style={{ color: "#FFC107" }}
          ></i>
        </button>
        <button     onClick={()=>{Click(" https://leetcode.com/u/shreevatsnandan/");}}  >
          <i className="fa-solid fa-code" style={{ color: "#FFC107" }}></i>
        </button>
        <button id="emailButton">
          <i
            className="fa-regular fa-envelope"
            style={{ color: "#FFC107" }}
          ></i>
        </button>
       
      </div>
      <div className="home-button">
        
      <button  onClick={() => scrollToSection('about')}
      data-aos={isDesktop?"fade-down":undefined}  data-aos-duration="1200"
      >
          <i className="fa-solid fa-book-open" style={{ color: "#FFC107" }}></i>
          read my story<p>|</p>
          <p>About</p>
          <i class="fa-solid fa-arrow-right"></i>
        </button>


        <button  onClick={() => scrollToSection('projects')}
        data-aos={isDesktop?"fade-left":undefined}  data-aos-duration="1200"
        >
          <i className="fa-solid fa-code" style={{ color: "#FFC107" }}></i>
          <p>what i built</p>
          <p>|</p> <p>projects</p>
          <i class="fa-solid fa-arrow-right"></i>
        </button>

        
        <button
         onClick={()=>{Click("https://drive.google.com/file/d/1u_-xJDu58h__SjDOiF4sQxfaQm3aOZHM/view?usp=sharing");
          scrollToSection('contact')
          } 
        }
        >
          <i
            className="fa-solid fa-user-group"
            style={{ color: "#FFC107" }}
          ></i>{" "}
          hire me<p>|</p>
          <p>resume</p>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div className="arrow-down">
      <button  onClick={() => scrollToSection('about')} >
           <i className="fa-solid fa-angles-down" style={{ color: "#FFC107" }}></i>
      </button>
      </div>
    </div>
  );
};


