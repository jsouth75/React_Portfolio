import React from 'react';
import '../../assets/style.css';
import profileImage from '../../assets/img/profile_pic.jpeg';

function About () {
  return (
    <div className='container'>
      <div className='card card-body about'>
        <div>
          <img src={profileImage} className='profile img-thumbnail rounded' alt='profile_Image'/>
        </div>
        <p className='card-text bio'>
          <h2>About Me</h2>
          I am currently enrolled in a full stack web development bootcamp through Georgia Tech. Early on before my career began, I received a Bachelor of Science in Management and Marketing from Arkansas Tech University in 1998 then soon after college moved into an outside sales role. This led me from the industrial market for almost 2 years into the construction market for the last 22 years. During this time I have had sales and management roles, and also acquired my contractor licenses, which led to building and remodeling homes on the side. Nonetheless, I have the desire to always learn and try new things. I am excited and look forward to what is ahead whether this leads to a part-time or full-time occupation I am here to learn, grow, and apply my knowledge to help others. 
        </p>
      </div>
    </div>
  );
}

export default About;

