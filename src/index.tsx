import App from './App';
import { createRoot } from 'react-dom/client'


import 'firebase/firestore'
import 'firebase/auth'

import './config/i18n';




const root = createRoot(document.getElementById('root'));
root.render(
   <App />
);

