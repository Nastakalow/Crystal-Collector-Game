$(document).ready(function () {
  let crystalValueObj = getCrystalValue();
  let sum = 0;

  function getCrystalValue() {
    return {
      purple: {
        value: Math.round(Math.random() * 12) + 1,
      },
      green: {
        value: Math.round(Math.random() * 12) + 1,
      },
      red: {
        value: Math.round(Math.random() * 12) + 1,
      },
      blue: {
        value: Math.round(Math.random() * 12) + 1,
      },
    };
  }

  $("#purpleCrystals").click(function () {
    sum += crystalValueObj["purple"]["value"];
    $("#currentScore").html(sum);
  });
  $("#greenCrystals").click(function () {
    sum += crystalValueObj["green"]["value"];
    $("#currentScore").html(sum);
  });
  $("#redCrystals").click(function () {
    sum += crystalValueObj["red"]["value"];
    $("#currentScore").html(sum);
  });
  $("#blueCrystals").click(function () {
    sum += crystalValueObj["blue"]["value"];
    $("#currentScore").html(sum);
  });

  $("#targetScore").html(Math.round(Math.random() * 102) + 19);
});
