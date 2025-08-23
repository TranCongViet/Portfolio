import React from 'react';
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="border-purple/30 flex h-[100px] items-center border-t bg-black/30 p-4 text-center text-[16px] text-white">
      <div className="hidden md:block md:flex-1">
        <p className="">Designed and Developed by TCV</p>
      </div>
      <div className="flex-1">
        <p>Copyright 2025 TCV</p>
      </div>
      <div className="flex flex-1 justify-center gap-5 text-white">
        <a
          href="https://www.facebook.com/tcv.hcmus"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple transition-colors duration-300"
        >
          <FaFacebook className="text-2xl transition-transform duration-300 hover:scale-110" />
        </a>
        <a
          href="https://github.com/TranCongViet"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple transition-colors duration-300"
        >
          <FaGithub className="text-2xl transition-transform duration-300 hover:scale-110" />
        </a>
        <a
          href="https://www.instagram.com/cog_viettt/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple transition-colors duration-300"
        >
          <FaInstagram className="text-2xl transition-transform duration-300 hover:scale-110" />
        </a>
      </div>
    </footer>
  );
};
