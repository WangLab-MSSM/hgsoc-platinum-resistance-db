import firebase from "firebase/app";
import 'firebase/database'

const env = process.env

const firebaseConfig = {
    apiKey: env.VUE_APP_API_KEY,
    authDomain: env.VUE_APP_AUTH_DOMAIN,
    databaseURL: env.VUE_APP_DB_URL,
    projectId: env.VUE_APP_PROJECT_ID,
    storageBucket: env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: env.VUE_APP_MESSAGING_SENDER_ID,
    appId: env.VUE_APP_APP_ID,
    measurementId: env.VUE_APP_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig)

export const getForumPosts = async (postId) => {
    const path = `forum/${postId}`
    const ref = firebase.database().ref(path)
    return await ref.once('value')
        .then((snapshot) => {
            return snapshot.val()
        })
}

export const setForumPosts = (postId, forumPosts) => {
    const path = `forum/${postId}`
    const ref = firebase.database().ref(path)
    console.log(path)
    // const ref = firebase.database().ref(path)
    ref.set(forumPosts);
}
