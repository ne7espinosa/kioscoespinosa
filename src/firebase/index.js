import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCxFDy_K1EbRRw7d_pEyZxtSOCQP6TpG2o",
    authDomain: "kioscoespinosa-ecommerce.firebaseapp.com",
    projectId: "kioscoespinosa-ecommerce",
    storageBucket: "kioscoespinosa-ecommerce.appspot.com",
    messagingSenderId: "174152240370",
    appId: "1:174152240370:web:918f65c27a8d0bb76d546b"
  };

const app = firebase.initializeApp(firebaseConfig);
export function getFirebase(){
  return app;
}

export function getFirestore()
{
  return firebase.firestore(app);
}
