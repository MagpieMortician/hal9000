(document).ready(function(){
  (".form").submit(function(event){
    event.preventDefault();
    var userInput = $("#numberInput").val();
  });
});
