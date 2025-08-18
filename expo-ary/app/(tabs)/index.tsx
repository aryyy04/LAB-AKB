import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { DATA_MAHASISWA } from '../../data/mahasiswa'; // Perhatikan path ini
import { Ionicons } from '@expo/vector-icons';

// Ini adalah halaman utama aplikasi yang menampilkan daftar mahasiswa.

export default function DaftarMahasiswaScreen() {
  // Fungsi untuk merender setiap item dalam daftar
  const renderItem = ({ item }) => (
    <Link href={`/mahasiswa/${item.nim}`} asChild>
      <TouchableOpacity style={styles.itemContainer}>
        <Ionicons name="person-circle-outline" size={32} color="#007AFF" />
        <Text style={styles.itemText}>{item.nama}</Text>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA_MAHASISWA}
        renderItem={renderItem}
        keyExtractor={(item) => item.nim}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  list: {
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  itemText: {
    fontSize: 18,
    marginLeft: 12,
    color: '#333',
  },
});
