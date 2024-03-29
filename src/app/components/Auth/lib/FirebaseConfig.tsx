import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY || "",
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN || "",
  projectId: process.env.NEXT_PUBLIC_PROJECTID || "",
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET || "",
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID || "",
  appId: process.env.NEXT_PUBLIC_APPID || "",
};

if (!getApps()?.length) {
  initializeApp(firebaseConfig);
}

export const auth = getAuth();
export const db = getFirestore();
export type User = {
  id: string;
  name: string;
};
