import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
// Import các icon từ react-icons
import { FaBeer, FaCoffee, FaApple, FaAnchor, FaBicycle } from 'react-icons/fa'; 
import { LuPartyPopper } from "react-icons/lu";
import { GrConfigure } from "react-icons/gr";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { MdConnectWithoutContact } from "react-icons/md";
import { GrPlan } from "react-icons/gr";
import translations from './translations';

const Timeline = ({ language }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Tạo một mảng các icon để sử dụng
  const icons = [MdConnectWithoutContact, GrPlan, MdOutlineLibraryBooks, GrConfigure, LuPartyPopper];

  return (
    <div id="process" className="lg:px-32">
      <h1
        className="font-bold text-2xl text-gray-500 text-center p-5"
        data-aos="fade-zoom-in"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        {translations[language].workflow}
      </h1>
      <div className="relative">
        <div className="absolute border-2 border-gray-300 h-full top-0 left-1/2 transform -translate-x-1/2 md:block hidden"></div>
        {translations[language].steps.map((step, index) => (
          <div
            key={index}
            className={`relative flex items-center justify-${index % 2 === 0 ? "start" : "end"} mb-10`}
            data-aos={step.animation}
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className={`order-${index % 2 === 0 ? "2" : "1"} w-1/2 md:w-1/3 flex flex-col items-center ${index % 2 === 0 ? "ml-auto" : "mr-auto"} p-5 bg-white shadow-lg rounded-lg`}>
              <h2 className="font-bold text-lg mb-2">{step.title}</h2>
              <p>{step.description}</p>
            </div>
            <div
              className={`order-${index % 2 === 0 ? "1" : "2"} fixed w-12 h-12 rounded-full bg-gray-200 left-1/2 transform -translate-x-1/2 flex items-center justify-center`}
            >
              {React.createElement(icons[index % icons.length], { size: 24 })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
