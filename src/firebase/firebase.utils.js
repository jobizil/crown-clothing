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

// Create a new User profile
// N:B => userAAuth is the auth data gotten from the user sign in auth library
export const createUserProfileDocument = async (userAuth, otherData) => {
  if (!userAuth) return

  // Get a user Reference from the user auth
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  // Create a snpshot from the userRef above
  const snapShot = await userRef.get()
  // Create a new user data using the userRef => documentRef
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...otherData,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

// Set up Google Auth Utility
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
