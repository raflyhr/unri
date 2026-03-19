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
    <section id="akademik" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-sky-600 font-bold uppercase tracking-widest text-sm">Jalur Pendidikan</h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900">Program Unggulan</h3>
          <p className="text-gray-500 text-lg">Pilih jalur pendidikan yang sesuai dengan tujuan karir masa depanmu di dunia teknologi yang terus berkembang.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="group p-10 bg-white border border-gray-100 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 text-left hover:-translate-y-2 relative overflow-hidden"
            >
              <div className={`w-20 h-20 rounded-3xl ${program.id === 'diploma' ? 'bg-sky-500' : 'bg-blue-600'} flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-current/10`}>
                <program.icon size={36} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h4>
              <p className="text-gray-500 leading-relaxed text-lg mb-8">{program.description}</p>
              
              <button className="flex items-center font-bold text-gray-900 group-hover:text-sky-600 transition-colors">
                Selengkapnya <ChevronRight size={20} className="ml-2" />
              </button>

              <div className="absolute top-0 right-0 p-8 opacity-5">
                 <program.icon size={120} />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background patterns */}
      <div className="absolute top-40 -left-20 w-80 h-80 bg-sky-100 rounded-full blur-[100px] opacity-20"></div>
    </section>
  );
};

export default ProgramsSection;
