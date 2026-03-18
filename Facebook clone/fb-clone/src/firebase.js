import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDfyBatBgirzgVTDQbDOFndpBIKhIvRPFw",
  authDomain: "facebook-clone-961d7.firebaseapp.com",
  projectId: "facebook-clone-961d7",
  storageBucket: "facebook-clone-961d7.appspot.com",
  messagingSenderId: "985218007",
  appId: "1:985218007:web:8aab4a486df0938df9e992",
  measurementId: "G-69418JG7MM"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;