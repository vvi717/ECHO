import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnySrlQ10MrEjth3RG-ud2jUhq5hu-RSA",
  authDomain: "echo-ff2d5.firebaseapp.com",
  projectId: "echo-ff2d5",
  storageBucket: "echo-ff2d5.firebasestorage.app",
  messagingSenderId: "325176591036",
  appId: "1:325176591036:web:761703a0dfdd35fbef46b9",
  measurementId: "G-V4TMLVGEBC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, app, analytics };
