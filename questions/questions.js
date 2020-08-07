let db = firebase.firestore();

//TEAM SCORE
db.collection("/streamquestion")
  .doc("currentQuestion")
  .onSnapshot((querySnapshot) => {
    let snapData = querySnapshot.data();
    let question = snapData.question;
    let options = snapData.options;

    updateQuestionToDOM(question);
    updateOptionsToDOM(options);
  });

function updateQuestionToDOM(question) {
  document.getElementById("q-head").innerHTML = question;
}
function updateOptionsToDOM(options) {
    let optionsDOM = options.split(',').map(e => `<div class="ech-options"> ${e}</div>`).join('');
  document.getElementById("q-opts").innerHTML = optionsDOM;

}
