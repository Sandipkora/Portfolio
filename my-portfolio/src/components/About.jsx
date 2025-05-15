// import React from 'react';
// import './About.css';
// import profilePic from '../assets/IMAGE12.jpg'; 

// function About() {
//     return (
//         <section id="about" className="about-section">
//             <div className="about-container">
//                 <div className="about-image">
//                     <img src={profilePic} alt="Profile" />
//                 </div>

//                 <div className="about-details">
//                     <h2>About Me</h2>
//                     <p>
//                         I'm Sandip Kora, a passionate Full Stack Developer with experience in building dynamic and responsive web applications. I enjoy solving problems and building clean, efficient solutions using modern web technologies.
//                     </p>

//                     <div className="about-info">
//                         <p><strong>🎓 College:</strong> Bachelor of Technology (B.Tech)
//                             Univesity of Kalyani, Kalyani | July 2019 - July 2023

//                             7.5 DGPA</p>
//                         <p><strong>💼 Experience:</strong> Project Intern
//                             CDAC, Kolkata | March 2025 - Present

//                             Kolkata, India</p>
//                         <p><strong>🛠️ Skills:</strong> HTML, CSS, JavaScript, React, Node.js, MongoDB, Git</p>
//                     </div>

//                     <a href="/resume.pdf" className="download-btn" target="_blank" rel="noopener noreferrer">
//                         Download Resume
//                     </a>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default About;
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import profileImg from '../assets/IMAGE12.jpg';

import pythonIcon from '../assets/python.svg';
import jsIcon from '../assets/js-icon.svg';
import reactIcon from '../assets/react.svg';

const About = () => {
  return (
    <motion.section
      id="about"
      className="about-section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="about-container">
        {/* Text section */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: false }}
        >
          <h2 className="section-title">About Me</h2>
          <p>
            Hi there! I'm Sandip, an enthusiastic Software Engineer skilled in
            web development, Cyber Security, and scalable software solutions.
          </p>
          <p>
            I build responsive web applications, and implement robust backend
            services. I also work with CMS platforms like WordPress and Shopify.
          </p>

          <h3 className="sub-heading green">Education:</h3>
          <p>
            <strong>Bachelor of Technology (B.Tech)</strong>
            <br />
            University of Kalyani, Kalyani | July 2019 - July 2023
            <br />
            7.5 DGPA
          </p>

          <h3 className="sub-heading green">Experience:</h3>
          <p>
            <strong>Project Intern</strong>
            <br />
            CDAC, Kolkata | March 2025 - Present
            <br />
            Kolkata, India
          </p>

          <h3 className="sub-heading green">Here are my main skills:</h3>
          <div className="skills-icons">
            <img src={pythonIcon} alt="Python" />
            <img src={jsIcon} alt="JavaScript" />
            <img src={reactIcon} alt="React" />
          </div>
        </motion.div>

        {/* Image section */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          viewport={{ once: false }}
        >
          <div className="circle-bg">
            <img src={profileImg} alt="Sandip" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;

