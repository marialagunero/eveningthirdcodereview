//business logic
var saying = function(number) {

  if (number === 1) {
    if (number.toString())
  }
}


//user interface logic
$(document).ready(function() {
  $("form#numberInput").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("#numberInput")).val();
    var result = saying(number);

    $("#result").show();


  });

});
