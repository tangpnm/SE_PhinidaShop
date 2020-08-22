import firebase from 'firebase'
import store from '@/store.js'

var config = {
    apiKey: "AIzaSyCArFTFLsryP5DbDud7JQhFWkGu4Encrdc",
    authDomain: "phinidashop.firebaseapp.com",
    databaseURL: "https://phinidashop.firebaseio.com",
    projectId: "phinidashop",
    storageBucket: "phinidashop.appspot.com",
    messagingSenderId: "320205621337"
};
const database = firebase.initializeApp(config);

database.signIn = async (email, password) => {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password)

        store.commit('setCurrentUser', firebase.auth().currentUser)

        return true
    }catch (error) {
        return error
    }
}

database.signOut = async () => {
    try {
        await firebase.auth().signOut()

        store.commit('setCurrentUser', null)

        return true
    }catch (error) {
        return error
    }
}

export default database

const db = firebase.firestore();
export {db}