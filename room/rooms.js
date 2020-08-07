let db = firebase.firestore();

//TEAM SCORE
db.collection("/streamquestion")
  .doc("currentRoom")
  .onSnapshot((querySnapshot) => {
    let snapData = querySnapshot.data();
    let room = snapData.room;
    let password = snapData.password;

    updateRoomToDOM(room);
    updatePasswordToDOM(password);
  });

function updateRoomToDOM(room) {
  document.getElementById("q-head").innerHTML = room;
}
function updatePasswordToDOM(password) {
    
  document.getElementById("q-pass").innerHTML = password;

}
