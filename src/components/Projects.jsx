import { useState } from 'react';

const projectsData = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce website with features like product listing, cart management, user authentication, and secure payment integration.",
    imageUrl: "/assets/projects/ecommerce.jpg",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    liveLink: "#",
    githubLink: "#",
    features: [
      "User authentication and authorization",
      "Product search and filtering",
      "Shopping cart and wishlist",
      "Secure payment processing",
      "Order tracking system"
    ],
    techStack: {
      frontend: ["React", "Redux", "Tailwind CSS"],
      backend: ["Node.js", "Express", "MongoDB"],
      other: ["Stripe API", "JWT", "AWS S3"]
    }
  },
  {
    id: 2,
    title: "Cloud File Storage",
    description: "A secure cloud storage solution for managing and sharing files, built with AWS services and modern web technologies.",
    imageUrl: "/assets/projects/cloud-storage.jpg",
    tags: ["React", "AWS", "Node.js", "Express", "S3"],
    liveLink: "#",
    githubLink: "#",
    features: [
      "Drag and drop file upload",
      "File sharing and permissions",
      "Real-time file syncing",
      "File version control",
      "Advanced search capabilities"
    ],
    techStack: {
      frontend: ["React", "TypeScript", "Material-UI"],
      backend: ["Node.js", "Express", "PostgreSQL"],
      other: ["AWS S3", "AWS Lambda", "Docker"]
    }
  },
  {
    id: 3,
    title: "AI Chat Application",
    description: "An intelligent chat application powered by machine learning, enabling natural conversations and automated responses.",
    imageUrl: "/assets/projects/chat-app.jpg",
    tags: ["Python", "React", "TensorFlow", "WebSocket"],
    liveLink: "#",
    githubLink: "#",
    features: [
      "Real-time messaging",
      "AI-powered responses",
      "Multi-language support",
      "Voice messages",
      "Custom chatbot training"
    ],
    techStack: {
      frontend: ["React", "Socket.io-client", "Chakra UI"],
      backend: ["Python", "FastAPI", "TensorFlow"],
      other: ["WebSocket", "Redis", "Docker"]
    }
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-gray-900/60 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full cyberpunk-grid opacity-10"></div>
        <div className="absolute top-1/4 -left-12 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-12 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Projects</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            A showcase of my recent work, featuring web applications and cloud solutions
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="group relative bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                onMouseEnter={() => setSelectedProject(project.id)}
                onMouseLeave={() => setSelectedProject(null)}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
                  />
                  {/* Tags Overlay */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium bg-gray-900/70 text-purple-400 rounded-full backdrop-blur-sm border border-purple-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs font-medium bg-gray-900/70 text-purple-400 rounded-full backdrop-blur-sm border border-purple-500/30">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Features Preview */}
                  {selectedProject === project.id && (
                    <div className="mb-4 space-y-2">
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features:</h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        {project.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack Preview */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.frontend.slice(0, 2).map((tech, index) => (
                        <span key={index} className="text-xs text-gray-400">
                          {tech}
                        </span>
                      ))}
                      {project.techStack.frontend.length > 2 && (
                        <span className="text-xs text-gray-400">...</span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-between items-center">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <span>Live Demo</span>
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      <span>View Code</span>
                      <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              View More Projects
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;