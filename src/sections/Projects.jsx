import imageTest from '../assets/image.png';

const ListProjects = [
  {
    image: imageTest,
    title: 'Title1',
    description: 'Description for project 1',
  },
  {
    image: imageTest,
    title: 'Title2',
    description: 'Description for project 2',
  },
  {
    image: imageTest,
    title: 'Title3',
    description: 'Description for project 3',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="mb-50 ">
      <h1 className="text-4xl font-bold text-center text-purple mb-2 mt-40">
        My Projects
      </h1>
      <p className="text-center text-gray-300 mb-12">
        Here are a few of my recent projects:
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-8">
        {ListProjects.map((project, index) => (
          <div
            key={index}
            className="group relative cursor-pointer w-[300px] h-[400px] md:w-[350px] xl:w-[400px] xl:h-[500px]
              mb-10 rounded-2xl overflow-hidden 
              border-2 border-purple/30 bg-gray-900/50 shadow-lg shadow-purple
              transition-all duration-700 ease-out
              hover:border-purple hover:bg-gray-800/70 hover:shadow-2xl hover:shadow-purple/40 
              hover:scale-110 hover:-translate-y-2"
          >
            {/* Image with overlay */}
            <div className="relative w-full h-2/4 ">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-t-2xl
                  transition duration-700 ease-out
                  group-hover:scale-110 group-hover:rotate-1"
              />

              {/* Hover icon */}
              <div
                className="absolute top-4 right-4 w-10 h-10 bg-purple/80 rounded-full 
                  flex items-center justify-center text-white
                  opacity-0 group-hover:opacity-100 
                  transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </div>

            {/* Text content + button */}
            <div className="p-6 h-2/4 flex flex-col justify-between">
              <div>
                <h2 className="text-center text-xl font-semibold text-white mb-3 transition-colors duration-300 group-hover:text-purple">
                  {project.title}
                </h2>
                <p className="text-center text-gray-300 group-hover:text-gray-200 px-2 leading-relaxed transition-colors duration-300">
                  {project.description}
                </p>
              </div>

              {/* GitHub button */}
              <div className="flex items-center justify-center ">
                <a
                  href="https://abc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[100px] h-[50px] text-sm font-medium 
                  py-2 px-4 border border-purple text-purple rounded-lg
                  hover:bg-purple hover:text-white flex items-center justify-center transition-all duration-700 cursor-pointer
                  opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 "
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Animated border effect */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500
                bg-gradient-to-r from-purple/20 via-transparent to-pink-500/20 animate-pulse"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
