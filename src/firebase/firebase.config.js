// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_uthDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };
const firebaseConfig = {
  apiKey: "AIzaSyD9kYDMMisIcQz6kfSIVglw1DD4sUtlggU",
  authDomain: "assign-10-3f0af.firebaseapp.com",
  projectId: "assign-10-3f0af",
  storageBucket: "assign-10-3f0af.appspot.com",
  messagingSenderId: "813097628006",
  appId: "1:813097628006:web:fa54061dd442c7bf3118a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;