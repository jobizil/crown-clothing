import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyB2w0rE4voWWtKhuf5tf-N97R05gX5pHMg',
  authDomain: 'crown-db-d0bd8.firebaseapp.com',
  projectId: 'crown-db-d0bd8',
  storageBucket: 'crown-db-d0bd8.appspot.com',
  messagingSenderId: '1087313782434',
  appId: '1:1087313782434:web:84b600de467e753cc199fb',
  measurementId: 'G-YX2YYPNW2N',
}
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

// Set up Google Auth Utility
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
