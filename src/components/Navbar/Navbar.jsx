import React from 'react';
import logo from "../../logo.png";
import {Link} from "react-router-dom"
import "./Navbar.css";
import {RxHamburgerMenu,RxAvatar} from "react-icons/rx";
import {BsSearch} from "react-icons/bs";
import {MdKeyboardVoice} from "react-icons/md";
import {SlOptionsVertical} from "react-icons/sl";


const Navbar = () => {

  return (

  <nav className="navbar">
   
  <RxHamburgerMenu/>
  <img  src={logo} alt="youtube logo" />
  <input placeholder="Search" type="text" />
  <button className="search-btn" >{<BsSearch/>}</button>

  <MdKeyboardVoice/>
  <button className='option-btn'>{<SlOptionsVertical/>}</button> 
   <button className="signin-btn">{<RxAvatar/>}Sign In</button>
  </nav>
  )
}

export default Navbar