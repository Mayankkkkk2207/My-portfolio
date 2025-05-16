import { useState } from 'react';

const skillsData = [
  {
    category: "Frontend",
    icon: "🎨",
    description: "Creating responsive and intuitive user interfaces",
    skills: [
      { name: "React.js", level: 90, icon: "⚛️" },
      { name: "JavaScript", level: 85, icon: "🟨" },
      { name: "HTML5", level: 95, icon: "🌐" },
      { name: "CSS3/SASS", level: 88, icon: "🎨" },
      { name: "Tailwind CSS", level: 92, icon: "🌊" },
      { name: "Next.js", level: 80, icon: "▲" },
    ]
  },
  {
    category: "Backend",
    icon: "⚙️",
    description: "Building robust and scalable server-side applications",
    skills: [
      { name: "Node.js", level: 88, icon: "🟩" },
      { name: "Python", level: 85, icon: "🐍" },
      { name: "Express.js", level: 85, icon: "🚂" },
      { name: "MongoDB", level: 82, icon: "🍃" },
      { name: "SQL", level: 80, icon: "📊" },
      { name: "REST APIs", level: 90, icon: "🔌" },
    ]
  },
  {
    category: "DevOps & Cloud",
    icon: "☁️",
    description: "Managing and deploying applications in the cloud",
    skills: [
      { name: "AWS", level: 85, icon: "☁️" },
      { name: "Docker", level: 80, icon: "🐳" },
      { name: "Git", level: 90, icon: "📚" },
      { name: "CI/CD", level: 82, icon: "🔄" },
      { name: "Linux", level: 85, icon: "🐧" },
      { name: "Kubernetes", level: 75, icon: "⎈" },
    ]
  },
  {
    category: "Tools & Others",
    icon: "🛠️",
    description: "Essential tools and methodologies",
    skills: [
      { name: "VS Code", level: 95, icon: "📝" },
      { name: "Postman", level: 88, icon: "📮" },
      { name: "Figma", level: 75, icon: "🎨" },
      { name: "Jira", level: 85, icon: "📋" },
      { name: "Redux", level: 85, icon: "🔄" },
      { name: "TypeScript", level: 80, icon: "📘" },
    ]
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillsData[0].category);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="py-20 bg-gray-950/60 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full cyberpunk-grid opacity-10"></div>
        <div className="absolute top-1/4 -left-12 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-12 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Skills</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency in various technologies
          </p>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillsData.map((category) => (
              <button
                key={category.category}
                onClick={() => setActiveCategory(category.category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.category
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.category}
              </button>
            ))}
          </div>

          {/* Skills Display */}
          <div className="grid grid-cols-1 gap-8">
            {skillsData
              .filter((category) => category.category === activeCategory)
              .map((category) => (
                <div key={category.category} className="space-y-8">
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-semibold mb-2">{category.description}</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="relative group"
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-gray-900 ring-1 ring-gray-700/50 rounded-lg p-6 space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl">{skill.icon}</span>
                              <h4 className="text-lg font-medium">{skill.name}</h4>
                            </div>
                            <span className="text-sm text-gray-400">{skill.level}%</span>
                          </div>
                          
                          <div className="w-full bg-gray-700/30 rounded-full h-2.5 overflow-hidden">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500 ease-out"
                              style={{
                                width: hoveredSkill === skill.name ? `${skill.level}%` : '0%'
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          {/* Bottom Text */}
          <p className="text-center text-gray-400 mt-12">
            ...and continuously learning new technologies!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;