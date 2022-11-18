// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBWg8oPoaqfL8CeNDirtWBBBt_JloYsuVY",
  authDomain: "eshop-90290.firebaseapp.com",
  projectId: "eshop-90290",
  storageBucket: "eshop-90290.appspot.com",
  messagingSenderId: "752273320035",
  appId: "1:752273320035:web:25990ba784aa3dc7e17056",
  measurementId: "G-T10J1F2W0S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
