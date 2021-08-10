import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkG03ASd1X__cnaCFneJCaFqEOCYw-t80",
  authDomain: "random-workout-95270.firebaseapp.com",
  projectId: "random-workout-95270",
  storageBucket: "random-workout-95270.appspot.com",
  messagingSenderId: "385087210526",
  appId: "1:385087210526:web:da79d13398726395bcda0f",
  measurementId: "G-9NEFJHJ19M",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
export { projectFirestore };
