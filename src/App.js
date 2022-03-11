import React,{useState,useEffect}from "react";
import './style.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import Login from './Login';
import Hero from './Hero';

var firebaseConfig = {
  apiKey: "AIzaSyAIuHBUg7lik6HmCiE1INUF7w-5qSwH_aE",
  authDomain: "my-to-do-40608.firebaseapp.com",
  projectId: "my-to-do-40608",
  storageBucket: "my-to-do-40608.appspot.com",
  messagingSenderId: "841768335331",
  appId: "1:841768335331:web:fc5636f06b5a067a9812d6"
};
 firebase = firebase.initializeApp(firebaseConfig);

const App = () =>{
  const [user,setUser]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [emailError,setEmailError]=useState('');
  const [passwordError,setPasswordError]=useState('');
  const [hasAcoount,setHasAccount]=useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');

  }
  const clearErrors = () =>{
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () =>{
    clearErrors('');
    firebase
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch(err => {
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
        setEmailError(err.message);
        break;
        case "auth/wrong-password":
        setPasswordError(err.message);
        break;
      }

    });
  };
  const handleSingup = ()=> {
    clearErrors();
    firebase
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch(err => {
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
        
        setEmailError(err.message);
        break;
        case "auth/weak-password":
        setPasswordError(err.message);
        break;
      }

    });
  };

  const handleLogout = () => {
    firebase.auth().signOut();
  };
  const authListener = () =>{
    firebase.auth().onAuthStateChanged((user) =>{
      if(user){
        clearInputs();
        setUser(user);
       } else {
      setUser("");
      }
    });
  };
  useEffect(() => {
    authListener();

  },[]);
  return(
    <div>
      {user ?(
        <Hero handleLogout={handleLogout}/>
      ):(
        <Login
email={email}
setEmail={setEmail}
password={password}
setPassword={setPassword}
handleLogin={handleLogin}
handleSingup={handleSingup}
hasAcoount={hasAcoount}
setHasAccount={setHasAccount}
emailError={emailError}
passwordError={passwordError}

/>

      )}

    </div>

  );
};


export default App;







