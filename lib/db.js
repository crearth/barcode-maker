<script src="https://www.gstatic.com/firebasejs/7.14.5/firebase-app.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    databaseURL: FIREBASE_DATABASE_URL,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID
  };
    // appId: "1:770180915909:web:81399716a2f48c9ad586ac",
    // measurementId: "G-XW4MK1P7Y4"
    
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
</script>