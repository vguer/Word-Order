$(document).ready(function() {
  $("#form").submit(function() {
  event.preventDefault();

  const userInput = $("#input").val();
  const splitUserInput = userInput.toLowerCase().split(" ");
  const output = [];
  let duplicateList = [];

  splitUserInput.forEach(function(words) {
    output.push("<li>" + words + "</li>");
    })
  
  function wordCounter() {
    count = 0;
    for (let i=0; i < output.length; i++) {
      if (output[i] === output) {
      } count ++;
      duplicateList.push(count);
    }}
    
  
  $('#results').html(duplicateList);
  });
});
