import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

// Halaman yang menjelaskan tentang aplikasi
export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Tentang Aplikasi Ini</Text>
        <Text style={styles.paragraph}>
          Aplikasi ini dibuat untuk memenuhi tugas mata kuliah Pemrograman Mobile. Aplikasi ini dibangun menggunakan React Native dengan kerangka kerja Expo Router untuk menangani navigasi.
        </Text>
        <Text style={styles.subHeader}>Fungsi Halaman</Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Home</Text>
          <Text style={styles.sectionContent}>
            Halaman ini menampilkan informasi singkat mengenai Universitas Muhammadiyah Makassar, termasuk lokasi dan deskripsi singkat kampus.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. About</Text>
          <Text style={styles.sectionContent}>
            Halaman yang sedang Anda buka ini. Berisi penjelasan mengenai tujuan pembuatan aplikasi dan deskripsi fungsionalitas setiap halaman.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Profil</Text>
          <Text style={styles.sectionContent}>
            Halaman ini menampilkan data diri pribadi pengembang aplikasi, yang mencakup nama, NIM, kelas, jurusan, fakultas, dan foto profil.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E90FF',
    marginBottom: 15,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    borderBottomWidth: 2,
    borderBottomColor: '#1E90FF',
    paddingBottom: 5,
    marginBottom: 15,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
  },
  sectionContent: {
    fontSize: 16,
    lineHeight: 22,
    color: '#555',
    marginTop: 5,
  },
});
