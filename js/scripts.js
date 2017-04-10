//Business Logic
function Player(name, roll, score) {
  this.name = name;
  this.roll = roll;
  this.score = score;
}
var circuitPlaying = false;


Player.prototype.rolling = function() {
 var playerRoll = Math.floor((Math.random() * 6) + 1);
 $(".currentRoll").text(playerRoll);
    if (playerRoll === 1) {
      alert("You got a '1'! Next Player!");
      if(circuitPlaying === true){
        compPlayer.compRolling();
        return this.roll = 0;
      } else {
          return this.roll = 0;
      }

    } else {
      this.roll = (this.roll + playerRoll);
      return this.roll;
    }
}

Player.prototype.holding = function() {
  this.score = (this.roll + this.score);
  this.roll = 0;
  if(this.score >= 40){
    confirm("Congratulations! ");
    location.reload();
    return this.score;
  }else if (circuitPlaying === true){
    compPlayer.compRolling();
    return this.score;
  } else {
    return this.score;
  }

}


Player.prototype.compRolling = function() {
 var playerRoll = Math.floor((Math.random() * 6) + 1);
 $(".currentRoll").text(playerRoll);
    if (playerRoll === 1) {
      alert("Circuit got a '1'! Your Turn " + onePlayer.name + "!");
      this.roll = 0;
      this.score = this.score + this.roll;
      $(".compscore").text(this.score);
      $(".comproll").text("");
      $(".p2score").text(this.score);
      // $("#p1button").prop("disabled", false);
      // $(".p1hold").prop("disabled", false);
      return this.score;
    } else if(playerRoll >1 && this.roll < 7) {
      this.roll = (this.roll + playerRoll);
      $("comproll").text(this.roll);
      compPlayer.compRolling();
    }else {
       this.score = this.roll + this.roll;
       alert("Circuit holds! Your turn " + onePlayer.name + "!");
       $(".compscore").text(this.score);
       $(".p2score").text(this.score);
          if (this.score > 40){
            alert("Circuit wins! Try again!")
          }
       return this.score;
}
}
// var toggleBtn = function(){
//   if($("#p2button").prop("Disabled", true)){
//     ($("#p2button").prop("Disabled", false));
//   }
//   if ($("button").prop("Disabled", false)){
//     ($("button").prop("Disabled", true));
//   }
// }



//UI Logic
$(document).ready(function(){
  $("#playerOne").submit(function(event){
    event.preventDefault();

    var pOneInput = $("#playerOne-name").val();
    onePlayer = new Player(pOneInput, 0, 0);
    $(".playerOneName").text(onePlayer.name);
    $(".playOneDiv").hide();
    // $("#p2button").prop("disabled", true);
    // $(".p2hold").prop("disabled", true);
  });

  $("#playerTwo").submit(function(event){
    event.preventDefault();

    var pTwoInput = $("#playerTwo-name").val();
    twoPlayer = new Player(pTwoInput, 0, 0);
    $(".playerTwoName").text(twoPlayer.name);
    $(".playTwoDiv").hide();

  });

  $("#p1button").click(function(event){
    event.preventDefault();

    var oneRoll = onePlayer.rolling();
    $(".p1roll").text(oneRoll);

  });
  $("#p2button").click(function(event){
    event.preventDefault();

    var twoRoll = twoPlayer.rolling();
    $(".p2roll").text(twoRoll);

  });


  $(".p1hold").click(function(event){
    event.preventDefault();

    var oneScore = onePlayer.holding();
    $(".p1score").text(oneScore);
    $(".p1roll").text("");

    // $("#p2button").prop("disabled", false);
    // $(".p2hold").prop("disabled", false);
  });

  $(".p2hold").click(function(event){
    event.preventDefault();

    var twoScore = twoPlayer.holding();
    $(".p2score").text(twoScore);
    $(".p2roll").text("");
    // $("#p2button").prop("disabled", true);
    // $(".p2hold").prop("disabled", true);
    // $("#p1button").prop("disabled", false);
    // $(".p1hold").prop("disabled", false);
  });

  $("#singlePlayer").click(function(event){
    event.preventDefault();
    $(".compScore").show();
    $("#playerTwo").hide();
    compPlayer = new Player("Circuit", 0, 0);
    $(".playerTwoName").text("Circuit");
    circuitPlaying = true;
    console.log(compPlayer);
  })

});
