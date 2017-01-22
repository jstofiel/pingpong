$(function() {
  $('form#form1').submit(function(event) {
    event.preventDefault();
    parseInt($('input#input-user').val());
    var userInput = $("input#input-user").val();
    divisible(userInput);
  });
});

// UI above^^

// Logic below
function divisible(userInput) {
    if( userInput % 3 == 0 ) {
        alert("ping");
    }
    if( userInput % 5 == 0 ) {
        alert("pong");
    }
    if( userInput % 15 == 0 ) {
        alert("ping-pong");
    }
  }
