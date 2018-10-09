  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDDwe6ZKKY7M_lQ898I2qWnwJAT-pbkVSQ",
    authDomain: "comentarios-be787.firebaseapp.com",
    databaseURL: "https://comentarios-be787.firebaseio.com",
    projectId: "comentarios-be787",
    storageBucket: "comentarios-be787.appspot.com",
    messagingSenderId: "84563280079"
  };
  firebase.initializeApp(config);

  var db=firebase.firestore()


db.collection("datos").add({
    name: "we",
  
})
.then(function(docRef) {
    console.log("Document successfully written!",docRef.id);
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});