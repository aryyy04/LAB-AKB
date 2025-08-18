import React from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { DATA_MAHASISWA } from '../../../data/mahasiswa';

export default function DetailMahasiswaScreen() {
  const { nim } = useLocalSearchParams(); // Mengambil parameter 'nim' dari URL

  // Cari data mahasiswa berdasarkan NIM
  const mahasiswa = DATA_MAHASISWA.find((m) => m.nim === nim);

  if (!mahasiswa) {
    return (
      <View style={styles.container}>
        <Text>Mahasiswa tidak ditemukan.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: mahasiswa.fotoUrl }}
          style={styles.foto}
          // Tampilkan loading indicator saat gambar dimuat
          onLoadStart={() => <ActivityIndicator />}
        />
        <Text style={styles.nama}>{mahasiswa.nama}</Text>
        <Text style={styles.nim}>NIM: {mahasiswa.nim}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  foto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#007AFF',
  },
  nama: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  nim: {
    fontSize: 18,
    color: 'gray',
  },
});