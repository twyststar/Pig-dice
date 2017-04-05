//Business Logic
function Player(name, roll, score) {
  this.name = name;
  this.roll = roll;
  this.score = score;
}






//UI Logic
$(document).ready(function(){
  $("#playerOne").submit(function(event){
    event.preventDefault();

    var pOneInput = $("#playerOne-name").val();
    var onePlayer = new Player(pOneInput, 0, 0);
    console.log(onePlayer);
  });

  $("#playerTwo").submit(function(event){
    event.preventDefault();

    var pTwoInput = $("#playerTwo-name").val();
    var twoPlayer = new Player(pTwoInput, 0, 0);
    console.log(twoPlayer);
  });


});
