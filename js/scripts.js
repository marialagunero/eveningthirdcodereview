//business logic
var saying = function(number) {

  if (number !== 0) {
    if (number.toString().match(/1/))
    alert ("Beep!");
  } if (number.toString().match(/2/))
  alert ("Boop!");
else {
  alert ("I'm sorry, Dave. I'm afraid I can't do that.")
};
};





//user interface logic
$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();

    var number = $("#numberInput").val();
    var result = saying(number);


    $("#result").show();



  });

});
