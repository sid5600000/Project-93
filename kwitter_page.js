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

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
    msg = document.getElementById("Message").value;
    firebase.database().ref(room_name).push({
        username : user_name,
        message : msg,
        likes : 0
    })
}

function logout(){
    localStorage.removeItem("room_name");
    localStorage.removeItem("username");
    window.location = "index.html";
}