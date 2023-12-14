// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh-oytoWccgQnrVOCVaMJN8M1vE4LTzxQ",
  authDomain: "expense-tracker-app-8c545.firebaseapp.com",
  projectId: "expense-tracker-app-8c545",
  storageBucket: "expense-tracker-app-8c545.appspot.com",
  messagingSenderId: "131862982322",
  appId: "1:131862982322:web:b393ec85c0c5241fc423ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);