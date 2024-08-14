import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaAddressBook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaSquarePhone } from 'react-icons/fa6';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tk952vq', 'template_0nc1m4p', form.current, 'zAWSrDyQ_36oTUcG5')
      .then((result) => {
          console.log(result.text);
          alert("Email sent successfully!");
      }, (error) => {
          console.log(error.text);
          alert("Failed to send email.");
      });
  };

  return (
    <div id="contact" className="flex justify-center items-center pb-10 px-10 lg:px-32">
        <div className="md:flex bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden" style={{ width: '800px' }}>
        {/* Contact Information Section */}
            <div className="md:w-1/3 bg-[#E2CAA0] text-white p-8">
                <h2 className="text-2xl font-bold mb-4">Contact me</h2>
                <ul className="space-y-4">
                <div className='flex items-center justify-start space-x-2'>
                    <FaAddressBook />
                    <li className=''>
                        Address: 
                    </li>
                </div>
                <div className='flex items-center justify-start space-x-2'>
                    <MdEmail />
                    <li className=''>
                        Email:
                    </li>
                </div>
                <div className='flex items-center justify-start space-x-2'>
                    <FaSquarePhone />
                    <li className=''>
                        Phone:
                    </li>
                </div>
                </ul>
                <div className="mt-6 flex space-x-4">
                <a href="#" className="text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 00-7.746 16.879c.73.064 1-.322 1-.682v-2.3a3.93 3.93 0 01-.814-1.43 1 1 0 01.23-.943c.266-.262.543-.522.828-.772a1 1 0 01.693-.31h.176c.236-.013.472-.025.707-.025a5.27 5.27 0 015.255 5.254v.016c0 .258-.011.517-.032.775a1 1 0 01-.305.693c-.25.286-.51.563-.773.829a1 1 0 01-.942.23 3.93 3.93 0 01-1.432-.813v2.3c0 .36-.272.745-1.006.682A10 10 0 0012 2z"/>
                    </svg>
                </a>
                <a href="#" className="text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 00-7.746 16.879c.73.064 1-.322 1-.682v-2.3a3.93 3.93 0 01-.814-1.43 1 1 0 01.23-.943c.266-.262.543-.522.828-.772a1 1 0 01.693-.31h.176c.236-.013.472-.025.707-.025a5.27 5.27 0 015.255 5.254v.016c0 .258-.011.517-.032.775a1 1 0 01-.305.693c-.25.286-.51.563-.773.829a1 1 0 01-.942.23 3.93 3.93 0 01-1.432-.813v2.3c0 .36-.272.745-1.006.682A10 10 0 0012 2z"/>
                    </svg>
                </a>
                <a href="#" className="text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 00-7.746 16.879c.73.064 1-.322 1-.682v-2.3a3.93 3.93 0 01-.814-1.43 1 1 0 01.23-.943c.266-.262.543-.522.828-.772a1 1 0 01.693-.31h.176c.236-.013.472-.025.707-.025a5.27 5.27 0 015.255 5.254v.016c0 .258-.011.517-.032.775a1 1 0 01-.305.693c-.25.286-.51.563-.773.829a1 1 0 01-.942.23 3.93 3.93 0 01-1.432-.813v2.3c0 .36-.272.745-1.006.682A10 10 0 0012 2z"/>
                    </svg>
                </a>
                </div>
            </div>
            {/* Contact Form Section */}
            <div className="md:w-2/3 p-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Get in Touch</h2>
                <p className="text-gray-600 mb-6">Feel free to drop us a line below!</p>
                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Your name</label>
                    <input type="text" name="user_name" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Your email</label>
                    <input type="email" name="user_email" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Your message</label>
                    <textarea name="message" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" rows="4"></textarea>
                </div>
                <div className="flex justify-center">
                    <input type="submit" value="Send" className="mt-4 px-6 py-2 bg-[#E2CAA0] text-white font-semibold rounded-md shadow-sm hover:bg-[#e9c17d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer" />
                </div>
                </form>
            </div>
        </div>
    </div>
  );
};

export default ContactForm;
