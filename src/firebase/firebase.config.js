// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOweSv8i_U2P728n8eAHVzK7l7IyNIft4",
  authDomain: "foreign-language-dc0b8.firebaseapp.com",
  projectId: "foreign-language-dc0b8",
  storageBucket: "foreign-language-dc0b8.appspot.com",
  messagingSenderId: "683751461015",
  appId: "1:683751461015:web:85c49589c93505679359d2",
  measurementId: "G-B8VWL2BTKV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;