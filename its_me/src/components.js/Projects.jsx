import React from 'react';
import Card from './Card';

const Projects = () => {
  return (
    <div className='bg-black'>
      <div className='items-center w-[100vw] m-40 text-5xl text-pink-600'>
        <div className=''>
          <h1 className='py-30 m-10  text-5xl font-bold '>Projects</h1>
          <h1 className='m-10'>Live Projects</h1>
          <div className='flex flex-col'>
            <div className='flex flex-row m-10  '>
              <div className='w-[30vw]  m-10'>
                <Card projectName='Cuurency Exchanger' />
              </div>
              <div className='w-[30vw] m-10'>
                <Card projectName='My-TodoApp' />
              </div>
            </div>
            <div className='flex flex-row m-10'>
              <div className='w-[30vw] m-10 '>
                <Card projectName='Bg-Changer' />
              </div>
              <div className='w-[30vw] m-10 '>
                <Card projectName='RandomColor-Painter' />
              </div>
            </div>
          </div>
        </div>
        <div className='mt-40'>
          <h1 className='m-30'>GitHub Projects</h1>
          <div className='flex flex-col'>
            <div className='flex flex-row m-10 '>
              <div className='w-[30vw] m-10'>
                <Card projectName='Instagram-Backend Api Clone' />
              </div>
              <div className='w-[30vw] m-10'>
                <Card projectName='Whatsapp-Backend Api Clone' />
              </div>
            </div>
            <div className='flex flex-row m-10'>
              <div className='w-[30vw] m-10 '>
                <Card projectName='Email-Sender Using SMVT Protocol' />
              </div>
              <div className='w-[30vw] m-10 '>
                <Card projectName='Book Management Api' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
