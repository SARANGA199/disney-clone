
const firebaseConfig = {
    apiKey: "AIzaSyB3JRWAXHKXIwh9szrBe8e9FzHrfBTwGaI",
    authDomain: "disneyplus-clone-3d3ab.firebaseapp.com",
    projectId: "disneyplus-clone-3d3ab",
    storageBucket: "disneyplus-clone-3d3ab.appspot.com",
    messagingSenderId: "795131472898",
    appId: "1:795131472898:web:ecd595aa0b10a7b4990b1b",
    measurementId: "G-1Q1GKYZ87M"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
