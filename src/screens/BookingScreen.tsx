import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BookingStackParamList } from '../navigation/types';

const data = [
  {
    title: 'PlayStation 5 VR',
    price: 'Rp 50.000 / jam',
    image: require('../assets/img/icons/ps5vr.png'),
    color: '#e6f0ff',
    description: 'PS5 VR, 1 pasang stik, dan SmartTV 50 inch',
  },
  {
    title: 'PlayStation 5',
    price: 'Rp 25.000 / jam',
    image: require('../assets/img/icons/ps5.png'),
    color: '#e6f0ff',
    description: 'PS5, 2 stik, dan TV 42 inch',
  },
  {
    title: 'PlayStation 4',
    price: 'Rp 10.000 / jam',
    image: require('../assets/img/icons/ps4.png'),
    color: '#e6f0ff',
    description: 'PS4, 2 stik, dan TV 42 inch',
  },
  {
    title: 'PlayStation 3',
    price: 'Rp 7.000 / jam',
    image: require('../assets/img/icons/ps3.png'),
    color: '#e6f0ff',
    description: 'PS3, 1 stik, dan TV 42 inch',
  },
];

const BookingScreen = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState<any>(null);
  const navigation = useNavigation<NativeStackNavigationProp<BookingStackParamList>>();

  const handlePesan = (item: any) => {
    // Jika PS, tambahkan TV
    if (item.title.toLowerCase().includes('playstation')) {
      const tvImage = require('../assets/img/icons/tv.png');
      setSelectedItem({ ...item, extraImage: tvImage });
    } else {
      setSelectedItem(item);
    }

    setModalVisible(true);
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 80 }}>
        <Text style={styles.heading}>🕹 Booking PS</Text>

        {data.map((item, index) => (
          <View key={index} style={[styles.card, { backgroundColor: item.color }]}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDesc}>{item.price}</Text>
              <TouchableOpacity style={styles.button} onPress={() => handlePesan(item)}>
                <Text style={styles.buttonText}>Pesan Sekarang</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      {selectedItem && (
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Detail Booking</Text>

            {/* Gambar PS */}
            <Image source={selectedItem.image} style={styles.modalImage} />

            {/* Gambar TV jika ada */}
            {selectedItem.extraImage && (
              <Image source={selectedItem.extraImage} style={styles.modalImage} />
            )}

            <Text style={styles.modalDesc}>
              {selectedItem.description}
            </Text>            

            <TouchableOpacity
              onPress={() => {
              setModalVisible(false);
              setTimeout(() => {
              navigation.navigate('BookingDetail', { item: selectedItem });
              }, 300);
              }}
              style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Pesan</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    )}
    </SafeAreaView>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f9ff',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007aff',
  },
  card: {
    flexDirection: 'row',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardDesc: {
    fontSize: 14,
    color: '#666',
    marginVertical: 6,
  },
  button: {
    backgroundColor: '#275EFE',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  modalOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  justifyContent: 'center',
  alignItems: 'center',
  },
  modalImage: {
    width: 200,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 12,
  },
  modalContent: {
    height: '55%',
    width: '90%',
    backgroundColor: 'white',
    padding: '10%',
    borderRadius: 16,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#275EFE',
  },
  modalDesc: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    marginBottom: 16,
  },
  modalButton: {
    backgroundColor: '#275EFE',
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 8,
    marginTop: 10,
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
