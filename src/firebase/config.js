import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8V3etf9YGn7DpSWdEfkuwG8lAjrHyymI",
  authDomain: "miniblog-8f4f9.firebaseapp.com",
  projectId: "miniblog-8f4f9",
  storageBucket: "miniblog-8f4f9.appspot.com",
  messagingSenderId: "415770428385",
  appId: "1:415770428385:web:9911dab620ec50e43148a0",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
