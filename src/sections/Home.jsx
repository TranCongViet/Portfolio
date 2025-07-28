import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import myImage from '../assets/image.png';

export const Home = () => {
  const roles = ['Frontend Developer', 'UI/UX Designer'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="h-screen px-8 py-10 lg:px-24 mt-10 lg:mt-0">
      <div className="max-w-7xl w-full h-full grid grid-cols-1  lg:grid-cols-2 items-center">
        {/* Left Side - Greeting and Name */}
        <div className="text-left space-y-6">
          <div className="space-y-2 ">
            <h2 className="text-2xl lg:text-3xl text-gray-300 font-light">
              Hello, I'm
            </h2>
            <h1 className="text-4xl lg:text-6xl font-bold  text-white ">
              Trần Công{' '}
              <span className="bg-gradient-to-r from-purple to-pink-500 bg-clip-text text-transparent">
                Việt
              </span>
            </h1>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl lg:text-2xl text-purple font-medium">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[index]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block"
                >
                  {roles[index]}
                </motion.span>
              </AnimatePresence>
            </h3>

            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
              I'm a passionate developer who loves creating amazing web
              experiences with React, JavaScript, and modern technologies.
            </p>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div
              className="w-80 h-80 lg:w-96 lg
            :h-96 bg-gradient-to-br from-purple/20 to-pink-500/20 rounded-full flex items-center justify-center border-4 border-purple/30"
            >
              <div className="w-72 h-72 lg:w-88 lg:h-88 bg-gray-800 rounded-full flex items-center justify-center">
                <img
                  src={myImage}
                  alt="Trần Công Việt"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 -right-4 w-8 h-8 bg-purple rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-blue-400 rounded-full animate-bounce delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
