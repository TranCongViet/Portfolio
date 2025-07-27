import React from 'react';
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className=" h-[100px] p-4 flex items-center text-center text-[16px] bg-black/30  border-t border-purple/30 text-white">
      <div className="md:flex-1 hidden md:block">
        <p className="">Designed and Developed by TCV</p>
      </div>
      <div className="flex-1">
        <p>Copyright 2025 TCV</p>
      </div>
      <div className="flex-1 flex gap-5 justify-center text-white">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple   transition-colors duration-300"
        >
          <FaFacebook className=" text-2xl  hover:scale-110 transition-transform duration-300" />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple transition-colors duration-300"
        >
          <FaGithub className="text-2xl hover:scale-110 transition-transform duration-300" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple transition-colors duration-300"
        >
          <FaInstagram className="text-2xl hover:scale-110 transition-transform duration-300" />
        </a>
      </div>
    </footer>
  );
};
