import { useRef, useState } from 'react'

import React from 'react';
import './App.css';

export const App = () => {

 const [active, setActive] = useState([false,false,false,false]);

 const handleClick = (index) => {
  const newArray = active.map((b,i)  => {
    if (index === i) {
      return !b;
     } else {
      return b;
     }
  })
  setActive(newArray);
 };



  return (
    <>
    <body>
      <section className='bg'>
      <h1>Flrequently Asked Questions</h1>
      <div className="faq-container">

        <div className={active[0] ? 'faq active' : 'faq'} >
          <h3 className="faq-title">
            Should I have a Golden Retriever?
          </h3>

          <p className='faq-text'>
            Of course! They are the best dogs on earth
          </p>
          <button onClick={() => {const q1 = 0; handleClick(q1)}} className="faq-toggle">
            <i className="fas fa-chebron-down"></i>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className={active[1] ? 'faq active' : 'faq'} >
          <h3 className="faq-title">
          Are Golden Retrievers Good With Other Pets?
          </h3>

          <p className='faq-text'>
          Yes! The Golden Retriever’s lovable and friendly demeanor extends well beyond people and includes a variety of pets and animals.
          </p>
          <button onClick={() => {const q2 = 1; handleClick(q2)}} className="faq-toggle">
            <i className="fas fa-chebron-down"></i>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className={active[2] ? 'faq active' : 'faq'} >
          <h3 className="faq-title">
          How Long Do Golden Retrievers Live?
          </h3>

          <p className='faq-text'>
          With proper care and nutrition, owners can expect a healthy Golden Retriever to live upwards of 10 to 12 years.
          </p>
          <button onClick={() => {const q3 = 2; handleClick(q3)}} className="faq-toggle">
            <i className="fas fa-chebron-down"></i>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className={active[3] ? 'faq active' : 'faq'} >
          <h3 className="faq-title">
          How Smart Are Golden Retrievers?
          </h3>

          <p className='faq-text'>
          Golden Retrievers are highly intelligent and consistently rank among the top 10 smartest dog breeds due to their ability to learn and adapt to new situations with ease. In fact, it has been estimated that the Golden Retriever is capable of learning new commands with less than five repetitions of an action.
          </p>
          <button onClick={() => {const q4 = 3; handleClick(q4)}} className="faq-toggle">
            <i className="fas fa-chebron-down"></i>
            <i className="fas fa-times"></i>
          </button>
        </div>

       

      </div>
      </section>
    </body>
    </>
    )
}

export default App;