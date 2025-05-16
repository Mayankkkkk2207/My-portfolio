import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background opacity based on scroll
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-3 bg-gray-900/80 backdrop-blur-md' : 'py-4 bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl md:text-3xl font-bold relative group">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Portfolio
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </h1>

          {/* Navigation Links */}
          <ul className="flex items-center space-x-1 md:space-x-2">
            {[
              { id: 'home', label: 'Home', emoji: '🏠' },
              { id: 'about', label: 'About', emoji: '👤' },
              { id: 'skills', label: 'Skills', emoji: '🛠️' },
              { id: 'projects', label: 'Projects', emoji: '🚀' },
              { id: 'contact', label: 'Contact', emoji: '📧' }
            ].map(({ id, label, emoji }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg group hover:bg-gray-800/50 ${
                    activeSection === id 
                      ? 'text-purple-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <div className="relative">
                    <span className="flex items-center">
                      <span className="mr-1.5">{emoji}</span>
                      {label}
                    </span>
                    
                    {/* Active indicator */}
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 transform origin-left transition-transform duration-300 ${
                      activeSection === id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}></span>
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 rounded-lg"></div>
                  </div>
                </a>
              </li>
            ))}
          </ul>

          {/* Optional: Add a CTA button */}
          <a
            href="#contact"
            className="hidden md:flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            <span>Let's Talk</span>
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Gradient line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    </nav>
  );
};

export default Navbar;
