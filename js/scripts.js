//Business Logic
function Player(name, roll, score) {
  this.name = name;
  this.roll = roll;
  this.score = score;
}

Player.prototype.rolling = function() {
 var playerRoll = Math.floor((Math.random() * 6) + 1);
 console.log(playerRoll);
    if (playerRoll === 1) {
      return this.roll = 0;
    }else {
      this.roll = (this.roll + playerRoll);
      return this.roll;
    }
}




//UI Logic
$(document).ready(function(){
  $("#playerOne").submit(function(event){
    event.preventDefault();

    var pOneInput = $("#playerOne-name").val();
    onePlayer = new Player(pOneInput, 0, 0);
    $(".playerOneName").text(onePlayer.name);
    console.log(onePlayer);
  });

  $("#playerTwo").submit(function(event){
    event.preventDefault();

    var pTwoInput = $("#playerTwo-name").val();
    twoPlayer = new Player(pTwoInput, 0, 0);
    $(".playerTwoName").text(twoPlayer.name);
    console.log(twoPlayer);
  });
  $("#p2button").click(function(event){
    event.preventDefault();
    var twoScore = twoPlayer.rolling();
    $(".p2score").text(twoScore);
    console.log(twoScore);
  });
  $("#p1button").click(function(event){
    event.preventDefault();
    var oneScore = onePlayer.rolling();
    $(".p1score").text(oneScore);
    console.log(oneScore);
  });


});
