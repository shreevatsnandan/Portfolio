import React from 'react'
import { ContactContent } from './ContactContent'
export const Contact = () => {
  return (
    <div>
    
    <div id='contact' className='contact'>
              <div className='contact-writeup'>
                <p className='contact-heading' style={{position:"relative", left:"10px"}}>Get in Touch.</p>
                      <ContactContent/>
              </div>

         <div className="end-page">
             <div className="column">
                 <p style={{textAlign:"center"}}>Contact me</p>
                 <p>shreevatsnandan@gmail.com</p>
             </div>
             <div className="column">
              <p style={{textAlign:"center"}}>stay connected </p> 
                  <div className="social-links"> 
                        <a href="https://www.linkedin.com/in/shreevats-nandan/">LinkedIn</a> |
                        <a href="https://github.com/shreevatsnandan">GitHub</a> |
                        <a href="https://leetcode.com/u/shreevatsnandan/">Leetcode</a> |
                        <a href="https://drive.google.com/file/d/1u_-xJDu58h__SjDOiF4sQxfaQm3aOZHM/view?usp=sharing">Resume</a>
                 </div> 
            </div>
            <div className="column">
            
            <p>Last updated June, 2025</p>
        </div>
     </div>
    </div>
    </div>

  )
}
