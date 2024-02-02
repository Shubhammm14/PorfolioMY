import React from 'react'
import {NavLink} from 'react-router-dom'
const Nav = () => {
  return (
    <div>
        <ul>
        <li>
            <NavLink to="/" className=''>
              Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/skills" className=''>
              Skills
            </NavLink>
        </li>
        <li>
            <NavLink to="/projects" className=''>
              Projects
            </NavLink>
        </li>
        <li>
            <NavLink to="/contact" className=''>
              Contact
            </NavLink>
        </li>
        

        </ul>
    </div>
  )
}

export default Nav