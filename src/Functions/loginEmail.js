import { auth } from '../Firebase/credentials';
import { singInWithEmailAndPassword } from 'firebase/auth';

async function loginEmail(email, password) {
	const result = await singInWithEmailAndPassword(auth, email, password);
	console.log(result);
	return result;
}

export default loginEmail;
