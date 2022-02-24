// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUidi7bk0oc-gfG2IUhJ7J_LDIcWFIKCc",
  authDomain: "uberclone-5b209.firebaseapp.com",
  projectId: "uberclone-5b209",
  storageBucket: "uberclone-5b209.appspot.com",
  messagingSenderId: "862239892747",
  appId: "1:862239892747:web:742f32ff91f53f2952ee0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Provider = new GoogleAuthProvider
const auth = getAuth()

export {Provider,app,auth}
