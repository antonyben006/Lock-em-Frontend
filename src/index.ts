import { auth } from "./utils/firebase";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

document.getElementById("loginButton").addEventListener("click", () =>  signInWithPopup(auth, provider)
    .then(() => window.location.href="/verify").catch(() => window.alert("Login Failed")));
