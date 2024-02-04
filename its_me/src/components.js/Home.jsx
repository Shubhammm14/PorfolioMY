import React, { useEffect, useState } from 'react';

import Skills from './Skills'
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import { useNavigate } from 'react-router';

import {TfiAngleDown} from 'react-icons/tfi'
const Home = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const rotate = ["Software Engineer", "Web Developer", "Software Developer", "Backend Developer"];
  const period = 2000;
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const Navigate = useNavigate();
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % rotate.length;
    let fullText = rotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
      setDelta(200);
    }
  };

  return (
    <div className=' mainbody  ' >
      <div className='flex items-center justify-center h-[90vh] w-[100vw] '>
        <div className='flex flex-row justify-center mt-20 h-[75%] w-[75%] rounded-[5%] shadow-[0_35px_100px_-15px_rgba(255,0,127,0.5)] relative '>

          <section className='text-pink-600 mt-20 ml-20 mb-20 inline-block w-[60%]'>
            <span className='text-2xl font-bold my-1'><h1>Welcome To My Virtual World</h1></span>
            <h1 className='my-2'>{`Hi, I'm Shubham`}</h1>
            <span className='text-3xl text-gray-600 font-bold '>{text}</span>
            <p className='my-3'>Tech Enthusiast | Java & React Developer
<br/>
🌐 Web Developer: Expert in crafting robust and scalable web applications with proficiency in React and Java technologies.
<br/>
📚 Continuous Learner: Committed to ongoing learning and passionate about staying ahead in the dynamic tech landscape.
<br/>
🤝 Let's Connect: Seeking collaborations and opportunities to contribute to innovative projects. Download my Resume.</p>
            <div className='flex flex-row'>
              <a href='https://docs.google.com/document/d/18hFHBTlp0PcQjQSR_DRapPVR-OpuNdWlzvv8TTLxQZY/edit?usp=sharing' target='_blank' rel='noopener noreferrer'>
                <h2 className='text-xl  py-5 pr-3'>Download Resume</h2>
              </a>

              <button onClick={() => Navigate('/contact')} className='text-black hover:bg-pink-600 bg-pink-700 rounded-lg py-2 px-4 my-5'
              > Let's Connect </button>
            </div>
          </section>
          <section className='w-[30%] m-5 pt-20 pr-20'>
            <img src="https://cdn.pixabay.com/photo/2016/03/31/18/26/coding-1294361_640.png" alt="" />
          </section>
          

        </div>
         
      </div>
      <div className='text-pink-300 text-2xl px-[50vw]'><TfiAngleDown/></div>
      
      <Skills />
      <div className='mt-60'>
        <hr className='border mx-auto w-[30vw] border-pink-300 shadow-[0_35px_100px_-15px_rgba(255,0,127,0.5)] my-4' />


        <Projects />
      </div>
      <div>
        <Contact />
      </div>
      <Footer />

    </div>
  );
}

export default Home;
