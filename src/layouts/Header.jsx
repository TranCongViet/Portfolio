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
        className={`fixed top-0 left-0 z-20 flex h-[64px] w-full items-center justify-between px-4 py-3 transition-all duration-300 lg:justify-around ${
          isScrolled
            ? 'shadow-purple/20 bg-gray-900/90 shadow-lg'
            : 'bg-black/30'
        }`}
      >
        <h1 className="text-purple pl-3 text-3xl font-bold">TCV</h1>

        {/* Icon Hamburger / Close với animation mượt */}
        <button
          className="relative flex h-8 w-8 items-center justify-center text-3xl text-white lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="relative h-full w-full cursor-pointer">
            {/* Hamburger Icon */}
            <GiHamburgerMenu
              className={`text-purple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-300 ease-in-out ${
                isMenuOpen
                  ? 'scale-75 rotate-180 opacity-0'
                  : 'scale-100 rotate-0 opacity-100'
              }`}
            />

            {/* Close Icon */}
            <AiOutlineClose
              className={`text-purple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-300 ease-in-out ${
                isMenuOpen
                  ? 'scale-100 rotate-0 opacity-100'
                  : 'scale-75 rotate-180 opacity-0'
              }`}
            />
          </div>
        </button>

        {/* Menu - Desktop */}
        <ul className="hidden space-x-8 lg:flex">
          {ListMenu.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="before:bg-purple hover:text-purple relative inline-block cursor-pointer p-2 text-xl font-semibold transition-colors duration-300 before:absolute before:-bottom-1 before:left-1/2 before:h-1 before:w-0 before:transition-all before:duration-300 before:content-[''] hover:before:left-0 hover:before:w-full"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Menu Mobile Dropdown - Loại bỏ khoảng hở */}
      <div
        className={`border-purple/20 fixed top-[64px] left-0 z-10 flex w-full flex-col items-center space-y-4 border-t py-6 transition-all duration-500 ease-out lg:hidden ${
          isMenuOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-full opacity-0'
        } ${isScrolled ? 'bg-gray-900/90' : 'bg-black/90'} ? 'border-t border-purple/30' : ''}`}
      >
        {ListMenu.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="hover:text-purple py-2 text-xl text-white transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Overlay để đóng menu khi click bên ngoài */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-5 bg-black/50 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};
