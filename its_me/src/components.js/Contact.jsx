import React, { useState } from 'react';

const Contact = () => {
  const initialFormDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(initialFormDetails);
  const [buttonText, setButtonText] = useState('send');
  const [status, setStatus] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');
  
    // Simulate a delay for form submission (replace this with your actual submission logic)
    setTimeout(() => {
      // Once the submission is complete, update the status and button text accordingly
      setStatus({
        type: 'success',
        message: 'Form submitted successfully!'
      });
  
      setButtonText('send'); // Resetting the button text after submission
    }, 1000); // Adjust the delay time according to your needs
  };
  

  return (
    <div className='flex items-center justify-center h-screen text-pink-600 '>
      <h1 className='text-5xl text-pink-200 font-bold h-[0vh] '>Connect Us</h1>
      <section>
        <form onSubmit={handleSubmit} className='text-2xl  text-black items-center flex flex-col shadow-[0_35px_100px_-15px_rgba(255,0,127,0.5)] bg-black w-[50vw] p-8 mt-5 rounded-md shadow-md'>
          {/* <label htmlFor="firstName">First Name:</label> */}
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formDetails.firstName}
            onChange={handleInputChange}
            placeholder="First Name"
            className="placeholder-pink-900 bg-pink-200 border p-2 w-[40vw] text-xl rounded-md my-4"
          />

          {/* <label htmlFor="lastName">Last Name:</label> */}
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formDetails.lastName}
            onChange={handleInputChange}
            placeholder="Last Name"
            className="placeholder-pink-900 border p-2 bg-pink-200  rounded-md w-[40vw] my-4"
          />

          {/* <label htmlFor="email">Email:</label> */}
          <input
            type="email"
            id="email"
            name="email"
            value={formDetails.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="placeholder-pink-900 border p-2 w-[40vw] bg-pink-200 rounded-md my-4"
          />

          {/* <label htmlFor="phone">Phone:</label> */}
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formDetails.phone}
            onChange={handleInputChange}
            placeholder="Phone"
            className="placeholder-pink-900 border p-2 w-[40vw] bg-pink-200 rounded-md my-4"
          />

          {/* <label htmlFor="message">Message:</label> */}
          <textarea
            id="message"
            name="message"
            value={formDetails.message}
            onChange={handleInputChange}
            placeholder="Message"
            className="placeholder-pink-900 border p-2 w-[40vw] rounded-md bg-pink-200  my-4"
          />

          <button type="submit" className="bg-pink-200 text-white p-2 rounded-md my-2">{buttonText}</button>
        </form>

        {status.type && (
          <div className={`status-${status.type}`}>
            {status.message}
          </div>
        )}
      </section>
    </div>
  );
};

export default Contact;
