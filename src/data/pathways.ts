export interface Wave {
  name: string;
  period: string;
  benefit: string;
  badgeType: 'active' | 'upcoming' | 'normal';
}

export interface Pathway {
  id: string;
  name: string;
  description: string;
  icon: string;
  waves?: Wave[];
  scholarships?: string[];
  ctaText: string;
  ctaLink: string;
}

export const pathways: Pathway[] = [
  {
    id: 'jalur-reguler',
    name: 'Jalur Reguler',
    description:
      'Pendaftaran umum bagi lulusan SMA/SMK/MA dan sederajat. Tersedia 3 gelombang pendaftaran dengan berbagai keuntungan.',
    icon: 'graduation-cap',
    waves: [
      {
        name: 'Gelombang I',
        period: 'Oktober 2025 – Januari 2026',
        benefit: 'Diskon 50%',
        badgeType: 'active',
      },
      {
        name: 'Gelombang II',
        period: 'Februari 2026 – Mei 2026',
        benefit: 'Diskon 30%',
        badgeType: 'upcoming',
      },
      {
        name: 'Gelombang III',
        period: 'Juni 2026 – September 2026',
        benefit: 'Harga Normal',
        badgeType: 'normal',
      },
    ],
    ctaText: 'Daftar Reguler',
    ctaLink: 'https://kmb.ac.id/informasi-pendaftaran',
  },
  {
    id: 'jalur-beasiswa',
    name: 'Jalur Beasiswa',
    description:
      'Program beasiswa untuk mahasiswa berprestasi akademik, non-akademik, dan content creator. Potongan biaya hingga 100%.',
    icon: 'award',
    scholarships: [
      'Beasiswa Akademik',
      'Beasiswa Non-Akademik',
      'Beasiswa Content Creator',
      'Beasiswa Pre-University',
    ],
    ctaText: 'Daftar Beasiswa',
    ctaLink: 'https://scholarship.kmb.ac.id',
  },
];
