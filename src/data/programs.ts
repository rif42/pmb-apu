export interface Program {
  id: string;
  name: string;
  degree: string;
  shortDescription: string;
  subPrograms: string[];
  image: string;
  link: string;
}

export const programs: Program[] = [
  {
    id: 'biomedical-science',
    name: 'Ilmu Biomedis',
    degree: 'S1',
    shortDescription: 'Mempelajari ilmu biomedis modern untuk riset kesehatan, terapi sel, dan inovasi medis berbasis teknologi.',
    subPrograms: [
      'Terapi Sel Biomedis',
      'Industri Biomedis',
      'Kecerdasan Buatan Biomedis',
    ],
    image: '/images/programs/biomedical.jpg',
    link: 'https://biomedical.kmb.ac.id/'
  },
  {
    id: 'biotechnology',
    name: 'Bioteknologi',
    degree: 'S1',
    shortDescription: 'Menggabungkan biologi dan teknologi untuk menghasilkan solusi pangan, kesehatan, dan industri berkelanjutan.',
    subPrograms: [
      'Bioteknologi Medis',
      'Informatika Bioteknologi',
      'Industri Bioteknologi',
    ],
    image: '/images/programs/biotech.jpg',
    link: 'https://biotechnology.kmb.ac.id/'
  },
  {
    id: 'law',
    name: 'Hukum',
    degree: 'S1',
    shortDescription: 'Membentuk calon profesional hukum yang kuat di litigasi, etika, dan regulasi pada sektor strategis.',
    subPrograms: ['Hukum & Litigasi', 'Hukum Medis'],
    image: '/images/programs/law.jpg',
    link: 'https://law.kmb.ac.id/'
  },
  {
    id: 'management',
    name: 'Manajemen',
    degree: 'S1',
    shortDescription: 'Fokus pada bisnis digital, kewirausahaan, dan kepemimpinan untuk membangun organisasi yang adaptif.',
    subPrograms: [
      'Manajemen Bisnis Internasional',
      'Manajemen Bisnis Digital',
      'Manajemen Bisnis Kewirausahaan',
    ],
    image: '/images/programs/management.jpg',
    link: 'https://management.kmb.ac.id/'
  },
  {
    id: 'communication',
    name: 'Ilmu Komunikasi',
    degree: 'S1',
    shortDescription: 'Mengasah strategi komunikasi kreatif untuk media digital, brand, dan relasi publik di era baru.',
    subPrograms: [
      'Ilmu Komunikasi Digital dan Media Baru',
      'Ilmu Komunikasi Bisnis Strategis',
    ],
    image: '/images/programs/communication.jpg',
    link: 'https://communication.kmb.ac.id/'
  },
  {
    id: 'midwifery-s1',
    name: 'Kebidanan',
    degree: 'S1',
    shortDescription: 'Menyiapkan bidan profesional dengan pendekatan kesehatan perempuan, layanan holistik, dan jiwa wirausaha.',
    subPrograms: [
      'Layanan Kesehatan & Kecantikan Perempuan Inovatif dalam Kebidanan',
      'Kewirausahaan dalam Bisnis Kebidanan',
    ],
    image: '/images/programs/midwiferys1.jpg',
    link: 'https://bachelor-midwifery.kmb.ac.id/'
  },

];
