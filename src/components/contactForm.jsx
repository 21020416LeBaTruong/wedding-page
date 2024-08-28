import React, { useRef} from 'react';
import emailjs from 'emailjs-com';
import { MdEmail } from 'react-icons/md';
import { FaSquarePhone } from 'react-icons/fa6';
import translations from './translations';
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
const ContactForm = ({ language}) => {

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
        <div className="md:flex bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden " style={{ width: '1200px' }}>
        {/* Contact Information Section */}
            <div className="md:w-1/3 bg-[#E2CAA0] text-white p-8">
                <h2 className="text-2xl font-bold mb-4">{translations[language].contact.p1}</h2>
                <ul className="space-y-4">
                {/* <div className='flex items-center justify-start space-x-2'>
                    <FaAddressBook />
                    <li className=''>
                    {translations[language].contact.p2}
                    </li>
                </div> */}
                <div className='flex items-center justify-start space-x-2'>
                    <MdEmail />
                    <li className=''>
                    mcjosquang@gmail.com
                    </li>
                </div>
                <div className='flex items-center justify-start space-x-2'>
                    <FaSquarePhone />
                    <li className=''>
                    0948972983
                    </li>
                </div>
                <div className='flex items-center justify-start space-x-2'>
                    <FaFacebook />
                    <a href="https://www.facebook.com/jostrann" target="blank">
                    Jos Trần Đức Quang
                    </a>
                </div>
                <div className='flex items-center justify-start space-x-2'>
                    <FaInstagramSquare />
                    <a href="https://www.instagram.com/jos.inlovestorry/" target="blank">
                    Josinlove
                    </a>
                </div>
                </ul>
                <div className="mt-6 flex space-x-4">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 00-7.746 16.879c.73.064 1-.322 1-.682v-2.3a3.93 3.93 0 01-.814-1.43 1 1 0 01.23-.943c.266-.262.543-.522.828-.772a1 1 0 01.693-.31h.176c.236-.013.472-.025.707-.025a5.27 5.27 0 015.255 5.254v.016c0 .258-.011.517-.032.775a1 1 0 01-.305.693c-.25.286-.51.563-.773.829a1 1 0 01-.942.23 3.93 3.93 0 01-1.432-.813v2.3c0 .36-.272.745-1.006.682A10 10 0 0012 2z"/>
                    </svg>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 00-7.746 16.879c.73.064 1-.322 1-.682v-2.3a3.93 3.93 0 01-.814-1.43 1 1 0 01.23-.943c.266-.262.543-.522.828-.772a1 1 0 01.693-.31h.176c.236-.013.472-.025.707-.025a5.27 5.27 0 015.255 5.254v.016c0 .258-.011.517-.032.775a1 1 0 01-.305.693c-.25.286-.51.563-.773.829a1 1 0 01-.942.23 3.93 3.93 0 01-1.432-.813v2.3c0 .36-.272.745-1.006.682A10 10 0 0012 2z"/>
                    </svg>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 00-7.746 16.879c.73.064 1-.322 1-.682v-2.3a3.93 3.93 0 01-.814-1.43 1 1 0 01.23-.943c.266-.262.543-.522.828-.772a1 1 0 01.693-.31h.176c.236-.013.472-.025.707-.025a5.27 5.27 0 015.255 5.254v.016c0 .258-.011.517-.032.775a1 1 0 01-.305.693c-.25.286-.51.563-.773.829a1 1 0 01-.942.23 3.93 3.93 0 01-1.432-.813v2.3c0 .36-.272.745-1.006.682A10 10 0 0012 2z"/>
                    </svg>
                </div>
            </div>
            {/* Contact Form Section */}
            <div className="md:w-2/3 p-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">{translations[language].contact.p5}</h2>
                <p className="text-gray-600 mb-6">{translations[language].contact.p6}</p>
                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">{translations[language].contact.p7}</label>
                    <input type="text" name="user_name" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">{translations[language].contact.p8}</label>
                    <input type="email" name="user_email" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">{translations[language].contact.p9}</label>
                    <textarea name="message" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" rows="4"></textarea>
                </div>
                <div className="flex justify-center">
                    <input type="submit" value={translations[language].contact.p10} className="mt-4 px-6 py-2 bg-[#E2CAA0] text-white font-semibold rounded-md shadow-sm hover:bg-[#e9c17d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer" />
                </div>
                </form>
            </div>
        </div>
    </div>
  );
};

export default ContactForm;
