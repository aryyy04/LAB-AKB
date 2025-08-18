import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

// Halaman yang menampilkan data diri dan foto profil
export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.header}>
          {/* Pastikan Anda memiliki gambar 'profile.png' di folder 'assets/images' */}
          <Image
            source={require('../../assets/images/profile.png')}
            style={styles.profileImage}
          />
          <Text style={styles.name}>[ALRYADI ASMU'ADZAN]</Text>
          <Text style={styles.nim}>[105841114022]</Text>
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <Text style={styles.label}>Kelas</Text>
            <Text style={styles.value}>[6 D INFORMATIKA]</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.label}>Jurusan</Text>
            <Text style={styles.value}>[INFORMATIKA]</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.label}>Fakultas</Text>
            <Text style={styles.value}>[TEKNIK INFORMATIKA]</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  profileContainer: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // Membuat gambar menjadi lingkaran
    borderWidth: 4,
    borderColor: '#1E90FF',
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  nim: {
    fontSize: 18,
    color: 'gray',
  },
  detailsContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 3, // Shadow untuk Android
    shadowColor: '#000', // Shadow untuk iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  label: {
    fontSize: 16,
    color: '#555',
    fontWeight: '600',
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
});
