//business logic
/*var saying = function(number) {

  if (number === 1) {
    alert("Beep!");
  } else {
    alert ("Boop!");
  }
};*/



//user interface logic
$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();

    var number = $("#numberInput").val();
    //var result = saying(number);

    $("#result").show();
    console.log(number);


  });

});
