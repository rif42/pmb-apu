export interface Program {
  id: string;
  name: string;
  degree: string;
  subPrograms: string[];
  image: string;
}

export const programs: Program[] = [
  {
    id: 'biomedical-science',
    name: 'Biomedical Science',
    degree: 'S1',
    subPrograms: [
      'Biomedical Cell Therapy',
      'Biomedical Industry',
      'Biomedical AI',
    ],
    image: '/images/programs/biomedical.jpg',
  },
  {
    id: 'biotechnology',
    name: 'Biotechnology',
    degree: 'S1',
    subPrograms: [
      'Medical Biotechnology',
      'Biotechnology Informatics',
      'Biotechnology Industry',
    ],
    image: '/images/programs/biotech.jpg',
  },
  {
    id: 'law',
    name: 'Hukum',
    degree: 'S1',
    subPrograms: ['Law & Litigation', 'Medical Law'],
    image: '/images/programs/law.jpg',
  },
  {
    id: 'management',
    name: 'Manajemen',
    degree: 'S1',
    subPrograms: [
      'International Business Management',
      'Digital Business Management',
      'Entrepreneur Business Management',
    ],
    image: '/images/programs/management.jpg',
  },
  {
    id: 'communication',
    name: 'Ilmu Komunikasi',
    degree: 'S1',
    subPrograms: [
      'Digital and New Media Communication Science',
      'Strategic Business Communication Science',
    ],
    image: '/images/programs/communication.jpg',
  },
  {
    id: 'midwifery-s1',
    name: 'Kebidanan',
    degree: 'S1',
    subPrograms: [
      'Innovative Women Health & Beauty Care in Midwifery',
      'Entrepreneur in Midwifery Business',
    ],
    image: '/images/programs/midwifery-s1.jpg',
  },
  {
    id: 'midwifery-d3',
    name: 'Kebidanan',
    degree: 'D3',
    subPrograms: [
      'International Midwifery',
      'Innovation Entrepreneurship Midwifery',
    ],
    image: '/images/programs/midwifery-d3.jpg',
  },
];
