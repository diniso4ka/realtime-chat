import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import { getAuth, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';
import React, { Suspense } from 'react';
import Loader from './components/Loader';
import { getFirestore } from "firebase/firestore";



export const Context = React.createContext(null)

const App = () => {

  const app: any = initializeApp({
    apiKey: "AIzaSyDVSj2yHPlktInKT6IKYbFLGF_T3SNi6u8",
    authDomain: "chat-react-2e98e.firebaseapp.com",
    projectId: "chat-react-2e98e",
    storageBucket: "chat-react-2e98e.appspot.com",
    messagingSenderId: "328767882037",
    appId: "1:328767882037:web:4ec145235573618788827c",
    measurementId: "G-T5CSXF9VRE"
  });

  const auth: any | null = getAuth()
  const firestore: any = getFirestore(app)
  const [user, initialising, error] = useAuthState(auth)

  if (initialising) {
    return (
      <Loader />
    )
  }



  return (
    <Context.Provider value={{
      auth,
      signInWithPopup,
      firestore
    }
    }>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback=''>
          <AppRouter />
        </Suspense>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
