import * as firebase from 'firebase/app';

const config = {
    apiKey: "AIzaSyCwaW2A-T8tDU9csin_8YmYRdo7tYH8ElM",
    authDomain: "grubshare-98b87.firebaseapp.com",
    projectId: "grubshare-98b87",
    storageBucket: "grubshare-98b87.appspot.com",
    messagingSenderId: "858096806566",
    appId: "1:858096806566:web:0207efb3ca3feefd9c2267"
  };
  
  firebase.initializeApp(config);
  
  export default firebase;