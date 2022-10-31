// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb8iZnmzaQJO1FKDkd2s-5G_uZq7l8odU",
    authDomain: "fir-crud-aula.firebaseapp.com",
    projectId: "fir-crud-aula",
    storageBucket: "fir-crud-aula.appspot.com",
    messagingSenderId: "319725483199",
    appId: "1:319725483199:web:73fdb61b3ff8fdc488020a"
  // Put you credentials here
 
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

/**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description 
 * 
 */

export const saveTask = (title, description) =>
  addDoc(collection(db, "tasks"), { title, description });
 


export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);

 

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tasks", id), newFields);

export const getTasks = () => getDocs(collection(db, "tasks"));