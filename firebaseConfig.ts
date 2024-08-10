import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBON02IqhY4uSNQCDZS8POKLbDT4-_DuaQ",
  authDomain: "fix-it-mvp.firebaseapp.com",
  projectId: "fix-it-mvp",
  storageBucket: "fix-it-mvp.appspot.com",
  messagingSenderId: "697125552733",
  appId: "1:697125552733:web:b0a69ec2d7767bc43783b4",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
