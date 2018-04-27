$(document).ready(function() {
  $(".nav1").click(function() {
    $(".sidebar").slideToggle();
  });
  $("form").submit(function(event) {
    var emailInput = $("input#meli").val();
    $(".meli").append(emailInput);
    $("#gratzi").show();

    event.preventDefault();
  });
});
