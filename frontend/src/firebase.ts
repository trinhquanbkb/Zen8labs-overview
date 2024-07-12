import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

// Cấu hình Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBVsVNIZOS6P_8B5SA6C4iyHKkcpFdSnHk",
  authDomain: "push-notification-4880b.firebaseapp.com",
  projectId: "push-notification-4880b",
  storageBucket: "push-notification-4880b.appspot.com",
  messagingSenderId: "981013991244",
  appId: "1:981013991244:web:52b4c5ca82b6fba7ac09e9",
  measurementId: "G-MKHN447N88",
};

// Khởi tạo Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Lấy instance của messaging
const messaging = getMessaging(firebaseApp);

export { messaging, getToken, onMessage };