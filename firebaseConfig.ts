import Constants from "expo-constants";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

console.log("Firebase API Key:", Constants.expoConfig?.extra?.FIREBASE_API_KEY);

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "fix-it-mvp.firebaseapp.com",
  projectId: "fix-it-mvp",
  storageBucket: "fix-it-mvp.appspot.com",
  messagingSenderId: "697125552733",
  appId: "1:697125552733:web:b0a69ec2d7767bc43783b4",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
