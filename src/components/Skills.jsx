const skillsData = [
  { name: "HTML5", category: "Frontend", icon: "🌐" },
  { name: "CSS3", category: "Frontend", icon: "🎨" },
  { name: "JavaScript", category: "Language", icon: "🟨" }, // Using a yellow square for JS
  { name: "React", category: "Frontend", icon: "⚛️" },
  { name: "Tailwind CSS", category: "Frontend", icon: "🌬️" },
  { name: "Node.js", category: "Backend", icon: "🟩" }, // Using a green square for Node
  { name: "Python", category: "Language", icon: "🐍" },
  { name: "AWS", category: "Cloud", icon: "☁️" },
  { name: "Docker", category: "DevOps", icon: "🐳" },
  { name: "Git", category: "Tools", icon: " L " }, // Placeholder for Git branch icon
  // Aap C/C++ bhi add kar sakte hain agar project specific zaroorat ho
  // { name: "C++", category: "Language", icon: "C++" },
];
const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-950/60 text-white"> {/* Increased transparency */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
           Technologies I <span className="text-sky-400">Work With</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              className="bg-gray-800/70 p-4 rounded-lg border border-gray-700 hover:border-sky-500 transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Icon - For a "sexy" look, replace emojis with actual SVG logos */}
              {/* You can use libraries like 'react-icons' or import SVGs directly */}
              <div className="text-5xl mb-3 transition-transform duration-300 hover:scale-125">
                {skill.icon}
                {/* Removed group-hover:scale-110, added hover:scale-125 for direct icon hover effect */}
              </div>
              <h3 className="text-md font-medium text-gray-200 group-hover:text-sky-400 transition-colors duration-300">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 mt-12">
          ...and always eager to learn new technologies!
        </p>
      </div>
    </section>
  );
};

export default Skills;