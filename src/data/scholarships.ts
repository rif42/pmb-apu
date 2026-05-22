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
      'Untuk siswa kelas 12 dan nilai rata-rata lebih dari 80',
    benefit: 'Potongan SPI sampai 50%',
    requirements: [
      'Lulus dari SMA/SMK/Sederajat atau sedang duduk di kelas 12.',
      'Nilai rata-rata subjek tertentu (tergantung pilihan prodi) minimum 85',
      'Nilai rata-rata rapor keseluruhan 80',
      'Fotokopi rapor X–XII yang dilegalisir',
      'Mengumpulkan form pendaftaran online',
    ],
  },
  {
    id: 'non-akademik',
    name: 'Beasiswa Non-Akademik',
    description:
      'Untuk atlet, seniman dan rohis dengan prestasi minimal tingkat kota',
    benefit: 'Potongan SPI sampai 100%',
    requirements: [
      'Lulus dari SMA/SMK/Sederajat atau sedang duduk di kelas 12.',
      'Prestasi harus diperoleh dalam 3 tahun terakhir (untuk kategori non-akademik)',
      'Dokumen sertifikat/piagam prestasi asli',
      'Fotokopi rapor X–XII yang dilegalisir',
      'Mengumpulkan form pendaftaran online',
    ],
  },
  {
    id: 'content-creator',
    name: 'Beasiswa Konten Kreator',
    description:
      'Untuk calon mahasiswa yang aktif membangun platform digital dengan keterlibatan audiens yang signifikan',
    benefit: 'Potongan SPI & UKT',
    requirements: [
      'Lulus dari SMA/SMK/Sederajat atau sedang duduk di kelas 12.',
      'Memiliki akun aktif dengan keterlibatan autentik',
      'Memenuhi ketentuan minimum pengikut sesuai platform',
      'Mengumpulkan data analisa media sosial jika diminta',
      'Mengumpulkan form pendaftaran online',
      'Mengisi dan mengunggah formulir asesmen resmi',
    ],
  },
  {
    id: 'pre-university',
    name: 'Beasiswa Pra-Universitas',
    description: 'Program persiapan masuk universitas dengan dukungan akademik awal',
    benefit: 'Potongan SPI sampai 50%',
    requirements: [
      'Siswa kelas 12 (SMA/SMK/Setara) atau lulus dalam 2 tahun terakhir.',
      'Mengikuti minimal 4 sesi kuliah Pra-Universitas',
      'Partisipasi aktif dan disiplin waktu dalam program Pra-Universitas',
      'Mengumpulkan form pendaftaran online',
    ],
  },
  {
    id: 'partnership',
    name: 'Beasiswa Kemitraan',
    description:
      'Program kolaboratif bersama institusi mitra untuk memperluas akses pendidikan dan pengembangan SDM berkualitas',
    benefit: 'UKT & SPI penuh (100%) hingga 4 tahun',
    requirements: [
      'Lulus dari SMA/SMK/Sederajat atau sedang duduk di kelas 12.',
      'Nilai rata-rata mapel terkait pilihan prodi minimum 85',
      'Nilai rata-rata rapor keseluruhan minimum 80',
      'Mengumpulkan transkrip akademik atau rapor',
      'Mengumpulkan form pendaftaran online',
      'Mengisi dan mengunggah formulir asesmen resmi',
    ],
  },
];
