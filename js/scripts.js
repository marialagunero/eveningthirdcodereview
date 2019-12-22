//business logic
var saying = function


//user interface logic
$(document).ready(function() {
  $("form#numberInput").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("#numberInput")).val();
    var result = saying(number);

    $("#result").show();


  });

});
