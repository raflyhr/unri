import React from 'react';

const WelcomeSection = () => {
  return (
    <section className="py-24 md:py-32 bg-white flex items-center justify-center overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-sky-50 px-4 py-2 rounded-full border border-sky-100 animate-bounce duration-[4000ms]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest text-sky-700">Official Portal</span>
          </div>

          <div className="relative group">
            <h2 className="text-5xl md:text-8xl font-black text-gray-100 uppercase tracking-tighter leading-none transition-all group-hover:text-gray-200 duration-700 select-none">
              Welcome
            </h2>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-2xl md:text-4xl font-black text-sky-900 tracking-tight">
                Selamat Datang
              </p>
            </div>
          </div>
          
          <p className="max-w-2xl text-gray-500 font-medium text-sm md:text-lg leading-relaxed px-4">
            Terhubung dengan pusat keunggulan teknologi di Sumatera. <br className="hidden md:block" />
            Membangun masa depan digital Indonesia dari Riau.
          </p>
          
          <div className="w-12 h-1.5 bg-sky-600 rounded-full"></div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent opacity-50"></div>
    </section>
  );
};

export default WelcomeSection;
