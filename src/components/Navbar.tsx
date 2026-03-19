import React, { useState, useEffect } from 'react';
import { Menu, X, Search, GraduationCap } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const topLinks = [
    { name: 'Universitas Riau', href: 'https://unri.ac.id' },
    { name: 'SATU UNRI', href: '#' },
    { name: 'Perpustakaan', href: '#' },
    { name: 'Webmail', href: '#' },
    { name: 'PPID', href: '#' },
  ];

  const menuItems = [
    { name: 'Profil', href: '#profil' },
    { name: 'Akademik', href: '#akademik' },
    { name: 'Dosen dan Staff', href: '#dosen' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Kemahasiswaan', href: '#mahasiswa' },
  ];

  return (
    <header className="fixed w-full z-50">
      {/* Top Secondary Navbar */}
      <div className={`w-full transition-all duration-500 bg-sky-900 border-b border-white/5 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-10 opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-end items-center h-full space-x-6">
            {topLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-[11px] font-bold text-white/70 hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-2 border-l border-white/10 pl-6 ml-2">
               <img src="https://flagcdn.com/w20/id.png" alt="ID" className="w-4 h-3 object-cover rounded-sm" />
               <span className="text-[10px] font-black text-white">ID</span>
               <span className="text-white/20">|</span>
               <span className="text-[10px] font-bold text-white/40">EN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="bg-sky-600 p-2.5 rounded-2xl transform group-hover:rotate-12 transition-transform shadow-lg shadow-sky-600/20">
                <GraduationCap className="text-white w-7 h-7" />
              </div>
              <div className="flex flex-col">
                <span className={`font-black text-2xl tracking-tighter leading-none ${isScrolled ? 'text-gray-900' : 'text-white'}`}>UNIVERSITAS RIAU</span>
                <span className={`text-[10px] font-bold uppercase tracking-[0.2em] mt-1 ${isScrolled ? 'text-sky-600' : 'text-white/70'}`}>SISTEM INFORMASI</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 hover:bg-sky-600/10 ${isScrolled ? 'text-gray-700 hover:text-sky-600' : 'text-white hover:text-white'}`}
                >
                  {item.name}
                </a>
              ))}
              
              <div className={`h-6 w-px mx-4 ${isScrolled ? 'bg-gray-200' : 'bg-white/20'}`}></div>
              
              <button className={`p-2 rounded-full transition-all ${isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}>
                <Search size={20} />
              </button>

            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <button className={`${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                <Search size={20} />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg ${isScrolled ? 'text-gray-900' : 'text-white'} hover:bg-gray-100 transition-colors focus:outline-none`}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 animate-in fade-in slide-in-from-top-4 duration-300 shadow-2xl overflow-hidden rounded-b-3xl mx-4 mt-2">
            <div className="px-4 py-6 space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 rounded-xl text-base font-bold text-gray-800 hover:text-sky-600 hover:bg-sky-50 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
          
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
