import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyDUOauZFq_vT34PjEdWfG1e3nbSHLNkhMo",
    authDomain: "fb-iot-6a538.firebaseapp.com",
    projectId: "fb-iot-6a538",
    storageBucket: "fb-iot-6a538.appspot.com",
    messagingSenderId: "77331354592",
    appId: "1:77331354592:web:cf1f68adb333e4b6aad185"
};

const fb = firebase.initializeApp(firebaseConfig);

export const auth = fb.auth();
export const database = fb.database();
export default fb;