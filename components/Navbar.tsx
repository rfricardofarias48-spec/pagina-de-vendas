import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Quem Somos', href: '#audience' },
    { name: 'Padrão Elevva', href: '#ux-design' },
    { name: 'Preço', href: '#planos' },
    { name: 'Contato', href: '#contato' },
  ];

  // Logic: 
  // Transparent at top (Hero is dark) -> Text White
  // White/Glass when scrolled (Sections are light) -> Text Dark
  const navBg = scrolled 
    ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200 py-3 md:py-4' 
    : 'bg-transparent py-6 md:py-8';
  
  const textColor = scrolled ? 'text-slate-900' : 'text-white';
  const logoDotColor = scrolled ? 'text-rose-600' : 'text-rose-500';
  const mobileBg = scrolled ? 'bg-white' : 'bg-slate-950';
  const mobileText = scrolled ? 'text-slate-900' : 'text-white';

  return (
    <nav 
      className={`fixed top-0 w-full z-40 transition-all duration-500 ease-in-out ${navBg}`}
    >
      {/* Container pushed to edges - Reduced padding on mobile (px-5) */}
      <div className="w-full px-5 md:px-16 flex justify-between items-center">
        {/* Logo - Scaled down from 6xl to 5xl/4xl */}
        <a href="#" className={`text-3xl md:text-5xl font-bold tracking-tighter transition-colors duration-300 ${textColor}`}>
          ELEVVA<span className={logoDotColor}>.</span>
        </a>

        {/* Desktop Menu - Scaled down slightly */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-base lg:text-lg font-bold font-montserrat tracking-[0.2em] uppercase transition-colors duration-300 hover:text-rose-500 ${textColor}`}
              >
                {link.name}
              </a>
            ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden ${textColor}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} className={scrolled ? "text-slate-900" : "text-white"} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden absolute top-0 left-0 w-full h-screen ${mobileBg} z-50 flex flex-col items-center justify-center space-y-10 animate-fade-in`}>
          <button 
             className={`absolute top-6 right-5 ${mobileText}`}
             onClick={() => setIsOpen(false)}
          >
            <X size={40} />
          </button>
          
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-2xl font-montserrat font-medium ${mobileText} hover:text-rose-500 transition-colors text-center`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;