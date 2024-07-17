import React, { useState } from 'react';
import "./Navbar1.css";

const Navbar1 = () => {
  const [show, setShow] = useState(false);
  const [newshow,setnewShow] = useState(false);

  const toggleDropdown = () => {
    setShow(prevShow => !prevShow);
  };

  const toggle=()=>{

  }

  return (
    <div>
      <div className="n">
        <button className="icon-button black" onClick={toggleDropdown}>
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className={`dropdown ${show ? 'show' : ''}`}>
          <ul>
            <a href="/tech"><li>TECH <i className="fa-solid fa-microchip"></i></li></a>
            <a href="/fashion"><li>FOOD <i className="fa-solid fa-bowl-food"></i></li></a>
            <a href="/clothes"><li>CLOTHES <i className="fa-solid fa-shirt"></i></li></a>
            <a href=""><li><i className="fa-brands fa-instagram"></i> <i className="fa-brands fa-linkedin"></i> <i className="fa-brands fa-github"></i></li></a>
          </ul>
        </div>
        <button className="icon-button red" onClick={toggleDropdown}>
          <i className="fa-solid fa-eject"></i>
        </button>
      </div>
      <div className="nav">
        <h2 className="h">CHICNEST</h2>
        <div className="links">
          <div className="scrolling">
            <a href="#tech1">Laptop</a>
            <a href="#tech2">Headsets</a>
            <a href="#tech3">Gaming PCs</a>
            <a href="#tech4">Phones</a>
          </div>
        </div>
        <hr />

      </div>
    </div>
  );
};

export default Navbar1;
