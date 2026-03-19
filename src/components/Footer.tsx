import React from 'react';
import { GraduationCap, Facebook, Instagram, Twitter, Mail, Phone, MapPin, Globe, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sky-950 text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand and About */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2.5 rounded-2xl shadow-xl shadow-black/20">
                <GraduationCap className="text-sky-700 w-7 h-7" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-2xl tracking-tighter leading-none">TI UNRI</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] mt-1 text-white/60">Sistem Informasi</span>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed font-medium">
              Menjadi pusat unggulan pendidikan dan riset Sistem Informasi di tingkat regional dan nasional yang berorientasi pada inovasi teknologi global.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Globe].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white hover:text-sky-700 transition-all transform hover:-translate-y-2">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-black text-white mb-8 uppercase text-xs tracking-[0.3em]">Navigasi Utama</h4>
            <ul className="space-y-4">
              {['Direktori Dosen', 'Publikasi Riset', 'Layanan IT', 'Kerjasama Industri', 'Repository Alumni'].map((item) => (
                <li key={item} className="group flex items-center">
                  <a href="#" className="text-white/60 group-hover:text-white transition-colors flex items-center font-bold text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mr-2 opacity-0 group-hover:opacity-100 transition-all scale-0 group-hover:scale-100"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Portal */}
          <div>
            <h4 className="font-black text-white mb-8 uppercase text-xs tracking-[0.3em]">Portal Akademik</h4>
            <ul className="space-y-4">
              {['Sistem Informasi Mahasiswa', 'Portal E-Learning', 'E-Library UNRI', 'KRS Online', 'Kalender Pendidikan'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-white transition-colors flex items-center justify-between text-sm font-bold group">
                    {item}
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Map */}
          <div>
            <h4 className="font-black text-white mb-8 uppercase text-xs tracking-[0.3em]">Sekretariat</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4 text-white/60 group cursor-pointer">
                <div className="bg-white/5 p-2 rounded-xl group-hover:bg-sky-700/20 transition-colors">
                  <MapPin className="text-sky-500 shrink-0" size={18} />
                </div>
                <span className="text-sm font-medium leading-relaxed">Jl. HR. Soebrantas Km. 12,5. Kampus Bina Widya, Pekanbaru 28293</span>
              </li>
              <li className="flex items-center space-x-4 text-white/60 group cursor-pointer">
                <div className="bg-white/5 p-2 rounded-xl group-hover:bg-sky-700/20 transition-colors">
                  <Mail className="text-sky-500 shrink-0" size={18} />
                </div>
                <span className="text-sm font-medium">informatika@unri.ac.id</span>
              </li>
              <li className="flex items-center space-x-4 text-white/60 group cursor-pointer">
                <div className="bg-white/5 p-2 rounded-xl group-hover:bg-sky-700/20 transition-colors">
                  <Phone className="text-sky-500 shrink-0" size={18} />
                </div>
                <span className="text-sm font-medium">(0761) 566601</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:row justify-between items-center gap-6">
          <div className="flex items-center space-x-2 text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">
            <span>© {new Date().getFullYear()}</span>
            <span className="h-1 w-1 bg-white/20 rounded-full"></span>
            <span>Sistem Informasi UNRI</span>
          </div>
          <p className="text-white/40 text-[11px] font-medium max-w-2xl text-center leading-relaxed">
            Situs web ini dikelola oleh Tim IT Jurusan Sistem Informasi Universitas Riau. Hak cipta dilindungi undang-undang.
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
