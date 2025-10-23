import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portofolio", path: "/projects" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    // { name: "AI Automation", path: "/ai-automation" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-black/95 backdrop-blur-md shadow-lg shadow-purple-700/20 border-b border-purple-700/30"
        : "bg-black border-b border-purple-700/20"
        }`}
    >
      {/* Animated top accent line */}
      <div className="h-1 bg-gradient-to-r from-purple-700 via-[#0000A0] to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="/" className="group flex items-center ">
            <img src="/logo.jpg" alt="logo" className="w-16  h-16" />
            <span className="text-xl font-bold text-white group-hover:text-purple-700 transition-colors duration-300">
              AdsHub
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={() => setActiveItem(item.name)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${activeItem === item.name
                  ? "text-purple-700 bg-purple-700/10"
                  : "text-gray-300 hover:text-blue-800 hover:bg-purple-700/10"
                  }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-purple-700 transition-all duration-300 ${activeItem === item.name ? "w-3/4" : "w-0 group-hover:w-1/2"
                    }`}
                ></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <a href="/contact">
            <button className="hidden md:block group relative px-6 py-2.5 bg-gradient-to-r from-purple-700 to-[#0000A0] hover:from-[#000060] hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-700/30 hover:scale-105 overflow-hidden">
              <span className="relative z-10">Get a Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden group relative p-2 rounded-lg text-gray-300 hover:text-purple-700 hover:bg-purple-700/10 transition-all duration-300"
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-6 h-6">
              <Menu
                size={24}
                className={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen
                  ? "opacity-0 rotate-90"
                  : "opacity-100 rotate-0"
                  }`}
              />
              <X
                size={24}
                className={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen
                  ? "opacity-100 rotate-0"
                  : "opacity-0 -rotate-90"
                  }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="py-4 space-y-2 border-t border-purple-700/30">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.path}
                onClick={() => {
                  setActiveItem(item.name);
                  setIsMobileMenuOpen(false);
                }}
                className={`group flex w-full items-center px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg hover:bg-purple-700/10 hover:translate-x-2 ${activeItem === item.name
                  ? "text-purple-700 bg-purple-700/10"
                  : "text-gray-300 hover:text-purple-700"
                  } ${styles.slideInLeft} ${isMobileMenuOpen ? "opacity-100" : "opacity-0"
                  }`}
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                <div className="w-2 h-2 bg-purple-700/50 rounded-full mr-3 group-hover:bg-purple-700 group-hover:scale-125 transition-all duration-300 flex-shrink-0"></div>
                {item.name}
              </a>
            ))}

            <div className="pt-4 px-4 border-t border-purple-700/30">
              <a href="/contact">
                <button className="group relative w-full px-6 py-3 bg-gradient-to-r from-purple-700 to-[#0000A0] hover:from-[#000060] hover:to-purple-700 text-white hover:text-font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-700/30 overflow-hidden">
                  <span className="relative z-10">Get a Quote</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles moved to CSS modules */}
    </header>
  );
};

export default Header;