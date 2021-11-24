import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import { data } from './data';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import './index.css';

const App = () => {
  const [jobList, setJobList] = useState(data);
  const [value, setValue] = useState(0);

  const { title, date, req, desc } = jobList[value];
  return (
    <>
      <main>
        <div className='container'>
          <div className='title'>
            <h2>tech 2021</h2>
          </div>
          <div className='btn-group'>
            {jobList.map((jobBtn, index) => {
              return (
                <button
                  className={`btn ${index === value && 'active-tabs'}`}
                  onClick={() => setValue(index)}
                  key={index}
                >
                  {jobBtn.req}
                </button>
              );
            })}
          </div>
          <article>
            <h3>{title}</h3>
            <h4>Date : {date}</h4>
            {desc.map((desc_role, index) => {
              return (
                <div className='desc'>
                  <IoIosArrowDroprightCircle className='desc-icon'></IoIosArrowDroprightCircle>
                  <p>{desc_role}</p>
                </div>
              );
            })}
          </article>
        </div>
      </main>
    </>
  );
};

ReactDom.render(<App />, document.getElementById('root'));
