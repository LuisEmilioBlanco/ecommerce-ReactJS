import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  projectId: 'sio-odontologia',
  messagingSenderId: '981293817548',
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export default firebase;
