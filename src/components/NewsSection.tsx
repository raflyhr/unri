import React from 'react';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { newsData } from '../data/news';

const NewsSection = () => {
  return (
    <section id="berita" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-sky-600 font-bold uppercase tracking-widest text-sm text-center md:text-left">Kabar Terbaru</h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 text-center md:text-left">Berita & Acara</h3>
          </div>
          <button className="flex items-center space-x-2 text-sky-600 font-bold hover:translate-x-2 transition-transform">
            <span>Semua Berita</span>
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news) => (
            <article 
              key={news.id} 
              className="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-sky-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    {news.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-2" />
                    <span>{news.date}</span>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-8 leading-tight group-hover:text-sky-600 transition-colors line-clamp-2">
                  {news.title}
                </h4>
                
                <div className="mt-auto">
                  <button className="w-full bg-sky-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-sky-700 transition-all shadow-lg shadow-sky-600/10 active:scale-95 uppercase tracking-wider">
                    Baca Berita
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Berita UNRI Section (as seen in screenshot) */}
        <div className="mt-32 text-center space-y-10">
          <div className="max-w-3xl mx-auto space-y-4">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 italic">Berita UNRI</h3>
            <div className="w-24 h-1.5 bg-sky-600 mx-auto rounded-full"></div>
          </div>
          <div className="flex justify-center">
            <div className="bg-white px-8 py-4 rounded-2xl shadow-sm border border-gray-100 font-bold text-gray-400">
               U
            </div>
          </div>
        </div>

        <div className="mt-32 text-center">
           <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <h4 className="text-2xl font-black text-gray-900 mb-2">Langganan Newsletter</h4>
                <p className="text-gray-500">Dapatkan update berita dan kegiatan terbaru langsung di email kamu.</p>
              </div>
              <div className="flex w-full lg:w-auto gap-4">
                <input 
                  type="email" 
                  placeholder="Alamat email kamu" 
                  className="bg-gray-50 border border-gray-100 px-6 py-4 rounded-2xl flex-grow md:w-80 focus:outline-none focus:ring-2 focus:ring-sky-600/20"
                />
                <button className="bg-sky-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-sky-700 transition-all shadow-lg shadow-sky-600/20">
                  Daftar
                </button>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

// Internal icon import for this file
const ChevronRight = ({ size, className }: { size?: number, className?: string }) => (
  <svg 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

export default NewsSection;
