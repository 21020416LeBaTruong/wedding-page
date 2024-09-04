import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from "react-icons/fa6";
import { Link } from 'react-scroll';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleResize = () => {
    // If screen width is greater than or equal to 768px (md breakpoint), close the menu
    if (window.innerWidth >= 768) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Initial check for screen size
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const headerHeight = 60; // Adjust this value according to your header height

  return (
    <div>
      <div className={`fixed top-0 left-0 w-full transition-all duration-500 ${isScrolled || isOpen ? 'bg-gray-200' : 'bg-transparent'} z-50`}>
        <div className="flex justify-between items-center p-2 max-w-6xl mx-auto">
          <h1 className={`font-bold text-2xl ${isScrolled || isOpen ? 'text-black' : 'text-white'}`}>LOGO</h1>
          <div className="hidden md:flex md:justify-center">
            <div className={`flex-col text-xl ${isScrolled || isOpen ? 'text-black' : 'text-white'} md:flex md:flex-row space-x-0 md:space-x-10`}>
              <Link to="home" smooth={true} duration={1000} offset={-headerHeight} className="cursor-pointer">
                <button className="p-2 hover:underline font-serif font-bold">Home</button>
              </Link>
              <Link to="process" smooth={true} duration={1000} offset={-headerHeight-30} className="cursor-pointer">
                <button className="p-2 hover:underline font-serif font-bold">Process</button>
              </Link>
              <Link to="contact" smooth={true} duration={1000} offset={-headerHeight-30} className="cursor-pointer">
                <button className="p-2 hover:underline font-serif font-bold">Contact me</button>
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
              {isOpen ? (
                <FaTimes
                  size={24}
                  style={{ color: isScrolled || isOpen ? 'black' : 'white' }}
                  className='pt-1'
                />
              ) : (
                <FaBars
                  size={24}
                  style={{ color: isScrolled ? 'black' : 'white' }}
                  className='pt-1'
                />
              )}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className={`md:hidden flex-col text-xl ${isScrolled || isOpen ? 'text-black' : 'text-white'} flex justify-center items-center -mt-11`}>
            <Link to="home" smooth={true} duration={1000} offset={-headerHeight} className="cursor-pointer">
              <button className="p-2 hover:underline font-serif font-bold">Home</button>
            </Link>
            <Link to="service" smooth={true} duration={1000} offset={-headerHeight-30} className="cursor-pointer">
              <button className="p-2 hover:underline font-serif font-bold">Services</button>
            </Link>
            <Link to="contact" smooth={true} duration={1000} offset={-headerHeight-30} className="cursor-pointer">
              <button className="p-2 hover:underline font-serif font-bold">Contact me</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
