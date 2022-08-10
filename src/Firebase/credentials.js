import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBCzjqfNdKKpApLMOB6XhoJdO2Y6KXW2kk',
	authDomain: 'nike-758ed.firebaseapp.com',
	projectId: 'nike-758ed',
	storageBucket: 'nike-758ed.appspot.com',
	messagingSenderId: '1024373526147',
	appId: '1:1024373526147:web:5b4c56194dfb442306d5b6'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
