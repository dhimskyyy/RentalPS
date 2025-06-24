import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BookingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🕹 Booking PS</Text>
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>PS 5 - Room 1</Text>
        <Text style={styles.cardDesc}>Rp 15.000 / jam</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>PS 4 - Room 2</Text>
        <Text style={styles.cardDesc}>Rp 10.000 / jam</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 55,
    marginBottom: 20,
    color: '#007aff',
  },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDesc: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
});
