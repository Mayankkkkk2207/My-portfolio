const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900/60 text-white"> {/* Increased transparency */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-indigo-500">Me</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Image Placeholder */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <img
              src="/assets/Mayank.jpg"
              alt="Mayank - Cloud Enthusiast and React Developer"
              className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-xl border-4 border-indigo-500/50"
            />
          </div>

          {/* About Text */}
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-400">
              Crafting Digital Experiences
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Hello! I'm Mayank, a passionate Cloud Enthusiast and React Developer based in [Your City/Country]. I specialize in building robust and scalable cloud infrastructures and creating dynamic, user-friendly web applications.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              My journey into the world of technology started with a fascination for how software can solve real-world problems. I enjoy diving deep into cloud services like AWS, Azure, or GCP, and I love bringing ideas to life with React and modern JavaScript.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding or exploring new cloud technologies, you can find me [Your Hobby 1], [Your Hobby 2], or learning about the latest advancements in the tech industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;