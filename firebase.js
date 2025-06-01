// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyBy4q_gzI0s5yc6YeFQAg0SDgmMRPgxEkY",
  authDomain: "authentication-system-14fe4.firebaseapp.com",
  databaseURL: "https://authentication-system-14fe4-default-rtdb.firebaseio.com",
  projectId: "authentication-system-14fe4",
  storageBucket: "authentication-system-14fe4.appspot.com",
  messagingSenderId: "1065896531508",
  appId: "1:1065896531508:web:553d96d6d6114447ee5c61",
  measurementId: "G-WGL1T1D2ZD"
};

export const app = initializeApp(firebaseConfig);
