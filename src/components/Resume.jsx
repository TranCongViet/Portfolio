import myCV from '../assets/myCV.jpg';
export const Resume = () => {
  return (
    <section id="resume" className=" text-white text-center mx-auto pt-40">
      <h1 className="text-4xl font-bold text-purple mb-20">My Resume</h1>

      <img
        src={myCV}
        alt="My CV"
        className="w-auto h-auto rounded-lg shadow-lg"
      />
      <a
        href={myCV}
        download="My_CV"
        className="block mt-6 text-purple-500 hover:underline"
      >
        Download CV
      </a>
    </section>
  );
};
