import { Stack } from 'expo-router';
import React from 'react';

// Komponen ini adalah layout utama (root layout) untuk seluruh aplikasi.
// Semua navigasi lain akan berada di dalam Stack ini.
export default function RootLayout() {
  return (
    <Stack>
      {/* Opsi screen=" (tabs)" merujuk ke grup rute (tabs) yang kita buat.
        Dengan headerShown: false, kita menyembunyikan header dari Stack utama,
        karena setiap tab sudah memiliki headernya sendiri yang diatur di (tabs)/_layout.tsx.
      */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
