import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    getDocs,
    setDoc,
    collection,
    writeBatch,
    query
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAjbnqatBoxHgH25pxBGg5c1o6rJ64mYpw",
  authDomain: "crown-clothing-db-6117a.firebaseapp.com",
  projectId: "crown-clothing-db-6117a",
  storageBucket: "crown-clothing-db-6117a.appspot.com",
  messagingSenderId: "789710194766",
  appId: "1:789710194766:web:4f6aef5f785553bf84db1f"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (userSnapshot.exists()) {
        return userDocRef;
    }

    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
        await setDoc(userDocRef, {displayName, email, createdAt});
    } catch (error) {
        console.log('error creating user', error.message);
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signIn = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = () => signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectToAdd.forEach(
        (object) => {
            const docRef = doc(collectionRef, object.title.toLowerCase());
            batch.set(docRef, object);
        }
    );

    await batch.commit();
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(docSnapshot => docSnapshot.data());
}
