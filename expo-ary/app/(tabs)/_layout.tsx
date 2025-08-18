import { Stack } from 'expo-router';
import React from 'react';

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Daftar Mahasiswa',
        }}
      />
      <Stack.Screen
        name="mahasiswa/[nim]"
        options={{
          headerTitle: 'Detail Mahasiswa',
        }}
      />
    </Stack>
  );
}