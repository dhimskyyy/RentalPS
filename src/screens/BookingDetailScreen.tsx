import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { launchImageLibrary } from 'react-native-image-picker';
import { RouteProp } from '@react-navigation/native';
import { BookingStackParamList } from '../navigation/types';
import { SafeAreaView } from 'react-native-safe-area-context';

type BookingDetailRouteProp = RouteProp<BookingStackParamList, 'BookingDetail'>;

const BookingDetailScreen = ({ route }: { route: BookingDetailRouteProp }) => {
  const { item } = route.params;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [tanggalPinjam, setTanggalPinjam] = useState(new Date());
  const [tanggalKembali, setTanggalKembali] = useState(new Date());
  const [showTanggalPinjam, setShowTanggalPinjam] = useState(false);
  const [showTanggalKembali, setShowTanggalKembali] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [bukti, setBukti] = useState('');

  const handleUpload = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) return;
      if (response.errorCode) {
        Alert.alert('Error', response.errorMessage || 'Gagal upload');
        return;
      }
      const uri = response.assets?.[0]?.uri;
      setBukti(uri || '');
    });
  };

  const isComplete = name && phone && tanggalPinjam && tanggalKembali &&
    ((paymentMethod === 'cash') || (paymentMethod === 'qris') || (bukti));

  const renderInfoPembayaran = () => {
    if (paymentMethod === 'ewallet') {
      return (
        <View style={styles.boxInfo}>
          <Text style={styles.boxText}>E-Wallet ke:</Text>
          <Text style={styles.boxText}>DANA: 085256694929</Text>
          <Text style={styles.boxText}>GoPay: 085256694929</Text>
          <Text style={styles.boxText}>ShopeePay: 085256694929</Text>
          <Text style={styles.boxText}>a.n Mohammad Dhimas Afrizal</Text>
        </View>
      );
    }
    if (paymentMethod === 'bank') {
      return (
        <View style={styles.boxInfo}>
          <Text style={styles.boxText}>Transfer ke:</Text>
          <Text style={styles.boxText}>BCA: 1231231231</Text>
          <Text style={styles.boxText}>BRI: 1231231231</Text>
          <Text style={styles.boxText}>Mandiri: 1231231231</Text>
          <Text style={styles.boxText}>a.n Mohammad Dhimas Afrizal</Text>
        </View>
      );
    }
    if (paymentMethod === 'qris') {
      return (
        <Image source={require('../assets/img/icons/payment/qris-dummy.png')} style={styles.qris} />
      );
    }
    return null;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Booking</Text>

        <View style={styles.rowImages}>
            <Image source={item.image} style={styles.device} />
            {item.extraImage && (
            <Image source={item.extraImage} style={styles.device} />
            )}
        </View>

        <TextInput
            placeholder="Nama Lengkap"
            value={name}
            onChangeText={setName}
            style={styles.input}
        />

        <TextInput
            placeholder="Nomor Telepon"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            style={styles.input}
        />

        <TouchableOpacity onPress={() => setShowTanggalPinjam(true)} style={styles.datePicker}>
            <Text>Tanggal Pinjam: {tanggalPinjam.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {showTanggalPinjam && (
            <DateTimePicker
            value={tanggalPinjam}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={(e: any, d?: Date) => {
                setShowTanggalPinjam(false);
                if (d) setTanggalPinjam(d);
            }}
            />
        )}

        <TouchableOpacity onPress={() => setShowTanggalKembali(true)} style={styles.datePicker}>
            <Text>Tanggal Kembali: {tanggalKembali.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {showTanggalKembali && (
            <DateTimePicker
            value={tanggalKembali}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={(e: any, d?: Date) => {
                setShowTanggalKembali(false);
                if (d) setTanggalKembali(d);
            }}
            />
        )}

        <Text style={styles.subTitle}>Metode Pembayaran</Text>
        {['ewallet', 'bank', 'qris', 'cash'].map((method) => (
            <TouchableOpacity
            key={method}
            style={[styles.paymentOption, paymentMethod === method && styles.selected]}
            onPress={() => setPaymentMethod(method)}
            >
            <Text>{method.toUpperCase()}</Text>
            </TouchableOpacity>
        ))}

        {renderInfoPembayaran()}

        {['ewallet', 'bank', 'qris'].includes(paymentMethod) && (
            <TouchableOpacity style={styles.uploadBox} onPress={handleUpload}>
            <Text>{bukti ? 'Bukti Terupload' : 'Upload Bukti Pembayaran'}</Text>
            </TouchableOpacity>
        )}

        <TouchableOpacity
            disabled={!isComplete}
            onPress={() => Alert.alert('Konfirmasi berhasil!')}
            style={[styles.konfirmasiBtn, !isComplete && { backgroundColor: '#ccc' }]}
        >
            <Text style={styles.konfirmasiText}>Konfirmasi</Text>
        </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f9ff',
  },
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#275EFE',
    textAlign: 'center',
    marginBottom: 20,
  },
  rowImages: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 24,
  },
  device: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 12,
    backgroundColor: '#f0f4ff',
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 12,
    fontSize: 15,
    marginBottom: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  datePicker: {
    backgroundColor: '#eef3ff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#d4ddff',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  paymentOption: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 16,
    backgroundColor: '#f8f9fd',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  selected: {
    borderColor: '#275EFE',
    backgroundColor: '#e3edff',
  },
  boxInfo: {
    backgroundColor: '#eef5ff',
    padding: 14,
    borderRadius: 12,
    marginBottom: 14,
  },
  boxText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  uploadBox: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#275EFE',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: '#f0f5ff',
  },
  qris: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 12,
    backgroundColor: '#fff',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  konfirmasiBtn: {
    backgroundColor: '#275EFE',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  konfirmasiText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});


export default BookingDetailScreen;