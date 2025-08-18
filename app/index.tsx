import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

// Halaman utama yang menampilkan informasi tentang Unismuh Makassar
export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Universitas Muhammadiyah Makassar</Text>
        
        {/* Pastikan Anda memiliki gambar 'unismuh.png' di folder 'assets/images' */}
        <Image 
          source={require('../../assets/images/unismuh.png')} 
          style={styles.image} 
        />
        
        <Text style={styles.title}>Lokasi</Text>
        <Text style={styles.description}>
          Jl. Sultan Alauddin No. 259, Gn. Sari, Kec. Rappocini, Kota Makassar, Sulawesi Selatan 90221
        </Text>
        
        <Text style={styles.title}>Tentang Unismuh</Text>
        <Text style={styles.description}>
          Universitas Muhammadiyah Makassar (Unismuh), yang didirikan pada 19 Juni 1963, adalah salah satu perguruan tinggi swasta terkemuka di Indonesia Timur yang mendedikasikan dirinya pada pengembangan ilmu pengetahuan, teknologi, dan seni secara terpadu. Dengan berlandaskan pada nilai-nilai Islam yang fundamental, Unismuh memiliki visi untuk membentuk lulusan yang unggul, yang tidak hanya cerdas secara akademis tetapi juga memiliki akhlak mulia serta daya saing tinggi untuk dapat berkontribusi secara signifikan di tengah masyarakat global.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
    borderRadius: 75, // Membuat gambar sedikit membulat
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1E90FF',
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    textAlign: 'justify',
  },
});
