$(document).ready(function() {
  $("#form").submit(function() {
  event.preventDefault();

  const userInput = $("#input").val();
  //const splitUserInput = userInput.split(" ");
  //const output = [];

 // userInput.forEach(function(words) {
   // output.push(words);
  //})
  $('#results').text(userInput);
});
});