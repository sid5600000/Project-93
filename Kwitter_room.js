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

function add_room(){
    room_name = document.getElementById("room_name").value;
    localStorage.setItem("room_name",room_name);
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room"
    });
    window.location = "kwitter_page.html";
}

function getData(){firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
    row = "<div id=" + Room_names + "class='room_name'" + "onclick='redirect_to_roomname(this.id)' >#" + Room_names + "</div>";
    document.getElementById("output").innerHTML += row; 
});});}
getData();

function redirect_to_roomname(room_name){
    localStorage.setItem("room_name",room_name);
    window.location = "kwitter_page.html";
}