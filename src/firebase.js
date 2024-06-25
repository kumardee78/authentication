import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyATilNFWAcMDeyUGthM-8u2y4lewbQGnz0",
  authDomain: "authentication-724e6.firebaseapp.com",
  projectId: "authentication-724e6",
  storageBucket: "authentication-724e6.appspot.com",
  messagingSenderId: "1038687991615",
  appId: "1:1038687991615:web:d094dcf74ec39c590b858a"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);