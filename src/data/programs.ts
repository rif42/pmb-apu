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
    name: 'Biomedical Science',
    degree: 'S1',
    shortDescription: 'Mempelajari ilmu biomedis modern untuk riset kesehatan, terapi sel, dan inovasi medis berbasis teknologi.',
    subPrograms: [
      'Biomedical Cell Therapy',
      'Biomedical Industry',
      'Biomedical AI',
    ],
    image: '/images/programs/biomedical.jpg',
    link: 'https://biomedical.kmb.ac.id/'
  },
  {
    id: 'biotechnology',
    name: 'Biotechnology',
    degree: 'S1',
    shortDescription: 'Menggabungkan biologi dan teknologi untuk menghasilkan solusi pangan, kesehatan, dan industri berkelanjutan.',
    subPrograms: [
      'Medical Biotechnology',
      'Biotechnology Informatics',
      'Biotechnology Industry',
    ],
    image: '/images/programs/biotech.jpg',
    link: 'https://biotechnology.kmb.ac.id/'
  },
  {
    id: 'law',
    name: 'Hukum',
    degree: 'S1',
    shortDescription: 'Membentuk calon profesional hukum yang kuat di litigasi, etika, dan regulasi pada sektor strategis.',
    subPrograms: ['Law & Litigation', 'Medical Law'],
    image: '/images/programs/law.jpg',
    link: 'https://law.kmb.ac.id/'
  },
  {
    id: 'management',
    name: 'Manajemen',
    degree: 'S1',
    shortDescription: 'Fokus pada bisnis digital, kewirausahaan, dan kepemimpinan untuk membangun organisasi yang adaptif.',
    subPrograms: [
      'International Business Management',
      'Digital Business Management',
      'Entrepreneur Business Management',
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
      'Digital and New Media Communication Science',
      'Strategic Business Communication Science',
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
      'Innovative Women Health & Beauty Care in Midwifery',
      'Entrepreneur in Midwifery Business',
    ],
    image: '/images/programs/midwiferys1.jpg',
    link: 'https://bachelor-midwifery.kmb.ac.id/'
  },

];
