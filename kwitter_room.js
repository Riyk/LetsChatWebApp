
const firebaseConfig = {
      apiKey: "AIzaSyB8RG1CJ_5Rv3WB0Fvk3Zy-3x--u0lQilA",
      authDomain: "letschatwebapp-c3544.firebaseapp.com",
      databaseURL: "https://letschatwebapp-c3544-default-rtdb.firebaseio.com",
      projectId: "letschatwebapp-c3544",
      storageBucket: "letschatwebapp-c3544.appspot.com",
      messagingSenderId: "254895175863",
      appId: "1:254895175863:web:13fbd0b16a5fc5e1af3532"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    function getData() {firebase.database().ref("/").on('value',)}
    function snapshot() {document.getElementById("output").innerHTML =
    "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key})};
    Room_names = childKey;
       user_name = localStorage.getItem("user_name");

       firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
          });

          localStorage.setItem("room_name", room_name);
    
          window.location = "kwitter_room.html";

          function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key; Room_names = childKey;
//Start code
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
//End code
});});}
getData();
