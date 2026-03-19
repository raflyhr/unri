import React from 'react';
import { ChevronRight, Play, Users, BookOpen, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-28 overflow-hidden bg-sky-900">
      {/* Background patterns and overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/hero-bg.png" 
          alt="Campus Background" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#082f49]/90 via-[#0369a1]/70 to-[#0ea5e9]/50"></div>
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-sky-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-10 animate-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl px-5 py-2.5 rounded-2xl border border-white/20 shadow-2xl">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-[#0369a1] bg-gray-300 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="student" />
                  </div>
                ))}
              </div>
              <span className="text-white text-xs font-bold tracking-wider uppercase">Bergabung dengan 2.400+ Mahasiswa</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.95] tracking-tighter">
              Transformasi <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-200 to-cyan-300">Teknologi</span> <br />
              Masa Depan.
            </h1>
            
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl font-medium">
              Menyiapkan talenta digital unggul melalui ekosistem akademik modern yang berfokus pada inovasi, riset, dan kolaborasi industri global.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <button className="bg-sky-600 text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center space-x-3 hover:bg-sky-500 transition-all transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-600/40 group">
                <span>Daftar Sekarang</span>
                <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/5 backdrop-blur-md text-white border-2 border-white/10 px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center space-x-3 hover:bg-white/10 transition-all transform hover:-translate-y-1 group">
                <div className="bg-sky-600 group-hover:bg-sky-500 p-2 rounded-xl transition-colors">
                  <Play size={18} fill="white" />
                </div>
                <span>Tonton Profil</span>
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/10">
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-cyan-400">
                  <Star size={20} fill="currentColor" />
                  <span className="text-2xl font-black text-white">UNGGUL</span>
                </div>
                <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Akreditasi BAN-PT</div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-sky-400">
                  <Users size={20} />
                  <span className="text-2xl font-black text-white">45+</span>
                </div>
                <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Dosen Pengajar</div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-blue-400">
                  <BookOpen size={20} />
                  <span className="text-2xl font-black text-white">100%</span>
                </div>
                <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Lulusan Bekerja</div>
              </div>
            </div>
          </div>

          {/* Image/Visual Component */}
          <div className="lg:col-span-5 relative hidden lg:block animate-in fade-in zoom-in duration-1000 delay-300">
             <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-sky-600 to-blue-600 rounded-[4rem] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden border-8 border-white/10 shadow-2xl transform hover:scale-[1.02] transition-transform duration-700">
                  <img 
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80" 
                    alt="Mahasiswa" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-10 pt-20">
                     <div className="inline-block bg-sky-600 px-4 py-1.5 rounded-full text-white text-[10px] font-black uppercase tracking-widest mb-4">
                       News Highlight
                     </div>
                     <h3 className="text-3xl font-black text-white leading-tight mb-2">Pemenang Lomba Essay Nasional 2024</h3>
                     <p className="text-white/60 font-medium">Tim Mahasiswa TI UNRI meraih Juara 1 di ajang LETIN 5.</p>
                  </div>
                </div>
             </div>
             
             {/* Floating Elements */}
             <div className="absolute -top-6 -right-6 bg-white p-5 rounded-3xl shadow-2xl animate-bounce duration-[3000ms]">
                <div className="bg-sky-50 p-2 rounded-xl mb-2 flex items-center justify-center">
                  <Star className="text-sky-700" fill="currentColor" />
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
