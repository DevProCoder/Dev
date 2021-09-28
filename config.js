import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB11otmI-chOeMCschpi2vSCpZeD-GazLU",
  authDomain: "react-native-e42e2.firebaseapp.com",
  databaseURL: "https://react-native-e42e2-default-rtdb.firebaseio.com",
  projectId: "react-native-e42e2",
  storageBucket: "react-native-e42e2.appspot.com",
  messagingSenderId: "13542583226",
  appId: "1:13542583226:web:f444b03675b430c32e0b83",
  measurementId: "G-RH62M4YTRJ"
};

// Initialize Firebase
if(!firebase.apps.length ){
firebase.initializeApp(firebaseConfig);

}

export default firebase.database();
