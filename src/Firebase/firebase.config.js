// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXqQO8AT_QUt1zpue0e2cs3TnubbIfZxs",
  authDomain: "import-exports.firebaseapp.com",
  projectId: "import-exports",
  storageBucket: "import-exports.firebasestorage.app",
  messagingSenderId: "927408618111",
  appId: "1:927408618111:web:22c7f5a9b8f1ee7bf11d4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;