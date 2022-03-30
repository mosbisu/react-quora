import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAY8TAiIGkTFLcRD8BLAoUJ41oJE2vSLSI",
  authDomain: "quora-clone-b09f6.firebaseapp.com",
  projectId: "quora-clone-b09f6",
  storageBucket: "quora-clone-b09f6.appspot.com",
  messagingSenderId: "106386558847",
  appId: "1:106386558847:web:9c8d756accfb53e2fad44a",
};

const app = initializeApp(firebaseConfig);

export const authService = getAuth(app);
export const dbService = getFirestore();
export const storageService = getStorage();
