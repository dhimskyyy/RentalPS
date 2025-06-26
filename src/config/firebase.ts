// src/config/firebase.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBmnToHy2yDwc77AvqwlROQor99QdqBTP4",
  authDomain: "rentalps-d4516.firebaseapp.com",
  projectId: "rentalps-d4516",
  storageBucket: "rentalps-d4516.firebasestorage.app",
  messagingSenderId: "617604286483",
  appId: "1:617604286483:web:9ccbc1245359cc348117e6",
  measurementId: "G-Y86LNYQW1X"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
