import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail, BookOpen } from "lucide-react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full transition-all duration-300 z-50 
      ${
        isScrolled ? "bg-black/80 backdrop-blur-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Victor Hugo Somavilla
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink onClick={() => scrollToSection("about")}>Sobre</NavLink>
            <NavLink onClick={() => scrollToSection("technologies")}>
              Tecnologias
            </NavLink>
            <NavLink onClick={() => scrollToSection("experience")}>
              Experiência
            </NavLink>
            <NavLink onClick={() => scrollToSection("projetos")}>
              Projetos
            </NavLink>
            <NavLink onClick={() => scrollToSection("contact")}>
              Contato
            </NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <SocialIcon
              icon={<Github className="w-5 h-5" />}
              href="https://github.com/Victor-cmda"
            />
            <SocialIcon
              icon={<Linkedin className="w-5 h-5" />}
              href="https://linkedin.com/in/victorhugosomavilla"
            />
            <SocialIcon
              icon={<Mail className="w-5 h-5" />}
              href="mailto:victor.somavilla@aol.com"
            />
            {/* <SocialIcon icon={<BookOpen className="w-5 h-5" />} href="/blog" /> */}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg">
            <div className="px-4 py-4 space-y-4">
              <MobileNavLink onClick={() => scrollToSection("projetos")}>
                Projetos
              </MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection("sobre")}>
                Sobre
              </MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection("experiencia")}>
                Experiência
              </MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection("contato")}>
                Contato
              </MobileNavLink>
              <div className="flex space-x-4 pt-4">
                <SocialIcon
                  icon={<Github className="w-5 h-5" />}
                  href="https://github.com/Victor-cmda"
                />
                <SocialIcon
                  icon={<Linkedin className="w-5 h-5" />}
                  href="https://linkedin.com/in/victorhugosomavilla"
                />
                <SocialIcon
                  icon={<Mail className="w-5 h-5" />}
                  href="mailto:victor.somavilla@aol.com"
                />
                {/* <SocialIcon
                  icon={<BookOpen className="w-5 h-5" />}
                  href="/blog"
                /> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
  >
    {children}
  </button>
);

const MobileNavLink = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-200 font-medium"
  >
    {children}
  </button>
);

const SocialIcon = ({ icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors duration-200"
  >
    {icon}
  </a>
);

export default NavBar;
