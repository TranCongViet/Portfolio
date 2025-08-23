import imageTest from '../assets/image.png';
import portfolioImg from '../assets/portfolio.png';
import movieWeb from '../assets/movieWeb.png';

const ListProjects = [
  {
    image: imageTest,
    title: 'Book Management',
    description: 'A web application for managing books',
    github: 'https://github.com/minhthuan059/Project_Web',
    deploy: '',
  },
  {
    image: movieWeb,
    title: 'Movie recommendation Website',
    description:
      'A user-friendly website that helps users easily search for and discover their favorite movies',
    github: 'https://github.com/TranCongViet/WebAdvancedFinalProject ',
    deploy: 'https://trancongviet.github.io/WebAdvancedFinalProject/',
  },
  {
    image: portfolioImg,
    title: 'TCVShop',
    description:
      'TCV Shop is an e-commerce platform specializing in electronic products',
    github: 'https://github.com/TranCongViet/TCVShop',
    deploy: 'https://tcv-shop.vercel.app/',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="mb-50">
      <h1 className="text-purple mt-40 mb-2 text-center text-4xl font-bold">
        My Projects
      </h1>
      <p className="mb-12 text-center text-gray-300">
        Here are a few of my recent projects:
      </p>

      <div className="mt-10 grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 xl:grid-cols-3">
        {ListProjects.map((project, index) => (
          <div
            key={index}
            className="group border-purple/30 shadow-purple hover:border-purple hover:shadow-purple/40 relative mb-10 h-[400px] w-[300px] cursor-pointer overflow-hidden rounded-2xl border-2 bg-gray-900/50 shadow-lg transition-all duration-700 ease-out hover:-translate-y-2 hover:scale-110 hover:bg-gray-800/70 hover:shadow-2xl md:w-[350px] xl:h-[500px] xl:w-[400px]"
          >
            {/* Image with overlay */}
            <div className="relative h-2/4 w-full">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full rounded-t-2xl object-contain transition duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
              />

              {/* Hover icon */}
              <a
                href={project.deploy || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple/80 absolute top-4 right-4 flex h-10 w-10 translate-y-4 transform items-center justify-center rounded-full text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
              >
                <svg
                  className="h-5 w-5"
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
              </a>
            </div>

            {/* Text content + button */}
            <div className="flex h-2/4 flex-col justify-between p-6">
              <div>
                <h2 className="group-hover:text-purple mb-3 text-center text-xl font-semibold text-white transition-colors duration-300">
                  {project.title}
                </h2>
                <p className="line-clamp-3 px-2 text-center leading-relaxed text-gray-300 transition-colors duration-300 group-hover:text-gray-200">
                  {project.description}
                </p>
              </div>

              {/* GitHub button */}
              <div className="flex items-center justify-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-purple text-purple hover:bg-purple flex h-[50px] w-[100px] translate-y-4 cursor-pointer items-center justify-center rounded-lg border px-4 py-2 text-sm font-medium opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100 hover:text-white"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Animated border effect */}
            <div className="from-purple/20 pointer-events-none absolute inset-0 animate-pulse rounded-2xl bg-gradient-to-r via-transparent to-pink-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </section>
  );
};
