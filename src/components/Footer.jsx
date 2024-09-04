import React from "react";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-scroll";
import translations from './translations';
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
export default function Footer({language}) {


  return (
    <div>
      <div className='grid grid-cols-12 p-10 bg-gray-200 shadow-inner'>
        <div className='col-span-1' />
        <div className="col-span-12 md:col-span-4">
          <h1 className="pb-5">{translations[language].footer.p1}</h1>
          <div className="flex space-x-5 justify-center items-center">
            <a href="mailto:mcjosquang@gmail.com" className="transition duration-500 ease-in-out transform hover:scale-150">
              <MdEmail size={24}/>
            </a>
            <a href="tel:0948972983">
              <FaSquarePhone size={20} className='transition duration-500 ease-in-out transform hover:scale-150'/>
            </a>
            <a href="https://www.facebook.com/jostrann" className="transition duration-500 ease-in-out transform hover:scale-150">
              <FaFacebook size={20}/>
            </a>
            <a href="https://www.instagram.com/jos.inlovestorry/" className="transition duration-500 ease-in-out transform hover:scale-150">
              <AiFillInstagram size={24}/>
            </a>
          </div>
        </div>
        <div className="flex flex-col col-span-12 md:col-span-2 mt-5 md:mt-0">
          <h1 className="font-bold pb-2">Page</h1>
          <Link to="feedback" smooth={true} duration={1000} offset={-100} className="cursor-pointer">
            <span>{translations[language].footer.p5}</span>
          </Link>
          <Link to="process" smooth={true} duration={1000} offset={-60} className="cursor-pointer">
            <span>{translations[language].footer.p3}</span>
          </Link>
          <Link to="gallery" smooth={true} duration={1000} offset={-30} className="cursor-pointer">
            <span>{translations[language].footer.p6}</span>
          </Link>
          <Link to="colab" smooth={true} duration={1000} offset={-100} className="cursor-pointer">
            <span>{translations[language].footer.p4}</span>
          </Link>
          <Link to="QA" smooth={true} duration={1000} offset={-60} className="cursor-pointer">
            <span>QA</span>
          </Link>
        </div>
        <div className="flex flex-col col-span-12 md:col-span-2 mt-5 md:mt-0">
          <h1 className="font-bold pb-2">{translations[language].footer.p7}</h1>
          <span>{translations[language].footer.p8}</span>
          <span>{translations[language].footer.p9}</span>
          <span>{translations[language].footer.p10}</span>
          <span>{translations[language].footer.p11}</span>
        </div>
        <div className="flex flex-col col-span-12 md:col-span-2 mt-5 md:mt-0">
          <h1 className="font-bold pb-2">{translations[language].footer.p12}</h1>
          <span>{translations[language].footer.p13}</span>
          <span>Mail: mcjosquang@gmail.com</span>
          <a href="https://www.facebook.com/jostrann" target="blank">FB: Jos Trần Đức Quang</a>
          <a href="https://www.instagram.com/jos.inlovestorry/" target="blank">IG: Josinlove</a>
        </div>
        <div className='col-span-1' />
      </div>
    </div>
  );
}
