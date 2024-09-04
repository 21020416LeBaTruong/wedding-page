import React, { useEffect, useRef} from 'react';
import emailjs from 'emailjs-com';
import { MdEmail } from 'react-icons/md';
import { FaSquarePhone } from 'react-icons/fa6';
import translations from './translations';
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { AiFillInstagram } from 'react-icons/ai';
import AOS from "aos";
import "aos/dist/aos.css";
const ContactForm = ({ language}) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
        }, []);
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
    <div id="contact" className="flex justify-center items-center pb-20 px-10 lg:px-32"
    data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100">
        <div className=" bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden " style={{ width: '1000px' }}>
            <div className=" bg-[#E2CAA0] text-white p-8">
                <h2 className="text-2xl font-bold mb-4">{translations[language].contact.p1}</h2>
                <ul className="flex space-x-4 justify-center items-center ">
                <div className='flex items-center justify-start space-x-2'>
                    <a href="mailto:mcjosquang@gmail.com" target="blank">
                    <MdEmail size={36} className='hover:scale-105 hover:-translate-y-1 duration-300'/>
                    </a>
                </div>
                <div className='flex items-center justify-start space-x-2'>
                    <a href="tel:0948972983">
                    <FaSquarePhone size={30} className='hover:scale-105 hover:-translate-y-1 duration-300'/>
                    </a>
                </div>
                <div className='flex items-center justify-start space-x-2'>
                    <a href="https://www.facebook.com/jostrann" target="blank">
                    <FaFacebook size={30} className='hover:scale-105 hover:-translate-y-1 duration-300'/>
                    </a>
                    
                </div>
                <div className='flex items-center justify-start space-x-2'>
                    <a href="https://www.instagram.com/jos.inlovestorry/" target="blank">
                    <AiFillInstagram size={36} className='hover:scale-105 hover:-translate-y-1 duration-300'/>
                    </a>
                </div>
                </ul>
            </div>
            {/* Contact Form Section */}
            <div className="p-8">
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
