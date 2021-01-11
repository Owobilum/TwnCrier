import firebase from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA9-A4IxGlvC6UdhqvjpMDfhrjgBT__9e4",
  authDomain: "twncrier-development.firebaseapp.com",
  projectId: "twncrier-development",
  storageBucket: "twncrier-development.appspot.com",
  messagingSenderId: "991961843710",
  appId: "1:991961843710:web:c7fb24397aaa6a2f8862af"
};
let app;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
export const auth = app.auth();
export default app;
