import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbTMoxeKPkT3iNrmSbSTHrUXhoIstFpB0",
  authDomain: "react-firebase-44654.firebaseapp.com",
  projectId: "react-firebase-44654",
  storageBucket: "react-firebase-44654.firebasestorage.app",
  messagingSenderId: "129066856854",
  appId: "1:129066856854:web:e43b35191f7abf2f36adb7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);