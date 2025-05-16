const projectsData = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce website with features like product listing, cart, user authentication, and payment integration.",
    imageUrl: "/assets/projects/ecommerce.jpg", // Placeholder image path
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    liveLink: "#", // Replace with actual live link
    githubLink: "#", // Replace with actual GitHub link
  },
  {
    id: 2,
    title: "Cloud File Storage App",
    description: "A web application for securely storing and sharing files in the cloud, built using AWS S3 and Lambda.",
    imageUrl: "/assets/projects/cloud-storage.jpg", // Placeholder image path
    tags: ["React", "AWS S3", "Lambda", "Node.js"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    title: "Portfolio Website V1",
    description: "My first personal portfolio website built to showcase my initial projects and skills in web development.",
    imageUrl: "/assets/projects/portfolio-v1.jpg", // Placeholder image path
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "#",
    githubLink: "#",
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900/60 text-white"> {/* Increased transparency */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My <span className="text-indigo-500">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-indigo-400">{project.title}</h3>
                <div className="mb-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="inline-block bg-gray-700 text-sky-300 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 text-sm mb-4 h-20 overflow-y-auto">{project.description}</p> {/* Fixed height for description */}
                <div className="flex justify-start space-x-4">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium">View Live</a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition-colors text-sm font-medium">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;