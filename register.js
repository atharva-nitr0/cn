// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCqyp6doqwuxB1IirkYNuNj69yAW7BsKrE",
    authDomain: "online-bus-pass-7a9fb.firebaseapp.com",
    projectId: "online-bus-pass-7a9fb",
    storageBucket: "online-bus-pass-7a9fb.firebasestorage.app",
    messagingSenderId: "383109616532",
    appId: "1:383109616532:web:e2e8704b0eb0491de33581",
    measurementId: "G-Y903P7F8GY"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);