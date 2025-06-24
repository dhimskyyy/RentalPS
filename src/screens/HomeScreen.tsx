import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.logo}>Dhims PS</Text>
        <Image
        source={require('../assets/img/icons/banner.jpeg')}
        style={styles.bannerImage}
        resizeMode="cover"/>
      </View>

      {/* Koleksi */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Koleksi PS</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardRow}>
          <View style={styles.card}>
            <Image source={require('../assets/img/icons/ps5vr.png')} style={styles.cardImage} resizeMode="cover" />
            <Text style={styles.cardTitle}>PS5 VR</Text>
            <Text style={styles.cardPrice}>Rp 50.000 / jam</Text>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>PESAN</Text></TouchableOpacity>
          </View>
          <View style={styles.card}>
            <Image source={require('../assets/img/icons/ps5.png')} style={styles.cardImage} resizeMode="cover" />
            <Text style={styles.cardTitle}>PS5</Text>
            <Text style={styles.cardPrice}>Rp 25.000 / jam</Text>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>PESAN</Text></TouchableOpacity>
          </View>
          <View style={styles.card}>
            <Image source={require('../assets/img/icons/ps4.png')} style={styles.cardImage} resizeMode="cover" />
            <Text style={styles.cardTitle}>PS4</Text>
            <Text style={styles.cardPrice}>Rp 10.000 / jam</Text>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>PESAN</Text></TouchableOpacity>
          </View>
          <View style={styles.card}>
            <Image source={require('../assets/img/icons/ps3.png')} style={styles.cardImage} resizeMode="cover" />
            <Text style={styles.cardTitle}>PS3</Text>
            <Text style={styles.cardPrice}>Rp 7.000 / jam</Text>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>PESAN</Text></TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      {/* Promo */}
      <View style={styles.promoCard}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.promoTitle}>DISKON 50Rb</Text>
            <Text style={styles.promoDesc}>Untuk Penyewaan PS5 + TV</Text>
            <Text style={styles.promoCode}>Kode: PS50</Text>
          </View>
          <Image
            source={require('../assets/img/icons/discount.png')}
            style={styles.promoImage}
            resizeMode="contain"/>
        </View>
      </View>
      <View style={styles.promoCard}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.promoTitle}>DISKON 10Rb</Text>
            <Text style={styles.promoDesc}>Untuk Penyewaan PS4</Text>
            <Text style={styles.promoCode}>Kode: PS10</Text>
          </View>
          <Image
            source={require('../assets/img/icons/discount.png')}
            style={styles.promoImage}
            resizeMode="contain"/>
        </View>
      </View>

      {/* Rekomendasi */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Rekomendasi Hari Ini</Text>
        <View style={styles.recommendationBox}>
          <Text style={styles.recommendationText}>🔥 Main 3 Jam Gratis 1 Jam ( PS 3 & PS 4 )</Text>
        </View>
        <View style={styles.recommendationBox}>
          <Text style={styles.recommendationText}>🔥 Main 4 Jam Gratis 1 Jam ( PS 5 )</Text>
        </View>
        <View style={styles.recommendationBox}>
          <Text style={styles.recommendationText}>🔥 PS5 VR Room Diskon 25% untuk malam ini!</Text>
        </View>
      </View>

      {/* Footer Spacer */}
      <View style={styles.footerSpacer} />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f9ff',
    paddingHorizontal: 16,
  },
  headerContainer: {
    marginBottom: 16,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#275EFE',
    marginTop: 65,
    marginBottom: 10,
    marginLeft: 5,
  },
  bannerPlaceholder: {
    height: 160,
    borderRadius: 12,
    backgroundColor: '#d8e2ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImage: {
  width: '100%',
  height: 190,
  borderRadius: 12,
  marginBottom: 10,
},

  section: {
    marginTop: 20,
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#222',
  },
  cardRow: {
    flexDirection: 'row',
  },
  card: {
    width: 160,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginRight: 12,
    elevation: 2,
  },
  cardImage: {
    height: 100,
    width: '100%',
    borderRadius: 8,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cardPrice: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  button: {
    backgroundColor: '#275EFE',
    paddingVertical: 6,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  promoCard: {
    backgroundColor: '#E8F0FF',
    borderRadius: 12,
    padding: 15,
    marginHorizontal: 4,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  promoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#275EFE',
  },
  promoDesc: {
    fontSize: 14,
    color: '#444',
    marginVertical: 4,
  },
  promoCode: {
    fontSize: 12,
    color: '#888',
  },
  promoImage: {
    width: 60,
    height: 60,
    marginLeft: 10,
  },
  recommendationBox: {
    backgroundColor: '#e9f5ff',
    borderLeftWidth: 5,
    borderLeftColor: '#275EFE',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  recommendationText: {
    color: '#275EFE',
    fontSize: 14,
    fontWeight: '600',
  },
  footerSpacer: {
    height: 50,
  },
});
