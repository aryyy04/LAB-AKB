import React from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { DATA_MAHASISWA } from '../../../data/mahasiswa'; // Perhatikan path ini

// Halaman ini menampilkan detail dari mahasiswa yang dipilih.

export default function DetailMahasiswaScreen() {
  // Mengambil parameter 'nim' dari URL/route
  const { nim } = useLocalSearchParams();

  // Cari data mahasiswa yang sesuai berdasarkan NIM
  const mahasiswa = DATA_MAHASISWA.find((m) => m.nim === nim);

  // Tampilkan pesan jika data tidak ditemukan
  if (!mahasiswa) {
    return (
      <View style={styles.container}>
        <Text>Data mahasiswa tidak ditemukan.</Text>
      </View>
    );
  }

  // Tampilkan detail mahasiswa jika data ditemukan
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: mahasiswa.fotoUrl }}
          style={styles.foto}
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 40,
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
    borderWidth: 4,
    borderColor: '#007AFF',
  },
  nama: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  nim: {
    fontSize: 18,
    color: 'gray',
  },
});
