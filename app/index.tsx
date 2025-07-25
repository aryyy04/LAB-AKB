import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

const initialGridImages = [
  { id: 1, mainSrc: 'https://picsum.photos/id/1011/200', altSrc: 'https://picsum.photos/id/1025/200', isFlipped: false, scale: 1 },
  { id: 2, mainSrc: 'https://picsum.photos/id/1012/200', altSrc: 'https://picsum.photos/id/1026/200', isFlipped: false, scale: 1 },
  { id: 3, mainSrc: 'https://picsum.photos/id/1013/200', altSrc: 'https://picsum.photos/id/1027/200', isFlipped: false, scale: 1 },
  { id: 4, mainSrc: 'https://picsum.photos/id/1014/200', altSrc: 'https://picsum.photos/id/1028/200', isFlipped: false, scale: 1 },
  { id: 5, mainSrc: 'https://picsum.photos/id/1015/200', altSrc: 'https://picsum.photos/id/1029/200', isFlipped: false, scale: 1 },
  { id: 6, mainSrc: 'https://picsum.photos/id/1016/200', altSrc: 'https://picsum.photos/id/1030/200', isFlipped: false, scale: 1 },
  { id: 7, mainSrc: 'https://picsum.photos/id/1018/200', altSrc: 'https://picsum.photos/id/1031/200', isFlipped: false, scale: 1 },
  { id: 8, mainSrc: 'https://picsum.photos/id/1020/200', altSrc: 'https://picsum.photos/id/1032/200', isFlipped: false, scale: 1 },
  { id: 9, mainSrc: 'https://picsum.photos/id/1021/200', altSrc: 'https://picsum.photos/id/1033/200', isFlipped: false, scale: 1 },
];

export default function Index() {
  const [gridImages, setGridImages] = useState(initialGridImages);

const [fontsLoaded, fontError] = useFonts({
    'Roboto': require('../assets/fonts/Roboto-VariableFont_wdth,wght.ttf'),
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
    'Oswald': require('../assets/fonts/Oswald-VariableFont_wght.ttf'),
    'Raleway': require('../assets/fonts/Raleway-VariableFont_wght.ttf'),
    'Montserrat': require('../assets/fonts/Montserrat-VariableFont_wght.ttf'),
    'Inter': require('../assets/fonts/Inter-VariableFont_opsz,wght.ttf'),
    'Urbanist': require('../assets/fonts/Urbanist-VariableFont_wght.ttf'),
    'WorkSans': require('../assets/fonts/WorkSans-VariableFont_wght.ttf'),
    'Jost': require('../assets/fonts/Jost-VariableFont_wght.ttf'),
    'Syne': require('../assets/fonts/Syne-VariableFont_wght.ttf'),
  });

// --- LOGIKA BARU UNTUK DAFTAR NAMA ---
  const daftarNama = Array.from({ length: 200 }, (_, i) => {
    const nomor = i + 1;
    // Menggunakan data nama dan nomor dari gambar Anda
    switch (nomor) {
      case 135: return "135 Afil Anugrah";
      case 136: return "136 Abdul Naim";
      case 137: return "137 SYAHRUL RAMADHAN";
      case 138: return "138 Abdullah Khaeruna Anwar";
      case 139: return "139 MUH. IRSYAD JAFAR";
      case 140: return "140 Alryadi asmu'adzan"; // Nama Anda di urutan ini
      case 141: return "141 MUHAMMAD ADITYA YUDHISTIRA";
      case 142: return "142 WIWIN FUAD SANJAYA";
      case 143: return "143 MUH.AYYUB HASRUL";
      case 144: return "144 Muhammad Alif Syafan";
      case 145: return "145 MUH. IMAM MA'RUF MUSNI";
      case 146: return "146 MUHAMMAD ABDILLAH ZUFAR";
      default: return `${nomor} tidak diketahui`;
    }
  });

  // Fungsi ini tetap sama, tidak perlu diubah
  const getNamaSekitar = (urutan: number, total: number, sebelum: number, sesudah: number) => {
    const namaSebelum: string[] = [];
    const namaSesudah: string[] = [];
    const index = urutan - 1;

    for (let i = 1; i <= sebelum; i++) {
      const targetIndex = (index - i + total) % total;
      namaSebelum.unshift(daftarNama[targetIndex]);
    }

    for (let i = 1; i <= sesudah; i++) {
      const targetIndex = (index + i) % total;
      namaSesudah.push(daftarNama[targetIndex]);
    }

    return { namaSebelum, namaSesudah };
  };

  // Sesuaikan NIM_URUTAN dan TOTAL_NAMA dengan data baru
  const NIM_URUTAN = 140; // Berdasarkan NIM ...14022
  const TOTAL_NAMA = 200; // Disesuaikan agar semua nomor NIM masuk
  const { namaSebelum, namaSesudah } = getNamaSekitar(NIM_URUTAN, TOTAL_NAMA, 5, 5);
  const namesToDisplay = [...namaSebelum, ...namaSesudah];
  
  // Array fontFamilies tetap sama
  const fontFamilies = [
    'Oswald', 'Raleway', 'Montserrat', 'Inter', 'Urbanist',
    'WorkSans', 'Jost', 'Syne', 'Roboto', 'Lato-Regular'
  ];

  const handleImagePress = (imageId: number) => {
    setGridImages(currentImages =>
      currentImages.map(image => {
        if (image.id === imageId) {
          const newScale = Math.min(image.scale * 1.2, 2);
          return { ...image, isFlipped: !image.isFlipped, scale: newScale };
        }
        return image;
      })
    );
  };
  
  if (!fontsLoaded && !fontError) {
    return <View style={styles.container}><Text>Loading Fonts...</Text></View>;
  }

  if (fontError) {
    console.error(fontError);
    return <View style={styles.container}><Text>Error loading fonts. Check console.</Text></View>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Bagian profil dan lainnya tetap sama */}
      <View style={styles.rectangle}>
        <Image
          source={{ uri: "https://snworksceo.imgix.net/dth/0adae645-6689-4890-a5fb-af3e132f03c0.sized-1000x1000.png?w=1000" }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.triangle} />
      <View style={styles.pill}>
        <MaterialIcons name="person" size={22} color="white" />
        <Text style={[styles.pillText, {fontFamily: 'Roboto'}]}>105841114022</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.blackText, {fontFamily: 'WorkSans'}]}>Alryadi asmu'adzan</Text>
      </View>

      {/* Bagian Daftar Nama Mahasiswa dengan logika baru */}
      <View style={styles.nameListContainer}>
        <Text style={[styles.nameListTitle, {fontFamily: 'Oswald'}]}>Daftar Nama Mahasiswa</Text>
        {namesToDisplay.map((nama, index) => (
          <Text 
            key={`${nama}-${index}`} // Key lebih unik
            style={[
              styles.studentName,
              { fontFamily: fontFamilies[index % fontFamilies.length] }
            ]}
          >
            {nama}
          </Text>
        ))}
      </View>

      {/* Grid gambar tetap sama */}
      <View style={styles.gridContainer}>
        {gridImages.map(image => (
          <TouchableOpacity
            key={image.id}
            onPress={() => handleImagePress(image.id)}
            style={styles.gridCell}
          >
            <Image
              source={{ uri: image.isFlipped ? image.altSrc : image.mainSrc }}
              style={[ styles.gridImage, { transform: [{ scale: image.scale }], borderRadius: 8 } ]}
              resizeMode="cover"
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

// Stylesheet tetap sama
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFFDD0",
    paddingVertical: 60,
    paddingHorizontal: 15,
  },
  rectangle: {
    width: 220,
    height: 110,
    backgroundColor: "#blue",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: "100%",
    height: "100%",
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 40,
    borderRightWidth: 40,
    borderBottomWidth: 70,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "purple",
    marginBottom: 20,
  },
  pill: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffc400ff",
    borderRadius: 50,
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginBottom: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  pillText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 10,
  },
  textContainer: {
    backgroundColor: "blue",
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
    alignItems: 'center',
  },
  blackText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  nameListContainer: {
    width: '100%',
    maxWidth: 340,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 12,
    padding: 20,
    marginTop: 30,
    alignItems: 'center',
  },
  nameListTitle: {
    fontSize: 22,
    marginBottom: 15,
    color: '#333',
  },
  studentName: {
    fontSize: 18,
    color: '#111',
    marginBottom: 8,
    textAlign: 'center'
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 330,
    marginTop: 30,
  },
  gridCell: {
    width: 100,
    height: 100,
    margin: 5,
    backgroundColor: '#FFFDD0',
    borderRadius: 8,
    overflow: 'hidden',
  },
  gridImage: {
    width: '100%',
    height: '100%',
  }
});
