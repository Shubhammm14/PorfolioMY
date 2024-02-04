import React from 'react';
import { FaJava } from "react-icons/fa6";
import { SiJavascript, SiSpring, SiTailwindcss } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { SiSpringsecurity } from "react-icons/si";
import { LuServerCrash } from "react-icons/lu";
import { BsFiletypeJava, BsGit, BsGithub } from "react-icons/bs";
import { TbSql } from "react-icons/tb";

import { FaHtml5 } from "react-icons/fa";
import { GrMysql, GrReactjs } from 'react-icons/gr';

const Skills = () => {
    return (
        <div className=' w-[100vw] skills '>
            <div className='m-40 text-pink-600 bg-black w-[80] '>
                <div className='text-5xl font-bold m-5'>Skills</div>
                <div className='text-xl text-pink-900 m-5 w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolor magnam hic nihil ab cumque, quaerat temporibus qui rerum nobis asperiores nesciunt laudantium minima ex eum possimus officia consectetur dolores sed ea obcaecati blanditiis, neque quas nemo! Pariatur aut totam, quae maxime aliquid deserunt officia inventore! Reiciendis harum voluptatum dicta.</div>
                <div className='my-10 '>
                    <div className='text-5xl m-5 py-10 text-bold'>Languages</div>
                    <div className='flex flex-row'>
                        <div className=' flex flex-col  text-5xl px-5 w-[20%] text-center items-center '>
                            <FaJava />
                            <h5 className='mt-2'>Java</h5>
                        </div>
                        <div className=' flex flex-col  text-5xl px-5 w-[20%] text-center items-center '>
                            <BsFiletypeJava />
                            <h5 className='mt-2'>Java 8</h5>
                        </div>
                    </div>
                </div>
                <div className='my-10'>
                    <div className=' text-5xl  m-5 py-10 text-bold'>Frameworks</div>
                    <div className='flex flex-row '>
                        <div className=' flex flex-col  text-5xl px-5 w-[20%] text-center items-center '>
                            <LuServerCrash />
                            <h5 className='mt-2'>Servlets And Jsp</h5>
                        </div>
                        <div className=' flex flex-col text-5xl px-5 w-[20%] text-center items-center '>
                            <SiSpring />
                            <h5 className='mt-2'>Spring</h5>
                        </div>
                        <div className=' flex flex-col  text-5xl px-5  w-[20%] text-center items-center '>
                            <SiSpringboot />
                            <h5 className='mt-2'>Spring Boot</h5>
                        </div>
                        <div className=' flex flex-col  text-5xl px-5  w-[20%] text-center items-center '>
                            <SiSpringsecurity />
                            <h5 className='mt-2'>Spring Security</h5>
                        </div>
                    </div>
                </div>
                <div className='my-10'>
                    <div className='text-5xl m-5 py-10 text-bold'>DataBase</div>
                    <div className='flex flex-row '>
                        <div className=' flex flex-col  text-5xl px-5 w-[20%] text-center items-center '>
                            <TbSql />
                            <h5 className='mt-2'>SQL</h5>
                        </div>
                        <div className=' flex flex-col  text-5xl px-5 w-[20%] text-center items-center '>
                            <GrMysql />
                            <h5 className='mt-2'>MySQL</h5>
                        </div>
        
                    </div>
                </div>
                <div className='my-10 bg-black'>
                    <div className='text-5xl m-5 py-10 text-bold'>Frontend-Technologies</div>
                    <div className='flex flex-row'>
                        <div className=' flex flex-col  text-5xl px-5 w-[20%] text-center items-center '>
                            <FaHtml5 />
                            <h5 className='mt-2'>Html</h5>
                        </div>
                        <div className=' flex flex-col  text-5xl px-5 w-[20%] text-center items-center '>
                            <SiTailwindcss />
                            <h5 className='mt-2'>TailwindCSS</h5>
                        </div>
                        <div className=' flex flex-col  text-5xl px-5 w-[20%] text-center items-center '>
                            <SiJavascript />
                            <h5 className='mt-2'>JavaScript</h5>
                        </div>
                        <div className=' flex flex-col  text-5xl px-5 w-[20%] text-center items-center '>
                            <GrReactjs />
                            <h5 className='mt-2'>ReactJs</h5>
                        </div>
                    </div>
                </div>
                <div className='my-10 bg-black'>
                    <div className='text-5xl m-5 py-10 text-bold'>Others</div>
                    <div className='flex flex-row '>
                        <div className=' flex flex-col  text-5xl px-5 w-[20%] text-center items-center '>
                            <BsGit />
                            <h5 className='mt-2'>Git</h5>
                        </div>
                        <div className=' flex flex-col  text-5xl px-5 w-[20%] text-center items-center '>
                            <BsGithub />
                            <h5 className='mt-2'>GitHub</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Skills;
