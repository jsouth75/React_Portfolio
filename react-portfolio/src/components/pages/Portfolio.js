import React from 'react';
import password from '../../assets/img/Password_Generator.png';
import scheduler from '../../assets/img/Work_Day_scheduler.png';
import quiz from '../../assets/img/Javascript_coding-quiz.png';
import noteTaker from '../../assets/img/Note_Taker_screenshot.png';
import tracker from '../../assets/img/Employee_Tracker.png';
import ecommerce from '../../assets/img/E_commerce.png';

function Portfolio () {
  return (
    <div className='portfolio'>
      <h1>Portfolio</h1>
      <div>
        <div className='projects'>
          <a href="https://github.com/jsouth75/javascript-password" 
          title="Javascript-password"><img src={password} alt="javascript-password"/></a>
        </div>
        <div className='projects'>
          <a href="https://github.com/jsouth75/work-day-scheduler"
          title="work-day-scheduler"><img src={scheduler} alt="work-day-scheduler"/></a>
        </div>
        <div className='projects'>
          <a href="https://github.com/jsouth75/timed-coding-quiz"
          title="javascript coding quiz"><img src={quiz} alt="timed-coding-quiz"/></a>
        </div>
        <div className='projects'>
          <a href="https://github.com/jsouth75/NoteTaker" 
          title="Note Taker"><img src={noteTaker} alt="NoteTaker"/></a>
        </div>
        <div className='projects'>
          <a href="https://github.com/jsouth75/EmployeeTracker" 
          title="Employee Tracker"><img src={tracker} alt="EmployeeTracker"/></a>
        </div>
        <div className='projects'>
          <a href="https://github.com/jsouth75/E-commerce-back-end" 
          title="E-commerce back end"><img src={ecommerce} alt="E-commerce-back-end"/></a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

