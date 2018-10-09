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

 const db=firebase.firestore()
  

function guardar () {
  let comment=document.getElementById('comentario').value;
db.collection("cosas").add({
   dato:comment
  
})
.then(function(docRef) {
    console.log("Document successfully written!",docRef.id);
    document.getElementById('comentario').value='';
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});

}

let post= document.getElementById("post")
db.collection("cosas").onSnapshot((querySnapshot) => {
  post.innerHTML='';
  querySnapshot.forEach(function(doc) {
    
      console.log(doc.id, " => ", doc.data());
      post.innerHTML +=`<p> ${doc.data().dato}</p>`
  });
});