const firebaseConfig = {
  apiKey: "AIzaSyCJWcTzhavQcLLbz7vp0b8lXvEDwJOP78A",
  authDomain: "vamos-conversar-aleatoriototal.firebaseapp.com",
  databaseURL: "https://vamos-conversar-aleatoriototal-default-rtdb.firebaseio.com",
  projectId: "vamos-conversar-aleatoriototal",
  storageBucket: "vamos-conversar-aleatoriototal.appspot.com",
  messagingSenderId: "253069943420",
  appId: "1:253069943420:web:6fb59b52d05f33f0d61ff9"
};

//ADICIONE SEUS LINKS FIREBASE
firebase.initializeApp(firebaseConfig);

  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}

