import React, { useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { BiMenuAltRight } from 'react-icons/bi';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="links">
        <div className="logo">
          <h1><span>CaRental</span></h1>
        </div>
        <div className="links_container">
           <p><a href="#share">Share your car</a></p>
            <p><a href="#find">Find a car</a></p>
            <p><a href="#learn">Learn more</a></p>
        </div>
      </div>
      <div className="sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <BiMenuAltRight color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="menu_container scale-up-center">
          <div className="menu_container-links">
            <p><a href="#share">Share your car</a></p>
            <p><a href="#find">Find a car</a></p>
            <p><a href="#learn">Learn more</a></p>
            
          </div>
          <div className="menu_sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;