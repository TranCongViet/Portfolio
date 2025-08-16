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
    <section id="home" className="mt-10 h-screen px-8 py-10 lg:mt-0 lg:px-24">
      <div className="grid h-full w-full max-w-7xl grid-cols-1 items-center lg:grid-cols-2">
        {/* Left Side - Greeting and Name */}
        <div className="space-y-6 text-left">
          <div className="space-y-2">
            <h2 className="text-2xl font-light text-gray-300 lg:text-3xl">
              Hello, I'm
            </h2>
            <h1 className="text-4xl font-bold text-white lg:text-6xl">
              Trần Công{' '}
              <span className="from-purple bg-gradient-to-r to-pink-500 bg-clip-text text-transparent">
                Việt
              </span>
            </h1>
          </div>

          <div className="space-y-4">
            <h3 className="text-purple text-xl font-medium lg:text-2xl">
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

            <p className="max-w-lg text-lg leading-relaxed text-gray-300">
              I'm a passionate developer who loves creating amazing web
              experiences with React, JavaScript, and modern technologies.
            </p>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="lg :h-96 from-purple/20 border-purple/30 flex h-80 w-80 items-center justify-center rounded-full border-4 bg-gradient-to-br to-pink-500/20 lg:w-96">
              <div className="flex h-72 w-72 items-center justify-center rounded-full bg-gray-800 lg:h-88 lg:w-88">
                <img
                  src={myImage}
                  alt="Trần Công Việt"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="bg-purple absolute top-4 -right-4 h-8 w-8 animate-pulse rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 h-6 w-6 animate-pulse rounded-full bg-pink-500 delay-1000"></div>
            <div className="absolute top-1/2 -left-8 h-4 w-4 animate-bounce rounded-full bg-blue-400 delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
