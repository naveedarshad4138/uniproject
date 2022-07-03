import {getApp, getApps, initializeApp } from 'firebase/app';
import {getFirestore } from 'firebase/firestore';
import {getStorage } from 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyBBi4A894ffdWgf4xIEoiqt_K8D2vVHzKs",
    authDomain: "resturantproject-40b6f.firebaseapp.com",
    databaseURL: "https://resturantproject-40b6f-default-rtdb.firebaseio.com",
    projectId: "resturantproject-40b6f",
    storageBucket: "resturantproject-40b6f.appspot.com",
    messagingSenderId: "254393878344",
    appId: "1:254393878344:web:79cf0268acc7f0254b957d",
    measurementId: "G-QBCY7SSTG7"
  };
  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const storage = getStorage(app);
  export {app, firestore, storage};