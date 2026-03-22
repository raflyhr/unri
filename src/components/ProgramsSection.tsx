import React from 'react';
import { GraduationCap, BookOpen, ChevronRight } from 'lucide-react';

const ProgramsSection = () => {
  const programs = [
    {
      id: 'diploma',
      title: 'Program Diploma (D3)',
      icon: GraduationCap,
      description: 'Menghasilkan tenaga ahli madya yang kompeten di bidang pengembangan perangkat lunak dan infrastruktur IT dengan masa studi 3 tahun.',
      color: 'bg-sky-50 text-sky-700',
      iconColor: 'bg-sky-500',
    },
    {
      id: 'sarjana',
      title: 'Program Sarjana (S1)',
      icon: BookOpen,
      description: 'Membentuk ilmuwan komputer dan profesional IT yang inovatif dengan fokus riset dan pengembangan teknologi terkini masa studi 4 tahun.',
      color: 'bg-blue-50 text-blue-700',
      iconColor: 'bg-blue-600',
    }
  ];

  return (
    <section id="akademik" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
          <div className="inline-block bg-sky-50 px-4 py-1.5 rounded-full text-sky-600 text-[10px] font-black uppercase tracking-widest mb-2">
            Jalur Pendidikan
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter">Program Unggulan</h2>
          <p className="text-gray-500 text-sm md:text-lg font-medium leading-relaxed">
            Pilih jalur pendidikan yang sesuai dengan tujuan karir masa depanmu di dunia teknologi yang terus berkembang.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="group p-8 md:p-12 bg-white border border-gray-100 rounded-[2.5rem] md:rounded-[3.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 text-left hover:-translate-y-2 relative overflow-hidden active:scale-[0.98]"
            >
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl ${program.id === 'diploma' ? 'bg-sky-600' : 'bg-blue-700'} flex items-center justify-center text-white mb-8 md:mb-10 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-current/20`}>
                <program.icon size={32} />
              </div>
              <h4 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 tracking-tight">{program.title}</h4>
              <p className="text-gray-500 leading-relaxed text-sm md:text-lg font-medium mb-8 md:mb-10">{program.description}</p>
              
              <button className="inline-flex items-center font-black text-sm md:text-base text-gray-900 group-hover:text-sky-600 transition-colors uppercase tracking-widest">
                Explore Program <ChevronRight size={18} className="ml-2 transform group-hover:translate-x-2 transition-transform" />
              </button>

              <div className="absolute -top-4 -right-4 bg-gray-50 p-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 rotate-12">
                 <program.icon size={80} className="text-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background patterns */}
      <div className="absolute top-40 -left-20 w-80 h-80 bg-sky-100 rounded-full blur-[100px] opacity-20 hidden md:block"></div>
      <div className="absolute bottom-40 -right-20 w-80 h-80 bg-blue-100 rounded-full blur-[100px] opacity-20 hidden md:block"></div>
    </section>
  );
};

export default ProgramsSection;
