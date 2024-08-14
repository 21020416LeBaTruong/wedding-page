import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
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

  // Assuming the header height is 60px, you can adjust it accordingly
  const headerHeight = 60;

  return (
    <div>
      <div className={`fixed top-0 left-0 w-full transition-all duration-500 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'} z-50`}>
        <div className="flex justify-between items-center p-2 max-w-6xl mx-auto">
          <h1 className={`font-bold text-3xl ${isScrolled ? 'text-black' : 'text-white'}`}>LOGO</h1>
          <div className={`flex-col text-xl ${isScrolled ? 'text-black' : 'text-white'} md:flex md:flex-row space-x-0 md:space-x-10 ${isOpen ? 'flex justify-center' : 'hidden'}`}>
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
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
