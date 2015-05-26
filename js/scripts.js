var factorial = function(number) {

//recursive solution
var sum = 1
  if (number > 0) {
    sum = number * factorial(number-1);
  }
return sum;

 // non recursive solution
  // var sum = 1
  // for (var number;number > 0;number--) {
  //   sum = sum * number
  // }
  // return sum;
};

$(document).ready(function() {
  $("form#factorial").submit(function(event) {
    var number = parseInt($("input#number").val());
    var result = factorial(number)

      $(".result").text(result);

      $("#result").show();


    event.preventDefault();

  });
});
