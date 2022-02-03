const firebaseConfig = {
  apiKey: "AIzaSyDcIRHBndCkr3z00KMarCQZEv0AWfYv_xE",
  authDomain: "lets-chat-eace2.firebaseapp.com",
  databaseURL: "https://lets-chat-eace2-default-rtdb.firebaseio.com",
  projectId: "lets-chat-eace2",
  storageBucket: "lets-chat-eace2.appspot.com",
  messagingSenderId: "396558450926",
  appId: "1:396558450926:web:028beec0638c85cd1df3ff"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    
function update_label(){
    username = localStorage.getItem("username");
    document.getElementById("user_name").innerHTML = "Welcome " + username + " !";
}
