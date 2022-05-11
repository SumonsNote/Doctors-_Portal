// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwpSx2SCan3vYaaCZMJAF6wtFTWgBpm0I",
  authDomain: "doctors-portal-cab5d.firebaseapp.com",
  projectId: "doctors-portal-cab5d",
  storageBucket: "doctors-portal-cab5d.appspot.com",
  messagingSenderId: "852030817069",
  appId: "1:852030817069:web:cfc57ad08f7917eab989a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth