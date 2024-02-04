import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { SiLeetcode } from 'react-icons/si';

const Nav = () => {
  
  return (
    <div>
      <ul className='flex flex-row justify-center '>
        <li className='px-3'>
          <NavLink to="/" className={({ isActive }) => `${isActive ? 'text-pink-700' : 'text-white'}`}>
            Home
          </NavLink>
        </li>
        <li className='px-3 '>
          <NavLink to="/about" className={({ isActive }) => `${isActive ? 'text-pink-700' : 'text-white'}`}>
            About
          </NavLink>
        </li>
        <li className='px-3'>
          <NavLink to="/skills" className={({ isActive }) => `${isActive ? 'text-pink-700' : 'text-white'}`}>
            Skills
          </NavLink>
        </li>
        <li className='px-3'>
          <NavLink to="/projects" className={({ isActive }) => `${isActive ? 'text-pink-700' : 'text-white'}`}>
            Projects
          </NavLink>
        </li>
        <li className='px-3 pr-[20%]'>
          <NavLink to="/contact" className={({ isActive }) => `${isActive ? 'text-pink-700' : 'text-white'}`}>
            Contact
          </NavLink>
        </li>
        <li className='px-3 text-2xl text-white hover:text-pink-600'>
          <a href="https://leetcode.com/eroo/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode />
          </a>
        </li>

        <li className='px-3 text-2xl text-white hover:text-pink-600'>
          <a href="https://www.linkedin.com/in/shubham-shaw03" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </li>
        <li className='px-3 text-2xl text-white hover:text-pink-500'>
          <a href="https://github.com/Shubhammm14" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </li>
        <li className='px-3 text-2xl pr-10 text-white hover:text-pink-500'>
          <a href="mailto:shubhamshaw905@gmail.com">
            <GrMail />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
