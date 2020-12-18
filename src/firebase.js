import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDqy6lZnAzIZVftL5081SQugUNlKrLPyQs",
    authDomain: "slack-clone-c3ef2.firebaseapp.com",
    databaseURL: "https://slack-clone-c3ef2.firebaseio.com",
    projectId: "slack-clone-c3ef2",
    messagingSenderId: "482175334818",
    appId: "1:482175334818:web:3a54039ab2e67d06789afb",
    measurementId: "G-SQF071W5N5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}

export default db