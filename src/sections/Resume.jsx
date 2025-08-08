import myCV1 from '../assets/myCV_1.jpg';
import myCV2 from '../assets/myCV_2.jpg';
import myCV from '../assets/MyCV_TCV.pdf';

export const Resume = () => {
  return (
    <section id="resume" className="text-white text-center mx-auto">
      <h1 className="text-4xl font-bold text-purple mb-20">My Resume</h1>

      <img
        src={myCV1}
        alt="My CV page 1"
        className="md:w-[700px] w-auto h-auto rounded-lg shadow-lg mb-6"
      />
      <img
        src={myCV2}
        alt="My CV page 2"
        className="md:w-[700px] w-auto h-auto rounded-lg shadow-lg mb-6"
      />

      {/* Nếu bạn muốn người dùng tải cả 2 trang, thì bạn có thể nén 2 file thành 1 file PDF rồi cho tải */}
      <a
        href={myCV}
        download="My_CV"
        className="block mt-6 text-purple-500 hover:underline"
      >
        Download Full CV
      </a>
    </section>
  );
};
