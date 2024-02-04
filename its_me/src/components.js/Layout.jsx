import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router';
import '../App.css';

const Layout = () => {
  return (
    <div className='mainbody h-[100vh] bg-black w-[100vw]'>
      <div className=''>
        <NavBar />
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
