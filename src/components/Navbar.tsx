import React, { useState, useEffect } from 'react';
import { Menu, X, Search, GraduationCap, ChevronRight } from 'lucide-react';

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
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Secondary Navbar - Hidden on Mobile */}
      <div className={`w-full transition-all duration-500 bg-sky-900 border-b border-white/5 hidden md:block ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-10 opacity-100'}`}>
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
      <nav className={`w-full transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 md:py-3' : 'bg-transparent py-4 md:py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center space-x-2 md:space-x-3 group cursor-pointer">
              <div className="bg-sky-600 p-2 md:p-2.5 rounded-xl md:rounded-2xl transform group-hover:rotate-12 transition-transform shadow-lg shadow-sky-600/20">
                <GraduationCap className="text-white w-5 h-5 md:w-7 md:h-7" />
              </div>
              <div className="flex flex-col">
                <span className={`font-black text-lg md:text-2xl tracking-tighter leading-none ${isScrolled ? 'text-gray-900' : 'text-white'}`}>UNIVERSITAS RIAU</span>
                <span className={`text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] mt-0.5 md:mt-1 ${isScrolled ? 'text-sky-600' : 'text-white/70'}`}>SISTEM INFORMASI</span>
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
            <div className="md:hidden flex items-center space-x-1">
              <button className={`p-2.5 rounded-xl transition-all active:scale-95 ${isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}>
                <Search size={20} />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2.5 rounded-xl transition-all active:scale-95 ${isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'} focus:outline-none`}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white/98 backdrop-blur-xl z-[60] md:hidden transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center px-6 py-6 border-b border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="bg-sky-600 p-2 rounded-xl">
                  <GraduationCap className="text-white w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-xl tracking-tighter text-gray-900">UNIVERSITAS RIAU</span>
                  <span className="text-[8px] font-bold uppercase tracking-widest text-sky-600">SISTEM INFORMASI</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-3 rounded-2xl bg-gray-50 text-gray-900 hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex-1 overflow-y-auto px-6 py-8">
              <div className="flex flex-col space-y-2">
                {menuItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center justify-between p-4 rounded-2xl text-2xl font-black text-gray-900 hover:bg-sky-50 transition-all duration-300 transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{item.name}</span>
                    <ChevronRight className="w-6 h-6 text-sky-600 transform group-hover:translate-x-2 transition-transform" />
                  </a>
                ))}
              </div>

              {/* Secondary Links */}
              <div className="mt-12 pt-8 border-t border-gray-100">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6 px-4">Portal & Layanan</p>
                <div className="grid grid-cols-2 gap-4">
                  {topLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="px-4 py-3 rounded-xl bg-gray-50 text-xs font-bold text-gray-600 hover:bg-sky-100 hover:text-sky-700 transition-all"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Menu Footer */}
            <div className="p-6 border-t border-gray-100 bg-gray-50/50">
              <div className="flex items-center justify-between">
                <div className="flex space-x-4">
                   <div className="flex items-center space-x-2 bg-white px-3 py-1.5 rounded-lg shadow-sm border border-gray-100">
                      <img src="https://flagcdn.com/w20/id.png" alt="ID" className="w-4 h-3 object-cover rounded-sm" />
                      <span className="text-[10px] font-black text-gray-900">ID</span>
                   </div>
                   <div className="flex items-center space-x-2 px-3 py-1.5 grayscale opacity-50">
                      <span className="text-[10px] font-bold text-gray-500">EN</span>
                   </div>
                </div>
                <button className="bg-sky-600 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg shadow-sky-600/20 active:scale-95 transition-transform">
                  Cari Layanan
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
