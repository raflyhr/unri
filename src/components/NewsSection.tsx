import React from 'react';
import { Calendar, Tag, ArrowRight, ChevronRight, Mail } from 'lucide-react';
import { newsData } from '../data/news';

const NewsSection = () => {
  return (
    <section id="berita" className="py-24 md:py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8">
          <div className="space-y-4 text-center md:text-left">
            <div className="inline-block bg-sky-100 px-4 py-1.5 rounded-full text-sky-700 text-[10px] font-black uppercase tracking-widest">
              Kabar Terbaru
            </div>
            <h3 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter">Berita & Acara</h3>
          </div>
          <button className="group flex items-center space-x-3 bg-white px-6 py-3 rounded-2xl border border-gray-100 text-sky-600 font-black text-sm uppercase tracking-widest hover:shadow-xl transition-all active:scale-95 shadow-lg shadow-sky-600/5">
            <span>Semua Berita</span>
            <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {newsData.map((news) => (
            <article 
              key={news.id} 
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group flex flex-col border border-gray-100/50 active:scale-[0.98]"
            >
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-sky-600/90 backdrop-blur-md text-white text-[10px] font-black px-4 py-1.5 rounded-full shadow-xl uppercase tracking-widest">
                    {news.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <div className="flex items-center space-x-4 text-xs font-bold text-gray-400 mb-6 uppercase tracking-wider">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-2 text-sky-600" />
                    <span>{news.date}</span>
                  </div>
                </div>
                
                <h4 className="text-xl md:text-2xl font-black text-gray-900 mb-8 leading-tight group-hover:text-sky-600 transition-colors line-clamp-2 tracking-tight">
                  {news.title}
                </h4>
                
                <div className="mt-auto">
                  <button className="w-full bg-gray-50 text-gray-900 py-4 rounded-2xl font-black text-xs hover:bg-sky-600 hover:text-white transition-all shadow-sm active:scale-95 uppercase tracking-widest flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white">
                    Baca Selengkapnya
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Berita UNRI Section */}
        <div className="mt-32 text-center space-y-12">
          <div className="max-w-3xl mx-auto space-y-6">
             <div className="w-12 h-1.5 bg-sky-600 mx-auto rounded-full mb-8"></div>
            <h3 className="text-4xl md:text-7xl font-black text-gray-200 uppercase tracking-tighter italic opacity-50">Berita UNRI</h3>
            <p className="text-gray-400 font-bold text-sm tracking-widest uppercase">Portal Berita Terintegrasi</p>
          </div>
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-white rounded-3xl shadow-xl border border-gray-100 flex items-center justify-center font-black text-sky-600 text-2xl animate-pulse">
               U
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-40 text-center relative">
           <div className="absolute -inset-4 bg-gradient-to-r from-sky-100 to-blue-100 rounded-[4rem] blur-3xl opacity-30"></div>
           <div className="relative bg-white p-10 md:p-16 rounded-[3rem] md:rounded-[4.5rem] shadow-2xl border border-gray-100/50 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="text-center lg:text-left space-y-4">
                <div className="inline-flex p-3 bg-sky-50 rounded-2xl text-sky-600 mb-2">
                  <Mail size={24} />
                </div>
                <h4 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tighter">Stay Connected</h4>
                <p className="text-gray-500 font-medium md:text-lg max-w-sm">Dapatkan update berita dan kegiatan terbaru langsung di email kamu.</p>
              </div>
              <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-4">
                <input 
                  type="email" 
                  placeholder="Alamat email kamu..." 
                  className="bg-gray-50 border border-gray-100 px-8 py-5 rounded-2xl flex-grow md:w-96 focus:outline-none focus:ring-4 focus:ring-sky-600/10 transition-all font-medium text-gray-900"
                />
                <button className="bg-sky-600 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-sky-700 transition-all shadow-xl shadow-sky-600/20 active:scale-95 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
