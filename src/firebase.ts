import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB4xq_k7mIZ-LKL7P_oVuVg_Fc7qEMuEVs",
  authDomain: "taske-dbcfa.firebaseapp.com",
  projectId: "taske-dbcfa",
  storageBucket: "taske-dbcfa.firebasestorage.app",
  messagingSenderId: "316495292836",
  appId: "1:316495292836:web:846d0a2e8f09674667f931"
};

const app = initializeApp(firebaseConfig);

export default app;
