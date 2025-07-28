import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const ListMenu = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className={`flex h-[64px] w-full lg:justify-around
         items-center justify-between px-4 py-3 fixed top-0 left-0 z-20  transition-all duration-300 ${
           isScrolled
             ? 'bg-gray-900/90 shadow-lg shadow-purple/20'
             : 'bg-black/30'
         }`}
      >
        <h1 className="text-3xl text-purple font-bold pl-3">TCV</h1>

        {/* Icon Hamburger / Close với animation mượt */}
        <button
          className="text-white text-3xl lg:hidden relative w-8 h-8 flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="relative w-full h-full cursor-pointer">
            {/* Hamburger Icon */}
            <GiHamburgerMenu
              className={` text-purple absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out ${
                isMenuOpen
                  ? 'opacity-0 rotate-180 scale-75'
                  : 'opacity-100 rotate-0 scale-100'
              }`}
            />

            {/* Close Icon */}
            <AiOutlineClose
              className={`text-purple absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out ${
                isMenuOpen
                  ? 'opacity-100 rotate-0 scale-100'
                  : 'opacity-0 rotate-180 scale-75'
              }`}
            />
          </div>
        </button>

        {/* Menu - Desktop */}
        <ul className="hidden lg:flex space-x-8">
          {ListMenu.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="relative inline-block cursor-pointer text-xl font-semibold 
                  before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:h-1 before:w-0 before:bg-purple
                  before:transition-all before:duration-300
                  hover:before:left-0 hover:before:w-full p-2
                  hover:text-purple transition-colors duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Menu Mobile Dropdown - Loại bỏ khoảng hở */}
      <div
        className={`lg:hidden  fixed top-[64px] left-0 w-full flex flex-col items-center space-y-4 py-6 z-10 border-t border-purple/20 transition-all duration-500 ease-out ${
          isMenuOpen
            ? 'translate-y-0 opacity-100 visible'
            : '-translate-y-full opacity-0 invisible'
        } ${isScrolled ? 'bg-gray-900/90' : 'bg-black/90 '} ? 'border-t border-purple/30' : ''}`}
      >
        {ListMenu.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="text-white text-xl hover:text-purple transition-colors duration-200 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Overlay để đóng menu khi click bên ngoài */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-5 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};
