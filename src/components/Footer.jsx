import React from "react";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-scroll";
import translations from './translations';
export default function Footer({language}) {


  return (
    <div>
      <div className='grid grid-cols-12 p-10 bg-gray-200 shadow-inner'>
        <div className='col-span-1' />
        <div className="col-span-12 md:col-span-4">
          <h1 className="pb-5">{translations[language].footer.p1}</h1>
          <div className="flex space-x-5 justify-center">
            <a href="https://www.facebook.com/jostrann" className="transition duration-500 ease-in-out transform hover:scale-150">
              <FaFacebook size={20}/>
            </a>
            <a href="https://www.instagram.com/jos.inlovestorry/" className="transition duration-500 ease-in-out transform hover:scale-150">
              <FaInstagramSquare size={20}/>
            </a>
          </div>
        </div>
        <div className="flex flex-col col-span-12 md:col-span-2 mt-5 md:mt-0">
          <h1 className="font-bold pb-2">Page</h1>
          <Link to="aboutme" smooth={true} duration={1000} offset={-100} className="cursor-pointer">
            <span>{translations[language].footer.p3}</span>
          </Link>
          <Link to="colab" smooth={true} duration={1000} offset={-100} className="cursor-pointer">
            <span>{translations[language].footer.p4}</span>
          </Link>
          <Link to="feedback" smooth={true} duration={1000} offset={-100} className="cursor-pointer">
            <span>{translations[language].footer.p5}</span>
          </Link>
          <Link to="gallery" smooth={true} duration={1000} offset={-30} className="cursor-pointer">
            <span>{translations[language].footer.p6}</span>
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
