import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <Image
        source={require( '../assets/img/icons/pap.jpeg' )}
        style={styles.avatar}
      />
      <Text style={styles.name}>Dhimas Afrizal</Text>
      <Text style={styles.desc}>Pelanggan aktif | Sering Booking</Text>
    </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f9ff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#007aff',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007aff',
  },
  desc: {
    fontSize: 14,
    color: '#555',
    marginTop: 8,
  },
});
