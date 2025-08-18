import { Stack } from 'expo-router';
import React from 'react';

// File layout ini mendefinisikan navigasi untuk semua halaman
// yang berada di dalam grup '(tabs)'. Kita menggunakan Stack Navigator
// untuk bisa berpindah dari halaman daftar ke halaman detail.

export default function TabsLayout() {
  return (
    <Stack>
      {/* Layar untuk halaman daftar mahasiswa */}
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Daftar Mahasiswa',
          headerStyle: { backgroundColor: '#007AFF' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
      {/* Layar untuk halaman detail mahasiswa */}
      <Stack.Screen
        name="mahasiswa/[nim]"
        options={{
          headerTitle: 'Detail Mahasiswa',
          headerStyle: { backgroundColor: '#007AFF' },
          headerTintColor: '#fff',
        }}
      />
    </Stack>
  );
}
