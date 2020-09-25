import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBSs-0yNTT_Xvd8SzjEs6j8XgYCj3G36a0",
  authDomain: "crwn-db-version-2.firebaseapp.com",
  databaseURL: "https://crwn-db-version-2.firebaseio.com",
  projectId: "crwn-db-version-2",
  storageBucket: "crwn-db-version-2.appspot.com",
  messagingSenderId: "354765397316",
  appId: "1:354765397316:web:d05c256a5a99cacf628b11",
  measurementId: "G-DHFY0NKBS0",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  console.log(snapshot);
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// setting up google auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
