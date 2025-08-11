import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MaterialIcons, Ionicons, FontAwesome, AntDesign, Entypo } from '@expo/vector-icons';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Koleksi 10 Ikon</Text>
      
      {/* Container untuk menata ikon-ikon */}
      <View style={styles.iconContainer}>
        {/* Ikon dari MaterialIcons */}
        <View style={styles.iconWrapper}>
          <MaterialIcons name="home" size={40} color="#3498db" />
          <Text style={styles.iconLabel}>Home</Text>
        </View>
        
        {/* Ikon dari Ionicons */}
        <View style={styles.iconWrapper}>
          <Ionicons name="settings-sharp" size={40} color="#2ecc71" />
          <Text style={styles.iconLabel}>Settings</Text>
        </View>

        {/* Ikon dari FontAwesome */}
        <View style={styles.iconWrapper}>
          <FontAwesome name="user" size={40} color="#e74c3c" />
          <Text style={styles.iconLabel}>Profile</Text>
        </View>

        {/* Ikon dari AntDesign */}
        <View style={styles.iconWrapper}>
          <AntDesign name="heart" size={40} color="#9b59b6" />
          <Text style={styles.iconLabel}>Favorite</Text>
        </View>

        {/* Ikon dari Entypo */}
        <View style={styles.iconWrapper}>
          <Entypo name="camera" size={40} color="#f1c40f" />
          <Text style={styles.iconLabel}>Camera</Text>
        </View>

        {/* Ikon lainnya untuk melengkapi 10 */}
        <View style={styles.iconWrapper}>
          <MaterialIcons name="shopping-cart" size={40} color="#1abc9c" />
          <Text style={styles.iconLabel}>Cart</Text>
        </View>
        
        <View style={styles.iconWrapper}>
          <Ionicons name="notifications" size={40} color="#e67e22" />
          <Text style={styles.iconLabel}>Alerts</Text>
        </View>

        <View style={styles.iconWrapper}>
          <FontAwesome name="star" size={40} color="#34495e" />
          <Text style={styles.iconLabel}>Rating</Text>
        </View>

        <View style={styles.iconWrapper}>
          <AntDesign name="search1" size={40} color="#d35400" />
          <Text style={styles.iconLabel}>Search</Text>
        </View>

        <View style={styles.iconWrapper}>
          <Entypo name="mail" size={40} color="#c0392b" />
          <Text style={styles.iconLabel}>Mail</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f7', // Warna latar belakang netral
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  iconContainer: {
    flexDirection: 'row', // Menyusun ikon secara horizontal
    flexWrap: 'wrap',     // Membuat ikon pindah ke baris baru jika tidak muat
    justifyContent: 'center', // Ikon ditata di tengah secara horizontal
    maxWidth: '100%',
  },
  iconWrapper: {
    alignItems: 'center', // Teks berada di tengah ikon
    margin: 15,          // Jarak antar ikon
    width: 80,           // Lebar setiap wrapper ikon
  },
  iconLabel: {
    marginTop: 8,        // Jarak antara ikon dan teks
    fontSize: 12,
    color: '#555',
  },
});
