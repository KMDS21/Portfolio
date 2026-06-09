import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-blue-600 rounded-2xl flex items-center justify-center text-xl font-bold">K</div>
          <span className="text-2xl font-semibold tracking-tight">Kaveesha De Silva</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <button onClick={() => scrollTo('home')} className="hover:text-blue-500 transition-colors">Home</button>
          <button onClick={() => scrollTo('about')} className="hover:text-blue-500 transition-colors">About</button>
          <button onClick={() => scrollTo('projects')} className="hover:text-blue-500 transition-colors">Projects</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-blue-500 transition-colors">Contact</button>
        </div>

        <div className="flex items-center gap-4">
          <a href="/Kaveesha_De_Silva_CV.pdf" 
             download
             className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 transition-colors rounded-2xl text-sm font-semibold flex items-center gap-2">
            <i className="fas fa-download"></i>
            Download CV
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-zinc-950 border-t border-zinc-800 py-8"
        >
          <div className="flex flex-col items-center gap-6 text-lg">
            <button onClick={() => scrollTo('home')}>Home</button>
            <button onClick={() => scrollTo('about')}>About</button>
            <button onClick={() => scrollTo('projects')}>Projects</button>
            <button onClick={() => scrollTo('contact')}>Contact</button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;