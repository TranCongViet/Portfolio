import imageTest from '../assets/image.png';
const ListProjects = [
  { image: imageTest, title: 'Title1', description: 'description1' },
  { image: imageTest, title: 'Title2', description: 'description2' },
  { image: imageTest, title: 'Title3', description: 'description3' },
];
export const Projects = () => {
  return (
    <section id="projects" className="mb-50">
      <h1 className="text-4xl font-bold text-center text-purple mb-2 mt-50">
        My Projects
      </h1>
      <p className="text-center text-gray-300">
        Here are a few of my recent projects:
      </p>
      <div className="mt-10 lg:grid lg:grid-cols-3 ">
        {ListProjects.map((project, index) => (
          <div
            key={index}
            className="w-[300px] h-[400px] mx-auto z-[-10] border-1 border-purple shadow-purple shadow-md rounded-2xl mb-10"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-2/4 object-cover"
            />
            <h2 className="text-center text-xl font-semibold mt-2">
              {project.title}
            </h2>
            <p className="text-center text-gray-300 px-4">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
