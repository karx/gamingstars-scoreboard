let db = firebase.firestore();

//TEAM SCORE
db.collection("/streamscore/25062020/scoretally")
  .where("team", "==", "red")
  .onSnapshot((querySnapshot) => {
    let total_score = 0;
    let killCount = 0;
    let revCount = 0;
    querySnapshot.forEach((score) => {
      let scoreData = score.data();
      total_score += scoreData.value;
      // console.log(scoreData);
      if (scoreData.reason && scoreData.reason == "kill") {
        killCount++;
      } else if (scoreData.reason && scoreData.reason == "revive") {
        revCount++;
      }
    });

    updateTotalScoreToRed(total_score);
    updateTeamWithScoreKillRev("red", total_score, killCount, revCount);
  });

db.collection("/streamscore/25062020/scoretally")
  .where("team", "==", "blue")
  .onSnapshot((querySnapshot) => {
    let total_score = 0;
    let killCount = 0;
    let revCount = 0;
    querySnapshot.forEach((score) => {
      let scoreData = score.data();
      total_score += scoreData.value;
      // console.log(scoreData);
      if (scoreData.reason && scoreData.reason == "kill") {
        killCount++;
      } else if (scoreData.reason && scoreData.reason == "revive") {
        revCount++;
      }
    });

    updateTotalScoreToBlue(total_score);
    updateTeamWithScoreKillRev("blue", total_score, killCount, revCount);
  });

//Player Score

db.collection("/streamscore/25062020/scoretally")
  .where("player", "==", "p1")
  .onSnapshot((querySnapshot) => {
    let killCount = 0;
    let revCount = 0;

    querySnapshot.forEach((score) => {
      let scoreData = score.data();
      if (scoreData.reason && scoreData.reason == "kill") {
        killCount++;
      } else if (scoreData.reason && scoreData.reason == "revive") {
        revCount++;
      }
    });
    updatePlayerWithKillAndRev("p1", killCount, revCount);
  });

db.collection("/streamscore/25062020/scoretally")
  .where("player", "==", "p2")
  .onSnapshot((querySnapshot) => {
    let killCount = 0;
    let revCount = 0;

    querySnapshot.forEach((score) => {
      let scoreData = score.data();
      if (scoreData.reason && scoreData.reason == "kill") {
        killCount++;
      } else if (scoreData.reason && scoreData.reason == "revive") {
        revCount++;
      }
    });
    updatePlayerWithKillAndRev("p2", killCount, revCount);
  });

db.collection("/streamscore/25062020/scoretally")
  .where("player", "==", "p3")
  .onSnapshot((querySnapshot) => {
    let killCount = 0;
    let revCount = 0;

    querySnapshot.forEach((score) => {
      let scoreData = score.data();
      if (scoreData.reason && scoreData.reason == "kill") {
        killCount++;
      } else if (scoreData.reason && scoreData.reason == "revive") {
        revCount++;
      }
    });
    updatePlayerWithKillAndRev("p3", killCount, revCount);
  });

db.collection("/streamscore/25062020/scoretally")
  .where("player", "==", "p4")
  .onSnapshot((querySnapshot) => {
    let killCount = 0;
    let revCount = 0;

    querySnapshot.forEach((score) => {
      let scoreData = score.data();
      console.log("p4 Search: ");
      console.log(scoreData);
      if (scoreData.reason && scoreData.reason == "kill") {
        killCount++;
      }
      if (scoreData.reason && scoreData.reason == "revive") {
        revCount++;
      }
    });
    updatePlayerWithKillAndRev("p4", killCount, revCount);
  });

function updateTotalScoreToRed(score) {
  document.getElementById("red-score-total").innerHTML = score;
}
function updateTotalScoreToBlue(score) {
  document.getElementById("blue-score-total").innerHTML = score;
}

function updateTeamWithScoreKillRev(teamStub, score, killCount, revCount) {
  document.getElementById(teamStub + "-the-total-score").innerHTML = score;
  document.getElementById(teamStub + "-the-killcount").innerHTML = killCount;
  document.getElementById(teamStub + "-the-revivecount").innerHTML = revCount;
}

function updatePlayerWithKillAndRev(playaStub, killCount, revCount) {
  console.log(playaStub + "kills = " + killCount);
  document.getElementById(playaStub + "kills").innerHTML = killCount;
  document.getElementById(playaStub + "revs").innerHTML = revCount;
}

function addKill(playerStub) {
  let team = "blue";
  if (playerStub == "p1" || playerStub == "p2") {
    team = "red";
  }
  db.collection("/streamscore/25062020/scoretally")
    .add({
      team: team,
      player: playerStub,
      value: 10,
      count: 1,
      reason: "kill",
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}

function addRevive(playerStub) {
  let team = "blue";
  if (playerStub == "p1" || playerStub == "p2") {
    team = "red";
  }
  db.collection("/streamscore/25062020/scoretally")
    .add({
      team: team,
      player: playerStub,
      value: 50,
      count: 1,
      reason: "revive",
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}

function addSurvive(playerStub) {
  let team = "blue";
  if (playerStub == "p1" || playerStub == "p2") {
    team = "red";
  }
  db.collection("/streamscore/25062020/scoretally")
    .add({
      team: team,
      player: playerStub,
      value: 150,
      count: 1,
      reason: "survive",
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}

function addPoll(playerStub) {
  let team = "blue";
  if (playerStub == "p1" || playerStub == "p2") {
    team = "red";
  }
  db.collection("/streamscore/25062020/scoretally")
    .add({
      team: team,
      player: playerStub,
      value: 75,
      count: 1,
      reason: "poll",
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}