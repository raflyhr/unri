import React from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sky-600 font-bold uppercase tracking-widest text-sm">Tour Virtual</h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900">Kenali Jurusan Kami</h3>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Saksikan video profil singkat untuk melihat fasilitas, kegiatan mahasiswa, dan lingkungan belajar di Teknik Informatika Universitas Riau.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Mock Video Player */}
          <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-100 relative group cursor-pointer bg-gray-900">
             <img 
               src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80" 
               alt="Video Thumbnail" 
               className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-x-0 inset-y-0 flex items-center justify-center">
                <button className="w-24 h-24 bg-sky-600 text-white rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-500 ring-8 ring-sky-600/20">
                  <Play size={40} fill="white" className="ml-2" />
                </button>
             </div>
             
             {/* Text Overlay */}
             <div className="absolute bottom-10 left-10 text-white animate-in slide-in-from-bottom duration-500">
                <h4 className="text-2xl font-bold mb-2">Profil Jurusan 2024</h4>
                <p className="opacity-80">Durasi: 03:45 • Resolusi 4K</p>
             </div>
          </div>
          
          {/* Decorative shapes */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-600/10 rounded-full -z-10 blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full -z-10 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
