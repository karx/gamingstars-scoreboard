let db = firebase.firestore();

db.collection("/streamquestion")
  .doc("currentRoom")
  .onSnapshot((querySnapshot) => {
    let snapData = querySnapshot.data();
    let room = snapData.room;
    let password = snapData.password;

    updateRoomToDOM(room);
    updatePasswordToDOM(password);
  });

  
db.collection("/streamquestion")
.doc("currentMode")
.onSnapshot((querySnapshot) => {
  let snapData = querySnapshot.data();
  let mode = snapData.mode;

  updateModeToDOM(mode);
  
});

function updateRoomToDOM(room) {
  document.getElementById("q-head").innerHTML = room;
}
function updatePasswordToDOM(password) {    
  document.getElementById("q-pass").innerHTML = password;
}


function updateModeToDOM(mode) {    
  document.getElementById("q-mode").innerHTML = mode;
}