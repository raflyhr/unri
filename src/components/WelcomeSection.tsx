import React from 'react';

const WelcomeSection = () => {
  return (
    <section className="py-20 bg-gray-50 flex items-center justify-center overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sky-600/20 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-block relative">
          <h2 className="text-4xl md:text-6xl font-black text-gray-200 uppercase tracking-[0.3em] leading-tight animate-pulse transition-all">
            Selamat Datang..
          </h2>
          {/* Subtle overlay text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-sm font-bold text-sky-600/40 tracking-[0.5em] uppercase">Informatika UNRI</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default WelcomeSection;
