import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCvXhEWoIAfACdQxOPZRZnAhuQWwOcE8wQ",
  authDomain: "disneyplus-clone-8593a.firebaseapp.com",
  projectId: "disneyplus-clone-8593a",
  storageBucket: "disneyplus-clone-8593a.appspot.com",
  messagingSenderId: "605857811813",
  appId: "1:605857811813:web:30df50075198d3e80b258c",
  measurementId: "G-XT0CG23R7K",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
