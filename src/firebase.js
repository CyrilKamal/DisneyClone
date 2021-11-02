import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCvXhEWoIAfACdQxOPZRZnAhuQWwOcE8wQ",
  authDomain: "disneyplus-clone-8593a.firebaseapp.com",
  projectId: "disneyplus-clone-8593a",
  storageBucket: "disneyplus-clone-8593a.appspot.com",
  messagingSenderId: "605857811813",
  appId: "1:605857811813:web:30df50075198d3e80b258c",
  measurementId: "G-XT0CG23R7K",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
