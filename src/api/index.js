import { getApps, getApp, initializeApp } from "firebase/app";
import {   getFirestore,collection, doc,setDoc,getDoc,getDocs,deleteDoc,query,where, } from "firebase/firestore";
import products from "../json/products.json";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APPID,
};

const app_length = getApps().length > 0;

// Initialize Firebase
const app = app_length ? getApp() : initializeApp(firebaseConfig);

// REFERENCE DB
const db = getFirestore(app);

// REFERENCE COLLECTION
const productsCollection = collection(db, "products");

export const feedProducts = async () => {
    //刪掉現在資料庫所有資料
    const querySnapshot = await getDocs(productsCollection);
    querySnapshot.forEach(async (product) => {
        await deleteDoc(doc(db, "products", product.id));
    });
    // 餵新資料
    products.forEach(async (product) => {
        const docRef = await doc(productsCollection);
        await setDoc(docRef, { ...product, id: docRef.id, category: product.category.toUpperCase() });
    });
};

  
  export const getProducts = async () => {
    const querySnapshot = await getDocs(productsCollection);
    // Convert query to a json array.
    let result = [];
    querySnapshot.forEach(async (product) => {
       await result.push(product.data());
    });
    return result;
  };
