const Hero = () => {
  return (
    <section
      id="home"
          className="min-h-screen bg-slate-950/60 text-white flex items-center justify-center pt-24 relative" /* Increased transparency */
    >
     <div className="text-center px-4 z-10 relative"> {/* Added z-10 and relative to bring content forward */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm <span className="animated-gradient-text">Mayank</span> 👋
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto">
        I'm a <span className="font-semibold text-sky-400">Cloud Enthusiast</span> and React Developer, 
          crafting scalable cloud solutions and intuitive web experiences.
        </p>
        <a
          href="#projects"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition"
        >
          Discover My Solutions
        </a>
      </div>
    </section>
  );
};

export default Hero;
