//Business Logic
function Player(name, roll, score) {
  this.name = name;
  this.roll = roll;
  this.score = score;
}

Player.prototype.rolling = function() {
 var playerRoll = Math.floor((Math.random() * 6) + 1);
 $(".currentRoll").text(playerRoll);
    if (playerRoll === 1) {
      alert("You got a '1'! Next Player!");
      return this.roll = 0;
    } else {
      this.roll = (this.roll + playerRoll);
      return this.roll;
    }
}

Player.prototype.holding = function() {

  this.score = (this.roll + this.score);
  this.roll = 0;
  if(this.score >= 100){
    confirm("Congratulations! ");
    if (true) {
      location.reload();
    }
  }
  return this.score;

}




//UI Logic
$(document).ready(function(){
  $("#playerOne").submit(function(event){
    event.preventDefault();

    var pOneInput = $("#playerOne-name").val();
    onePlayer = new Player(pOneInput, 0, 0);
    $(".playerOneName").text(onePlayer.name);
    $(".playOneDiv").hide();
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

  });
  $(".p2hold").click(function(event){
    event.preventDefault();

    var twoScore = twoPlayer.holding();
    $(".p2score").text(twoScore);
    $(".p2roll").text("");
  });

});
