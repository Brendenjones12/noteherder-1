import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'
import 'firebase/auth'

const app = firebase.initializeApp({
  apiKey: "AIzaSyAEj0Fsw6-LZNcgrAnW0jST0eoMq5XaTHY",
    authDomain: "noteherder-1.firebaseapp.com",
    databaseURL: "https://noteherder-1.firebaseio.com",
    projectId: "noteherder-1",
    storageBucket: "",
    messagingSenderId: "347578717505"
})

const db = database(app)

export const auth = app.auth()
export const githubProvider = new firebase.auth.GithubAuthProvider()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
//export const AnonProvider = new firebase.auth.AnonymousAuthProvider()

const base = Rebase.createClass(db)

export default base




