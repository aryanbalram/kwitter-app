var firebaseConfig = {
      apiKey: "AIzaSyCOmyPWhPHjB3cV4sDHYuvN-WSHaRqyGTE",
      authDomain: "kwitter-app-29336.firebaseapp.com",
      databaseURL: "https://kwitter-app-29336-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-29336",
      storageBucket: "kwitter-app-29336.appspot.com",
      messagingSenderId: "420002896016",
      appId: "1:420002896016:web:5a12f144e1114c103e6015",
      measurementId: "G-EPTRC7L6YQ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
