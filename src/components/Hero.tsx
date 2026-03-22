import React from 'react';
import { ChevronRight, Play, Users, BookOpen, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center pt-36 pb-16 lg:pt-28 overflow-hidden bg-sky-900">
      {/* Background patterns and overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/hero-bg.png" 
          alt="Campus Background" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#082f49]/95 via-[#0369a1]/80 to-[#0ea5e9]/50"></div>
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 -left-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-sky-600/30 rounded-full blur-[80px] md:blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 relative z-10 w-full font-inter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8 md:space-y-10 animate-in slide-in-from-bottom md:slide-in-from-left duration-1000">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl px-4 md:px-5 py-2 md:py-2.5 rounded-2xl border border-white/20 shadow-2xl">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-sky-600 bg-gray-300 overflow-hidden shadow-lg">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="student" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <span className="text-white text-[10px] md:text-xs font-bold tracking-wider uppercase">Bergabung dengan 2.400+ Mahasiswa</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
              Transformasi <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-200 to-cyan-300">Teknologi</span> <br />
              Masa Depan.
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl font-medium">
              Menyiapkan talenta digital unggul melalui ekosistem akademik modern yang berfokus pada inovasi, riset, dan kolaborasi industri global.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
               <button className="px-8 py-4 bg-white text-sky-900 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-sky-50 transition-all shadow-xl shadow-white/10 active:scale-95">
                 Mulai Jelajahi
               </button>
               <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/20 transition-all flex items-center justify-center space-x-3 active:scale-95">
                 <Play size={18} fill="currentColor" />
                 <span>Video Profil</span>
               </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 pt-8 md:pt-10 border-t border-white/10">
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-cyan-400">
                  <Star size={18} fill="currentColor" className="md:w-5 md:h-5" />
                  <span className="text-xl md:text-2xl font-black text-white uppercase">Unggul</span>
                </div>
                <div className="text-white/40 text-[9px] md:text-[10px] font-bold uppercase tracking-widest ">Akreditasi BAN-PT</div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-sky-400">
                  <Users size={18} className="md:w-5 md:h-5" />
                  <span className="text-xl md:text-2xl font-black text-white">45+</span>
                </div>
                <div className="text-white/40 text-[9px] md:text-[10px] font-bold uppercase tracking-widest">Dosen Pengajar</div>
              </div>
              <div className="space-y-1 col-span-2 md:col-span-1 border-t md:border-t-0 border-white/5 pt-4 md:pt-0">
                <div className="flex items-center space-x-2 text-blue-400">
                  <BookOpen size={18} className="md:w-5 md:h-5" />
                  <span className="text-xl md:text-2xl font-black text-white">100%</span>
                </div>
                <div className="text-white/40 text-[9px] md:text-[10px] font-bold uppercase tracking-widest">Lulusan Bekerja</div>
              </div>
            </div>
          </div>

          {/* Image/Visual Component - Visible on both but re-arranged */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0 animate-in fade-in zoom-in duration-1000 delay-300">
             <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-sky-600 to-blue-600 rounded-[3rem] md:rounded-[4rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative aspect-[4/5] sm:aspect-video lg:aspect-[4/5] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border-4 md:border-8 border-white/10 shadow-2xl transform hover:scale-[1.02] transition-transform duration-700">
                  <img 
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80" 
                    alt="Mahasiswa" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-6 md:p-10 pt-20">
                     <div className="inline-block bg-sky-600 px-3 md:px-4 py-1 rounded-full text-white text-[8px] md:text-[10px] font-black uppercase tracking-widest mb-3 md:mb-4">
                       News Highlight
                     </div>
                     <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2">Pemenang Lomba Essay Nasional 2024</h3>
                     <p className="text-white/60 text-sm md:text-base font-medium">Tim Mahasiswa SI UNRI meraih Juara 1 di LETIN 5.</p>
                  </div>
                </div>
             </div>
             
             {/* Floating Elements - Hidden on small mobile to avoid clutter, shown on SM+ */}
             <div className="absolute -top-6 -right-6 bg-white p-4 md:p-5 rounded-2xl md:rounded-3xl shadow-2xl hidden sm:block animate-bounce duration-[3000ms]">
                <div className="bg-sky-50 p-2 rounded-xl mb-2 flex items-center justify-center">
                  <Star className="text-sky-700" fill="currentColor" size={20} />
                </div>
                <div className="text-center">
                  <div className="text-xs font-black text-gray-900 leading-none">Ranking #1</div>
                  <div className="text-[10px] font-bold text-gray-400">Sumatera</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
