let
  divisi = [
    'Java',
    'Website',
    'Grafis',
    'Office',
    'Jaringan',
    'Animasi'
  ],

  title_teco,
  semua_divisi,
  divisi_java,
  divisi_website,
  divisi_grafis,
  divisi_office,
  divisi_jaringan,
  divisi_animasi,

  java = [],
  website = [],
  office = [],
  jaringan = [],
  grafis = [],
  animasi = [],

  semua_siswa = [],
  siswa_java = [],
  siswa_website = [],
  siswa_office = [],
  siswa_jaringan = [],
  siswa_grafis = [],
  siswa_animasi = [],

  warna_java = [],
  warna_website = [],
  warna_office = [],
  warna_jaringan = [],
  warna_grafis = [],
  warna_animasi = [],

  border_java = [],
  border_website = [],
  border_office = [],
  border_jaringan = [],
  border_grafis = [],
  border_animasi = [],

  label_java = [],
  label_website = [],
  label_office = [],
  label_jaringan = [],
  label_grafis = [],
  label_animasi = [],
  
  data_java = [],
  data_website = [],
  data_office = [],
  data_jaringan = [],
  data_grafis = [],
  data_animasi = [];

const
  Alert_Warning = Swal.mixin({
    icon: 'warning',
    title: 'Warning!',
    allowOutsideClick: false,
    allowEscapeKey: false,
    confirmButtonColor: '#007bff'
  })