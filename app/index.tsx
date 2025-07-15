import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Image as ExpoImage } from "expo-image"

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

  const handleImagePress = (imageId: number) => {
    setGridImages(currentImages =>
      currentImages.map(image => {
        if (image.id === imageId) {
          const nextScale = Math.min(image.scale * 1.2, 2.4);
          return {
            ...image,
            isFlipped: !image.isFlipped,
            scale: nextScale,
          };
        }
        return image;
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.rectangle}>
        <Image
          source={{ uri: "https://snworksceo.imgix.net/dth/0adae645-6689-4890-a5fb-af3e132f03c0.sized-1000x1000.png?w=1000" }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.triangle} />
      <View style={styles.pill}>
        <MaterialIcons name="person" size={24} color="white" />
        <Text style={styles.pillText}>105841114022</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.redText}>Alryadi Asmu'Adzan</Text>
      </View>
      <View style={styles.gridContainer}>
        {gridImages.map(image => (
          <TouchableOpacity
            key={image.id}
            onPress={() => handleImagePress(image.id)}
            style={styles.gridCell}
          >
            <Image
              source={{ uri: image.isFlipped ? image.altSrc : image.mainSrc }}
              style={[
                styles.gridImage,
                { transform: [{ scale: image.scale }] },
              ]}
              resizeMode="cover"
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFFDD0",
    paddingVertical: 60,
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
  redText: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 330,
    marginTop: 20,
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
