// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAqN0uwIKSalfqpTb4Zu9TiiWfi_j2faAE",
    authDomain: "metis-98bc8.firebaseapp.com",
    projectId: "metis-98bc8",
    storageBucket: "metis-98bc8.firebasestorage.app",
    messagingSenderId: "84707581846",
    appId: "1:84707581846:web:ec60cf7779b86344b687b7",
    measurementId: "G-6YZ9EJ54L7"
};

// Initialize Firebase
let app;
let analytics;

if (typeof window !== "undefined") {
    app = initializeApp(firebaseConfig);
    analytics = getAnalytics(app);
}

export { app, analytics };