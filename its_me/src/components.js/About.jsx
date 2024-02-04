import React from 'react';

const About = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto w-[50vw] text-pink-600 mt-20 p-8 shadow-[0_35px_100px_-15px_rgba(255,0,127,0.5)] rounded-md">
        <div className="bg-black">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-4">
            Hello, I'm Shubham Shaw, a passionate and detail-oriented developer
            based in Kolkata. I have a strong foundation in front-end and
            back-end technologies, with a focus on creating responsive and
            user-friendly web applications.
          </p>
          <p className="text-lg mb-4">
            My journey in web development started during my early college days.
            I enjoy turning ideas into reality and constantly seek opportunities
            to learn and improve my skills.
          </p>
          <p className="text-lg mb-4">
            In my free time, I love exploring new technologies and contributing
            to open-source projects. I believe in the power of technology to
            bring positive changes to the world, and I'm excited to be part of
            that transformation.
          </p>
          <h3 className="text-2xl font-bold mt-8 mb-4">Skills</h3>
          <ul className="list-disc pl-6">
            <li>Front-end: HTML, CSS, JavaScript, React</li>
            <li>Back-end: Spring , Spring-Boot , Spring-Security , Spring-Mvc , SQL , MySql</li>
            <li>Other: Git, RESTful APIs, Responsive Design</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
