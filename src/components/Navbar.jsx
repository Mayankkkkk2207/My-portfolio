const Navbar = () => {
  return (
    <nav className="bg-gray-900/80 backdrop-blur-md text-white py-4 shadow-md fixed top-0 w-full z-50">
      {/* 
        `bg-gray-900/80` makes the background 80% opaque.
        `backdrop-blur-md` adds a blur effect to content behind the navbar.
        Removed `px-6` as `container` class will handle horizontal padding. */}
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* 
          `container mx-auto` centers the content block.
          Added responsive padding `px-4 sm:px-6 lg:px-8` to the container for better control, 
          as default container padding might be too small or too large depending on the setup.
        You can adjust these padding values as needed.
      */}
        <h1 className="text-2xl md:text-3xl font-bold animated-gradient-text">My portfolio</h1>
        
        <ul className="flex items-center space-x-6 md:space-x-8 text-sm font-medium mx-auto">
          <li>
            <a href="#home" className="relative hover:text-indigo-400 transition-colors duration-300 group py-2">
              <span role="img" aria-label="home" className="mr-1.5">🏠</span>Home
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </a>
          </li>
          <li>
            <a href="#about" className="relative hover:text-indigo-400 transition-colors duration-300 group py-2">
              <span role="img" aria-label="about" className="mr-1.5">👤</span>About
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </a>
          </li>
          <li>
            <a href="#skills" className="relative hover:text-indigo-400 transition-colors duration-300 group py-2">
              <span role="img" aria-label="skills" className="mr-1.5">🛠️</span>Skills
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </a>
          </li>
          <li>
            <a href="#projects" className="relative hover:text-indigo-400 transition-colors duration-300 group py-2">
              <span role="img" aria-label="projects" className="mr-1.5">🚀</span>Projects
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </a>
          </li>
          <li>
            <a href="#contact" className="relative hover:text-indigo-400 transition-colors duration-300 group py-2">
              <span role="img" aria-label="contact" className="mr-1.5">📧</span>Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </a>
          </li>
        </ul>
        {/* Optional: Add an invisible div with the same width as the logo if you want the UL to be perfectly centered in the page,
            and change the parent div to justify-between. For now, mx-auto on UL should work well.
            Example: <div className="w-[width_of_logo_h1_element] invisible"></div> 
        */}
      </div>
    </nav>
  );
}
export default Navbar;
