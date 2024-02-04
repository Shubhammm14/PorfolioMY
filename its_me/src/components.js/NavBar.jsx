import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';
import { GrFreebsd } from "react-icons/gr";

const NavBar = () => {
  return (
    <div className='flex flex-row justify-between items-center bg-black text-xl w-[100vw] fixed justify-content px-10 py-2 '>
      <NavLink to="/" className='flex flex-row text-pink-700  text-4xl m-3 hover:text-white'>
        <GrFreebsd />
        <h1 className=''>Shubham</h1>
      </NavLink>
      <div className='m-3 '><Nav /></div>
    </div>
  );
}

export default NavBar;
