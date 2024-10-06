"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0jp5tvh', 'template_os9vg9v', form.current, {
        publicKey: 'WCK4Aq8J7br8aX-Ax',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Thank you, your message has been sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id='Contactme'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

      <div className="flex flex-col lg:flex-row pb-20">
        <div className="w-full md:w-1/2 p-4 order-2 md:order-1">
          <h1 className="heading">
            Contact <span className="text-purple">ME</span>
          </h1>
          <br />
          <p>
            If you have any work from me or any questions and feedback, it’s love to hear from you. Just text it here, we'll respond as soon as possible.
          </p>
          <br />
          <div className='lg:flex flex-col'>
            <a className='p-4' href='mailto:jayanthkopparthi595@gmail.com'>
              <i className="fa-regular fa-envelope text-xl"></i>
            </a>
            <a href='https://www.instagram.com/jayanthk.06?igsh=MW81eDgwdGV1MHZ0Zg==' className='p-4'>
              <i className="fa-brands fa-instagram text-xl"></i>
            </a>
            <a href='https://www.linkedin.com/in/jayanth-kopparthi-b2599530b' className='p-4 space-x-4'>
              <i className="fa-brands fa-linkedin text-xl"></i>
            </a>
            <a href='https://github.com/1552537028' className='p-4'>
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4 order-1 md:order-2">
          <form className="p-6 rounded-lg" ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold">Name</label>
              <input type='text' name="user_name" placeholder="Your Name" className="w-full px-4 py-2 border rounded-2xl focus:outline-none focus:ring focus:border-blue-300" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Email</label>
              <input type='email' name="user_email" placeholder="Your Email" className="w-full px-4 py-2 border rounded-2xl focus:outline-none focus:ring focus:border-blue-300" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold">Message</label>
              <textarea name="message" placeholder="Your Message" className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:border-blue-300" required></textarea>
            </div>
            <button type="submit" className="bg-white text-black p-4 rounded-2xl">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};
