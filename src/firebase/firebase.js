import * as firebase from "firebase";

class Firebase {

    /**
     * Initialises Firebase
     */
    static initialise() {
        firebase.initializeApp({
            apiKey: "AIzaSyBqg0M28yKqgeTDl1vHILw8tOJpTz81-Ls",
            authDomain: "reactfirebase-94e5b.firebaseapp.com",
            databaseURL: "https://reactfirebase-94e5b.firebaseio.com",
            projectId: "reactfirebase-94e5b",
            storageBucket: "reactfirebase-94e5b.appspot.com",
            messagingSenderId: "304181383641"
        });
    }

}

module.exports = Firebase;