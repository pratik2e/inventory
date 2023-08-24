import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCh_iLRHPeSgAanfy3C-ZTR9m78xHbw2rI",
  authDomain: "inventory-management-76ffc.firebaseapp.com",
  projectId: "inventory-management-76ffc",
  storageBucket: "inventory-management-76ffc.appspot.com",
  messagingSenderId: "1096956521336",
  appId: "1:1096956521336:web:c11680328f1cd79a9f368d",
  measurementId: "G-NR91Z7DTWM"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);
export default auth;
