const About = () => {
  const stats = [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Technologies', value: '20+' },
    { label: 'Client Satisfaction', value: '100%' },
  ];

  const interests = [
    { icon: '🚀', name: 'Cloud Computing', description: 'Passionate about building scalable cloud solutions' },
    { icon: '💻', name: 'Web Development', description: 'Creating beautiful and functional web applications' },
    { icon: '🤖', name: 'AI & ML', description: 'Exploring the possibilities of artificial intelligence' },
    { icon: '🎮', name: 'Gaming', description: 'Enjoying strategic and creative gaming experiences' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900/60 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full cyberpunk-grid opacity-20"></div>
        <div className="absolute top-1/4 -left-12 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-12 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Me</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image and Stats */}
            <div className="space-y-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <img
                    src="/assets/Mayank.jpg"
                    alt="Mayank - Full Stack Developer"
                    className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm border border-gray-700/50">
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Crafting Digital Experiences
              </h3>
              
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  Hello! I'm Mayank, a passionate Full Stack Developer with expertise in cloud technologies and modern web development. 
                  I specialize in creating scalable applications that combine powerful functionality with intuitive user experiences.
                </p>
                <p className="leading-relaxed">
                  My journey in technology began with a fascination for building things that make a difference. 
                  Today, I focus on developing robust solutions using cutting-edge technologies and best practices.
                </p>
              </div>

              <div className="pt-6">
                <h4 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  What Drives Me
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {interests.map((interest, index) => (
                    <div key={index} className="bg-gray-800/30 p-4 rounded-lg backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-colors">
                      <div className="text-2xl mb-2">{interest.icon}</div>
                      <h5 className="font-medium mb-1">{interest.name}</h5>
                      <p className="text-sm text-gray-400">{interest.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Get in Touch
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;