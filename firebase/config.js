// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ1pNpiWHCcnQfU1KfY9KTJX1Q_35ZFjQ",
  authDomain: "wired-archery-274511.firebaseapp.com",
  databaseURL: "https://wired-archery-274511.firebaseio.com",
  projectId: "wired-archery-274511",
  storageBucket: "wired-archery-274511.appspot.com",
  messagingSenderId: "619237718979",
  appId: "1:619237718979:web:ba35a43157b989db325b76",
  measurementId: "G-8HS2JYKKGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;