import Rebase from "re-base";
import firebase from "firebase";

import firebaseApiKey from "./keepSafe";

const firebaseApp = firebase.initializeApp({
    apiKey: firebaseApiKey,
    authDomain: "catch-of-the-day-paulo-azoia.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-paulo-azoia-default-rtdb.europe-west1.firebasedatabase.app",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
