function callMe() {
  var lyric = "maybe";
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  return lyric;
}

function crazy() {
  thisIsCrazy();

  var thisIsCrazy = function () {
    console.log("hey!!!")
  }
}

function sayMyName() {
  var name = "Cricky";

  sayMy();

  function sayMy() {
    console.log(name);
    var name = "Kristin";
  }
}
