import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyAIm5E6Jhlbyk7VocfVE2MRyFanqoW_3Zo",
    authDomain: "skychat-a384b.firebaseapp.com",
    projectId: "skychat-a384b",
    storageBucket: "skychat-a384b.appspot.com",
    messagingSenderId: "1058204236635",
    appId: "1:1058204236635:web:1222070517c9227986f87e"
  }).auth()