import { initializeApp } from "firebase/app";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDrxgSz9vZcVr5keIoat_iUy8wMhfiMtkI",
  authDomain: "soli-blog.firebaseapp.com",
  projectId: "soli-blog",
  storageBucket: "soli-blog.appspot.com",
  messagingSenderId: "674796399522",
  appId: "1:674796399522:web:12601b65230717a60fe0fb",
  measurementId: "G-BW0Y7S5S4S",
});

const db = getFirestore(firebaseApp);
enableIndexedDbPersistence(db);
export { db };
