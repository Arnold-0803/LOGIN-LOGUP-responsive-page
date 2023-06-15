import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAyJEdyaAWEZfXnk7jpbtprTSgA7rTj1EE",
  authDomain: "e-com-agribiz-5114a.firebaseapp.com",
  projectId: "e-com-agribiz-5114a",
  storageBucket: "e-com-agribiz-5114a.appspot.com",
  messagingSenderId: "854084267213",
  appId: "1:854084267213:web:ce418cc3628224a48c4d84"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

//LogIn user input DOM

const logInEmail = document.querySelector('#login-email');
const logInPassword = document.querySelector('#login-password');
const logInButton = document.querySelector('#login-button');

//SignUp user input DOM

const userName = document.querySelector('#user-name');
const userEmail = document.querySelector('#user-email');
const userPassword = document.querySelector('#user-password');
const confirmUserPassword = document.querySelector('#confirm-user-password');
const createButton = document.querySelector('#create-button');

var email,
password,
registerName,
registerEmail,
registerPassword,
confirmRegisterPassword

createButton.addEventListener('click', function() {
    var isVerified = true;

    registerName = userName.value;
    registerEmail = userEmail.value;


    registerPassword = userPassword.value;
    confirmRegisterPassword = confirmUserPassword.value;

    if(registerPassword != confirmRegisterPassword){
        window.alert('Password do not match');
        isVerified = false;
    }
    if( registerName == null || 
        registerEmail == null || 
        registerPassword == null || 
        confirmRegisterPassword ==null){
            window.alert('Kindly fill in all the required areas');
            isVerified = false;
    }
    if(isVerified){
        createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
        .then((userCredentials)=> {
            const user = userCredentials.user;
            window.alert('YOU HAVE SUCCESSFULLY SIGNED UP');
            window.location = './home.html';
        })
        .catch((error)=> {
            const errorCode = error.code;
            const errorMessage = error.message;
            window.alert(errorMessage);
        })
    }
})

logInButton.addEventListener('click', function() {
    email = logInEmail.value;
    password = logInPassword.value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials)=> {
        const user = userCredentials.user;
        window.alert('Wellcome!');
        window.location = './home.html';
    })
})






const container = document.querySelector('.cotainer');
const logupLink = document.querySelector('.logup-link');
const loginLink = document.querySelector('.login-link');


const btnPopup = document.querySelector('.login-popup');
const closeBtn = document.querySelector('.close');


logupLink.addEventListener('click', ()=> {
    container.classList.add('active');
})
loginLink.addEventListener('click', ()=> {
    container.classList.remove('active');
})


btnPopup.addEventListener('click', ()=>{
    container.classList.add('active-popup');
})
closeBtn.addEventListener('click', ()=>{
    container.classList.remove('active-popup')
})