let db = firebase.firestore();

//TEAM SCORE
db.collection("/streamscore/25062020/scoretally")
  .where("team", "==", "red")
  .onSnapshot((querySnapshot) => {
    let scores = [];
    let total_score = 0;
    querySnapshot.forEach((score) => {
      let scoreData = score.data();
      total_score += scoreData.value;
      console.log(scoreData);
      scores.push(scoreData);
    });

    updateTotalScoreToRed(total_score);
  });

db.collection("/streamscore/25062020/scoretally")
  .where("team", "==", "blue")
  .onSnapshot((querySnapshot) => {
    let scores = [];
    let total_score = 0;
    querySnapshot.forEach((score) => {
      let scoreData = score.data();
      total_score += scoreData.value;
      console.log(scoreData);
      scores.push(scoreData);
    });

    updateTotalScoreToBlue(total_score);
  });



//Player Score

db.collection("/streamscore/25062020/scoretally")
  .where("player", "==", "p1")
  .onSnapshot((querySnapshot) => {
    
    let killCount = 0;
    let revCount = 0;

    querySnapshot.forEach((score) => {
      let scoreData = score.data();
      if (score.reason && scoreData.reason == 'kill') {
        killCount++;
      } else if (score.reason && scoreData.reason == 'revive') {
        revCount++;
      }
    });
    updatePlayerWithKillAndRev('p1',killCount,revCount);
  });

  db.collection("/streamscore/25062020/scoretally")
  .where("player", "==", "p2")
  .onSnapshot((querySnapshot) => {
    
    let killCount = 0;
    let revCount = 0;

    querySnapshot.forEach((score) => {
      let scoreData = score.data();
      if (score.reason && scoreData.reason == 'kill') {
        killCount++;
      } else if (score.reason && scoreData.reason == 'revive') {
        revCount++;
      }
    });
    updatePlayerWithKillAndRev('p2',killCount,revCount);
  });

  db.collection("/streamscore/25062020/scoretally")
  .where("player", "==", "p3")
  .onSnapshot((querySnapshot) => {
    
    let killCount = 0;
    let revCount = 0;

    querySnapshot.forEach((score) => {
      let scoreData = score.data();
      if (score.reason && scoreData.reason == 'kill') {
        killCount++;
      } else if (score.reason && scoreData.reason == 'revive') {
        revCount++;
      }
    });
    updatePlayerWithKillAndRev('p3',killCount,revCount);
  });

  db.collection("/streamscore/25062020/scoretally")
  .where("player", "==", "p4")
  .onSnapshot((querySnapshot) => {
    
    let killCount = 0;
    let revCount = 0;

    querySnapshot.forEach((score) => {
      let scoreData = score.data();
      if (score.reason && scoreData.reason == 'kill') {
        killCount++;
      } else if (score.reason && scoreData.reason == 'revive') {
        revCount++;
      }
    });
    updatePlayerWithKillAndRev('p4',killCount,revCount);
  });


function updateTotalScoreToRed(score) {
  document.getElementById("red-score-total").innerHTML = score;
}
function updateTotalScoreToBlue(score) {
  document.getElementById("blue-score-total").innerHTML = score;
}

function updatePlayerWithKillAndRev(playaStub, killCount, revCount) {
  document.getElementById(playaStub + 'kills').innerHTML = killCount;
  document.getElementById(playaStub + 'revs').innerHTML = revCount;
}
