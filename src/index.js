import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCmI50AtzMfRQj4I0OCzfvJTxruvIy6IBI",
  authDomain: "my-post-app-b7ec5.firebaseapp.com",
  projectId: "my-post-app-b7ec5",
  storageBucket: "my-post-app-b7ec5.appspot.com",
  messagingSenderId: "18524485518",
  appId: "1:18524485518:web:e1e982177f61befbd5d6df",
  measurementId: "G-RPC0HG5NHV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
