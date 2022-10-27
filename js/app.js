$(document).ready(function () {
  let crystalValueObj = getCrystalValue();
  let sum = 0;
  let tarScore = getTarScr();
  let lossesCount = 0;
  let winsCount = 0;

  $("#startBtn").click(() => {
    $(".modal").remove();
  });

  $("#purpleCrystals").click(function () {
    sum += crystalValueObj["purple"]["value"];
    $("#currentScore").html(sum);
    checkGameOver(sum, tarScore);
  });
  $("#greenCrystals").click(function () {
    sum += crystalValueObj["green"]["value"];
    $("#currentScore").html(sum);
    checkGameOver(sum, tarScore);
  });
  $("#redCrystals").click(function () {
    sum += crystalValueObj["red"]["value"];
    $("#currentScore").html(sum);
    checkGameOver(sum, tarScore);
  });
  $("#blueCrystals").click(function () {
    sum += crystalValueObj["blue"]["value"];
    $("#currentScore").html(sum);
    checkGameOver(sum, tarScore);
  });

  function getTarScr() {
    const tarScr = Math.round(Math.random() * 102) + 19;
    $("#targetScore").html(tarScr);
    return tarScr;
  }

  function getCrystalValue() {
    return {
      purple: {
        value: Math.round(Math.random() * 15) + 1,
      },
      green: {
        value: Math.round(Math.random() * 12) + 1,
      },
      red: {
        value: Math.round(Math.random() * 8) + 1,
      },
      blue: {
        value: Math.round(Math.random() * 5) + 1,
      },
    };
  }

  function setupGame() {
    sum = 0;
    $("#currentScore").html(sum);
    tarScore = getTarScr();
    crystalValueObj = getCrystalValue();
  }

  function checkGameOver(currScr, tarScr) {
    if (currScr > tarScr) {
      lossesCount++;
      $("#losses").html(lossesCount);
      setupGame();
    } else if (currScr == tarScr) {
      winsCount++;
      $("#wins").html(winsCount);
      setupGame();
    }
  }
});
