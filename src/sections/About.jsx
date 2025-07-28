import Swiper from 'swiper';
import aboutImage from '../assets/about.svg';
import { LogoCarousel } from '../components';
export const About = () => {
  return (
    <section id="about" className="lg:h-screen  px-8 pt-20 md:px-16 lg:px-24">
      <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-10">
        {/* Left Side - Introduct and Name */}
        <div className="text-[19.2px] mt-10 text-gray-300 leading-relaxed">
          <h1 className="text-purple text-4xl ">LET ME INTRODUCE MYSELF</h1>
          <p className="mt-10">
            I fell in love with programming and I have at least learnt
            something, I think… 🤷‍♂️
            <p className="mt-5">
              I am fluent in classics like{' '}
              <span className="text-purple italic">
                C++, Javascript and Typescript.
              </span>
            </p>
            <p className="mt-5">
              My field of Interest's are building new Web Technologies and
              Products and also in areas related to Blockchain.
            </p>
            <p className="mt-5">
              Whenever possible, I also apply my passion for developing products
              with Node.js and Modern Javascript Library and Frameworks like
              React.js and Next.js
            </p>
          </p>
        </div>
        {/* Right Side - Image */}
        <div className="">
          <img
            src={aboutImage}
            alt="About Me"
            className="w-full h-full object-cover "
          />
        </div>
      </div>
      <div>
        <h1 className="text-purple mt-10">
          The skills, tools and technologies I use
        </h1>
        <LogoCarousel />
      </div>
    </section>
  );
};
