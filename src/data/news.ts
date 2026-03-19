import { News, Program } from '../types';

export const newsData: News[] = [
  {
    id: '1',
    title: 'Mahasiswa Berprestasi Tingkat Nasional (LETIN) 5',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
    date: '15 Maret 2024',
    category: 'Prestasi',
  },
  {
    id: '2',
    title: 'Peluncuran Program Magang Bersama Industri (PMMB)',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80',
    date: '10 Maret 2024',
    category: 'Akademik',
  },
  {
    id: '3',
    title: 'Workshop Modern UI/UX Design untuk Pemula',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    date: '5 Maret 2024',
    category: 'Kegiatan',
  },
  {
    id: '4',
    title: 'Kunjungan Industri ke Tech Startup Terkemuka',
    image: 'https://images.unsplash.com/photo-1558403191-137953287db9?w=800&q=80',
    date: '2 Maret 2024',
    category: 'Instansi',
  },
  {
    id: '5',
    title: 'Seminar Nasional Tren Teknologi 2024',
    image: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?w=800&q=80',
    date: '28 Februari 2024',
    category: 'Seminar',
  },
  {
    id: '6',
    title: 'Lomba Coding Hackathon antar Mahasiswa',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
    date: '25 Februari 2024',
    category: 'Kompetisi',
  },
];

export const programsData: Program[] = [
  {
    id: 'diploma',
    title: 'Program Diploma',
    description: 'Fokus pada keahlian praktis dan kesiapan kerja dalam waktu singkat.',
    icon: 'GraduationCap',
  },
  {
    id: 'sarjana',
    title: 'Program Sarjana',
    description: 'Pendidikan akademik komprehensif dengan fokus teori dan riset.',
    icon: 'BookOpen',
  },
];
