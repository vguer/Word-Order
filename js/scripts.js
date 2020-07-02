$(document).ready(function() {
  $("#form").submit(function() {
  event.preventDefault();

  const userInput = $("#input").val();
  const splitUserInput = userInput.toLowerCase().split(" ");
  const output = [];

  for (i=0; i < splitUserInput.length; i++) {
    output.push(i);
    output[i] = finalArray(index);

  }
  function finalArray(index) {
    
  }

  splitUserInput.forEach(function(words) {
  output.push("<li>" + words + "</li>");
  })

  
  $('#results').html(output);
});
});