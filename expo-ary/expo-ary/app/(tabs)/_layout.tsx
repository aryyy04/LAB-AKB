import React from 'react';
import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

// Komponen ini bertanggung jawab untuk mengatur tata letak navigasi tab
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#1E90FF', // Warna ikon tab yang aktif
        tabBarInactiveTintColor: 'gray', // Warna ikon tab yang tidak aktif
        headerStyle: {
          backgroundColor: '#1E90FF', // Warna latar belakang header
        },
        headerTintColor: '#fff', // Warna teks header
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      {/* Konfigurasi untuk Tab Home */}
      <Tabs.Screen
        name="index" // Nama file: index.tsx
        options={{
          title: 'Home', // Judul yang ditampilkan di header
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      {/* Konfigurasi untuk Tab About */}
      <Tabs.Screen
        name="about" // Nama file: about.tsx
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="info-circle" color={color} />
          ),
        }}
      />
      {/* Konfigurasi untuk Tab Profil */}
      <Tabs.Screen
        name="profile" // Nama file: profile.tsx
        options={{
          title: 'Profil',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}