import App from './App';
import { createRoot } from 'react-dom/client'
import React from 'react';

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'


const app = initializeApp({
   apiKey: "AIzaSyDVSj2yHPlktInKT6IKYbFLGF_T3SNi6u8",
   authDomain: "chat-react-2e98e.firebaseapp.com",
   projectId: "chat-react-2e98e",
   storageBucket: "chat-react-2e98e.appspot.com",
   messagingSenderId: "328767882037",
   appId: "1:328767882037:web:4ec145235573618788827c",
   measurementId: "G-T5CSXF9VRE"
});


const provider = new GoogleAuthProvider();

const auth = getAuth()

const fetchData = async () => {
   await signInWithPopup(auth, provider).then((res) =>
      localStorage.setItem('profile', JSON.stringify(res.user))
   )

}

export const Context = React.createContext(null)







const root = createRoot(document.getElementById('root'));
root.render(
   <Context.Provider value={fetchData}>
      <App />
   </Context.Provider>
);

