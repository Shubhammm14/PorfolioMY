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
                <a href='https://shubhammm14.github.io/Currency-Exchanger/'><Card projectName='Currency Exchanger' /></a>
              </div>
              <div className='w-[30vw] m-10'>
               <a href='https://shubhammm14.github.io/My-TodoApp/'> <Card projectName='My-TodoApp' /></a>
              </div>
            </div>
            <div className='flex flex-row m-10'>
              <div className='w-[30vw] m-10 '>
                <a href='https://shubhammm14.github.io/Bg-Changer/'><Card projectName='Bg-Changer' /></a>
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
               <a href='https://github.com/Shubhammm14/PersonalProjects2-InstagramWeb-Backend'> <Card projectName='Instagram-Backend Api Clone' /></a>
              </div>
              <div className='w-[30vw] m-10'>
                <a href='https://github.com/Shubhammm14/PersonalProject3-whatsappWebBackend'><Card projectName='Whatsapp-Backend Api Clone' /></a>
              </div>
            </div>
            <div className='flex flex-row m-10'>
              <div className='w-[30vw] m-10 '>
                <a href='https://github.com/Shubhammm14/Api1/tree/main/Simple%20Email%20Sender%20Using%20SMTP'><Card projectName='Email-Sender Using SMVT Protocol' /></a>
              </div>
              <div className='w-[30vw] m-10 '>
                <a href='https://github.com/Shubhammm14/SpringBoot-REACT-FullStack/tree/app-0'><Card projectName='Student Management Backend Api' /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
