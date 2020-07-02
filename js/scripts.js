$(document).ready(function() {
  $("#form").submit(function() {
  event.preventDefault();

  const userInput = $("#input").val();
  const splitUserInput = userInput.split(" ");
  const output = [];

  splitUserInput.forEach(function(words) {
  output.push(words);
  })
  $('#results').text(output);
});
});