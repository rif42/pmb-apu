export interface Scholarship {
  id: string;
  name: string;
  description: string;
  benefit: string;
  requirements: string[];
}

export const scholarships: Scholarship[] = [
  {
    id: 'akademik',
    name: 'Beasiswa Akademik',
    description:
      'Untuk siswa dengan ranking 1–10 kelas X–XII dan nilai rata-rata ≥85',
    benefit: 'Potongan SPI & UKT',
    requirements: [
      'Ranking 1–10 di kelas X–XII atau ranking 1–3 di kelas XII',
      'Nilai rata-rata rapor minimum 85',
      'Lulusan SMA/SMK/MA sederajat tahun berjalan',
      'Fotokopi rapor X–XII yang dilegalisir',
      'Surat rekomendasi dari sekolah',
    ],
  },
  {
    id: 'non-akademik',
    name: 'Beasiswa Non-Akademik',
    description:
      'Untuk atlet dan seniman dengan prestasi minimal tingkat provinsi',
    benefit: 'Potongan SPI & UKT',
    requirements: [
      'Juara minimal tingkat provinsi/regional 2 tahun terakhir',
      'Sertifikat/piagam prestasi',
      'Rekomendasi dari pengurus provinsi cabang olahraga/seni',
      'Bersedia menandatangani kontrak beasiswa',
    ],
  },
  {
    id: 'content-creator',
    name: 'Beasiswa Content Creator',
    description:
      'Untuk kreator digital dengan followers ≥5,000',
    benefit: 'Potongan SPI & UKT',
    requirements: [
      'Minimum 5,000 followers (Instagram/TikTok/YouTube)',
      'Akun aktif dengan engagement autentik',
      'Submit data analytics jika diminta',
    ],
  },
  {
    id: 'pre-university',
    name: 'Beasiswa Pre-University',
    description: 'Program persiapan masuk universitas dengan dukungan akademik awal',
    benefit: 'Potongan SPI & UKT',
    requirements: [
      'Calon mahasiswa yang mempersiapkan diri sebelum masuk universitas',
      'Partisipasi aktif dalam program persiapan akademik',
    ],
  },
];
