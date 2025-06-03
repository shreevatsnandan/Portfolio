import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
    const WorkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
  </svg>
);
  const experiences = [
    {
      id: 1,
      company: "Rayds Services Limited",
      position: "Web Developer",
      duration: "November 2024 - Present",
      points: [
        "Built dynamic websites using LAMP stack.",
        "Contributed to travel tech web apps ",
        "Gained full-stack development experience"
      ],
      icon: <WorkIcon />, 
    },
    {
      id: 2,
      company: "Bicads Digital",
      position: "Web Developer Intern",
      duration: "July 2024 - October 2024",
      points: [
        "Implemented interactive and reusable UI components using React",
        "Worked directly with 10+ clients to understand and meet their website needs. "
      ],
      icon: <WorkIcon />,
    }
  ];

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", marginTop: "40px" }}>
         <p className="project-heading">Professional <span style={{color:"#FFC107"}}>Experience</span> </p>
      <VerticalTimeline lineColor="#ddd">
        {experiences.map((exp) => (
          <VerticalTimelineElement
            key={exp.id}
            date={exp.duration}
            dateClassName="date"
            iconStyle={{    
              color: '#000',
              boxShadow: '0 0 0 4px #ddd, inset 0 2px 0 rgba(0,0,0,.08)',
              zIndex: '5'
            }}
            contentStyle={{
              background: '#1f1f21',
              color: '#000',
              borderRadius: '8px',
              padding: '20px'
            }}
            contentArrowStyle={{
              borderRight: '7px solid rgba(255,255,255,0.8)'
            }}
            icon={exp.icon}
          >
            <h3 style={{ 
              margin: 0, 
              fontSize: '1.2rem',
              fontWeight: 600 
            }}>
              {exp.position}
            </h3>
            <h4 style={{ 
              margin: '5px 0 10px', 
              fontSize: '1rem',
              fontWeight: 500 
            }}>
              {exp.company}
            </h4>
            <ul style={{
              paddingLeft: '20px',
              margin: '10px 0 0'
            }}>
              {exp.points.map((point, index) => (
                <li key={index} style={{ 
                  marginBottom: '5px',
                  fontSize: '0.9rem'
                }}>
                  {point}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;