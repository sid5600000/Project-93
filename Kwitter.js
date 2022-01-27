function login(){
    username = document.getElementById("username_input").value;
    localStorage.setItem("username",username);
    window.location = "Kwitter_room.html";
}