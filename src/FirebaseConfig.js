GOOGLE_APPLICATION_CREDENTIALS="/Users/refactored/Desktop/gcloud-olivia_ceramics.json"
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Set the configuration for your app
// TODO: Replace with your app's config object
const firebaseConfig = {
  apiKey: "AIzaSyDuydredI9wg1XB9N2mRaLQpfvtqP95S-0",
  authDomain: "olivia-hoffman-ceramics-8720e.firebaseapp.com",
  projectId: "olivia-hoffman-ceramics-8720e",
  storageBucket: "olivia-hoffman-ceramics-8720e.appspot.com",
  messagingSenderId: "178282382461",
  appId: "1:178282382461:web:a7933db8dd31dfef9b1d14",
  measurementId: "G-R1628XPRYF"
};
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(firebaseApp);

export default storage;