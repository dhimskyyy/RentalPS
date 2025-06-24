import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Image } from 'react-native';

export default function SettingsScreen() {
  const handlePress = (label: string) => {
    Alert.alert(`${label} ditekan`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Pengaturan</Text>

      <View style={styles.optionContainer}>
        <TouchableOpacity style={styles.option} onPress={() => handlePress('Edit Profil')}>
          <Image source={require('../assets/img/icons/edit-profile.png')} style={styles.icon} />
          <Text style={styles.optionText}>Edit Profil</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.option} onPress={() => handlePress('Tema')}>
          <Image source={require('../assets/img/icons/theme.png')} style={styles.icon} />
          <Text style={styles.optionText}>Tema</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => handlePress('Bahasa')}>
          <Image source={require('../assets/img/icons/languange.png')} style={styles.icon} />
          <Text style={styles.optionText}>Bahasa</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => handlePress('Tentang')}>
          <Image source={require('../assets/img/icons/about.png')} style={styles.icon} />
          <Text style={styles.optionText}>Tentang Aplikasi</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => handlePress('Keluar')}>
          <Image source={require('../assets/img/icons/logout.png')} style={styles.icon} />
          <Text style={styles.optionText}>Keluar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f9ff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 55,
    marginBottom: 20,
    color: '#275EFE',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  optionContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    elevation: 2,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  optionText: {
    marginLeft: 15,
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
});
