import { Redirect } from 'expo-router';
import React from 'react';

// File ini berfungsi untuk mengarahkan pengguna langsung ke halaman utama
// di dalam navigasi tab. Ini adalah praktik yang baik untuk menjaga
// struktur routing tetap bersih.

export default function RootIndex() {
  // Mengarahkan pengguna ke '/(tabs)', yang akan memuat
  // halaman index.tsx di dalam folder (tabs).
  return <Redirect href="/(tabs)" />;
}
