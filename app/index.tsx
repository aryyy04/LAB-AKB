import React from 'react';

// Komponen utama aplikasi
const App = () => {
  return (
    <div style={styles.container}>

      {/* 1. Segitiga (ukuran lebih kecil) */}
      <div style={{ ...styles.triangle, marginBottom: 25 }}></div>

      {/* 2. Persegi Panjang dengan Ikon dan Teks (ukuran lebih kecil) */}
      <div style={{ ...styles.rectangle, marginBottom: 25 }}>
        <span role="img" aria-label="person icon" style={styles.icon}>👤</span>
        <p style={styles.rectangleText}>Alryadi Asmu'Adzan</p>
      </div>

      {/* 3. Bentuk Pil dengan Ikon dan Teks (ukuran lebih kecil) */}
      <div style={{ ...styles.pill, marginBottom: 25 }}>
        <span role="img" aria-label="id card icon" style={styles.icon}>🆔</span>
        <p style={styles.pillText}>105841114022</p>
      </div>

    </div>
  );
};

// Objek gaya untuk semua elemen dengan warna font yang diperbarui
const styles = {
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8e0', // Warna latar krem
    padding: 20,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    minHeight: '100vh'
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeft: '50px solid transparent',
    borderRight: '50px solid transparent',
    borderBottom: '90px solid #8e44ad',
  },
  rectangle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 280,
    height: 90,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
    textAlign: 'center' as const,
  },
  pill: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 280,
    height: 60,
    backgroundColor: '#e67e22',
    borderRadius: 30,
    boxShadow: '0 5px 15px rgba(0,0,0,0.12)',
    paddingLeft: 20,
    paddingRight: 20,
  },
  icon: {
    fontSize: 22,
    marginRight: 12,
  },
  rectangleText: {
    margin: 0,
    fontWeight: '600',
    fontSize: 18,
    color: '#5d4037', // Warna diubah menjadi coklat tua
  },
  pillText: {
    margin: 0,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fffbe6', // Warna diubah menjadi putih gading/krem muda
  }
};

// Ekspor komponen App sebagai default
export default App;
