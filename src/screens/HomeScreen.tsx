// HomeScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { RootTabParamList } from '../navigation/navigation';
import { db, storage } from '../config/firebase';


type HomeScreenNavigationProp = BottomTabNavigationProp<RootTabParamList, 'Home'>;

type PSItem = {
  title: string;
  price: string;
  image: any;
  spek: string;
};

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const insets = useSafeAreaInsets();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<PSItem | null>(null);

  const koleksiPS: PSItem[] = [
    {
      title: 'PS5 VR',
      price: 'Rp 50.000 / jam',
      image: require('../assets/img/icons/ps5vr.png'),
      spek: 'Paket: PS5 VR, 2 Stik Wireless, TV 55 inch',
    },
    {
      title: 'PS5',
      price: 'Rp 25.000 / jam',
      image: require('../assets/img/icons/ps5.png'),
      spek: 'Paket: PS5, 2 Stik Wireless, TV 50 inch',
    },
    {
      title: 'PS4',
      price: 'Rp 10.000 / jam',
      image: require('../assets/img/icons/ps4.png'),
      spek: 'Paket: PS4, 2 Stik Kabel, TV 42 inch',
    },
    {
      title: 'PS3',
      price: 'Rp 7.000 / jam',
      image: require('../assets/img/icons/ps3.png'),
      spek: 'Paket: PS3, 2 Stik Kabel, TV 32 inch',
    },
  ];

  const promoList = [
    {
      title: 'DISKON 50Rb',
      desc: 'Untuk Penyewaan PS5 + TV',
      code: 'Kode: PS50',
    },
    {
      title: 'DISKON 10Rb',
      desc: 'Untuk Penyewaan PS4',
      code: 'Kode: PS10',
    },
  ];

  const rekomendasiList = [
    '🔥 Main 3 Jam Gratis 1 Jam ( PS 3 & PS 4 )',
    '🔥 Main 4 Jam Gratis 1 Jam ( PS 5 )',
    '🔥 PS5 VR Room Diskon 25% untuk malam ini!',
  ];

  const handlePressPesan = (item: PSItem) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: insets.bottom + 16 }}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.logo}>Dhims PS</Text>
          <Image
            source={require('../assets/img/icons/banner.jpeg')}
            style={styles.bannerImage}
            resizeMode="cover"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Koleksi PS</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardRow}>
            {koleksiPS.map((item, index) => (
              <View key={index} style={styles.card}>
                <Image source={item.image} style={styles.cardImage} resizeMode="cover" />
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardPrice}>{item.price}</Text>
                <TouchableOpacity style={styles.button} onPress={() => handlePressPesan(item)}>
                  <Text style={styles.buttonText}>PESAN</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>

        {promoList.map((promo, i) => (
          <View key={i} style={styles.promoCard}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.promoTitle}>{promo.title}</Text>
                <Text style={styles.promoDesc}>{promo.desc}</Text>
                <Text style={styles.promoCode}>{promo.code}</Text>
              </View>
              <Image
                source={require('../assets/img/icons/discount.png')}
                style={styles.promoImage}
                resizeMode="contain"
              />
            </View>
          </View>
        ))}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Rekomendasi Hari Ini</Text>
          {rekomendasiList.map((text, i) => (
            <View key={i} style={styles.recommendationBox}>
              <Text style={styles.recommendationText}>{text}</Text>
            </View>
          ))}
        </View>

        <Modal animationType="slide" transparent visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              {selectedItem && (
                <>
                  <Image source={selectedItem.image} style={styles.modalImage} />
                  <Text style={styles.modalTitle}>{selectedItem.title}</Text>
                  <Text style={styles.modalPrice}>{selectedItem.price}</Text>
                  <Text style={styles.modalSpek}>{selectedItem.spek}</Text>
                  <Pressable
                    style={styles.modalCloseButton}
                    onPress={() => {
                      setModalVisible(false);
                      navigation.navigate('Booking');
                    }}
                  >
                    <Text style={styles.modalCloseText}>Pesan Sekarang</Text>
                  </Pressable>
                </>
              )}
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f9ff',
  },
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
    marginBottom: 10,
    marginLeft: 5,
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
    width: 190,
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    width: '85%',
    alignItems: 'center',
  },
  modalImage: {
    width: 200,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 12,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#275EFE',
  },
  modalPrice: {
    fontSize: 16,
    color: '#333',
    marginVertical: 5,
  },
  modalSpek: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalCloseButton: {
    backgroundColor: '#275EFE',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  modalCloseText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
