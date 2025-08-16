import myCV1 from '../assets/myCV_1.jpg';
import myCV2 from '../assets/myCV_2.jpg';
import myCV from '../assets/MyCV_TCV.pdf';

export const Resume = () => {
  return (
    <section id="resume" className="mx-auto text-center text-white">
      <h1 className="text-purple mb-20 text-4xl font-bold">My Resume</h1>

      <img
        src={myCV1}
        alt="My CV page 1"
        className="mb-6 h-auto w-auto rounded-lg shadow-lg md:w-[700px]"
      />
      <img
        src={myCV2}
        alt="My CV page 2"
        className="mb-6 h-auto w-auto rounded-lg shadow-lg md:w-[700px]"
      />
      <a
        href={myCV}
        download="My_CV"
        className="mt-6 block text-purple-500 hover:underline"
      >
        Download Full CV
      </a>
    </section>
  );
};
