// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzEIFLnUU_7DguuKpTLEv3r54WY5-YY0U",
    authDomain: "two-fa-password-manager.firebaseapp.com",
    projectId: "two-fa-password-manager",
    storageBucket: "two-fa-password-manager.appspot.com",
    messagingSenderId: "210292466163",
    appId: "1:210292466163:web:50eaff5ec4b6cc53df3286"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

connectFunctionsEmulator(getFunctions(app), "localhost", 8080);

export function logOut()
{
    localStorage.clear();
    signOut(auth).then(() => window.location.replace("/"));
}
