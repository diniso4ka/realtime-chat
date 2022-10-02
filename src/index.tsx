import App from './App';
import { createRoot } from 'react-dom/client'
import React from 'react';

import 'firebase/firestore'
import 'firebase/auth'




const root = createRoot(document.getElementById('root'));
root.render(
   <App />
);

