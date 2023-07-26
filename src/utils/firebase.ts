import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    apiKey: import.meta.env.VITE_apiKey,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    authDomain: import.meta.env.VITE_authDomain,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    projectId: import.meta.env.VITE_projectId,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    storageBucket: import.meta.env.VITE_storageBucket,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
export const auth = getAuth(app);