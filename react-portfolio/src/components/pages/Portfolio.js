import React from 'react';
import '../../../src/App.css';

function Portfolio () {
  return (
    <div className='container-sm'>
      <h1 class='title'>Portfolio</h1>
      <div className='row'>
        <div>
          <a href="https://github.com/jsouth75/javascript-password" 
          title="Javascript-password">Javascript Password Generator</a>
        </div>
        <div>
          <a href="https://github.com/jsouth75/work-day-scheduler"
          title="work-day-scheduler">Work Day Scheduler</a>
        </div>
        <div>
          <a href="https://github.com/jsouth75/timed-coding-quiz"
          title="javascript coding quiz">Javascript Coding Quiz</a>
        </div>
        <div>
          <a href="https://github.com/jsouth75/NoteTaker" 
          title="Note Taker">Note Taker</a>
        </div>
        <div>
          <a href="https://github.com/jsouth75/EmployeeTracker" 
          title="Employee Tracker">Employee Tracker</a>
        </div>
        <div>
          <a href="https://github.com/jsouth75/E-commerce-back-end" 
          title="E-commerce back end">E-commerce back end</a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

