//this sets a focus on the first text field
$(document).ready(function() {
    $('form:first *:input[type!=hidden]:first').focus();
    $('#other-title').hide();//job role field is not shown by default

  //shows the job role field when other is selected
  $("#show").click(function()
  {
    $('#other-title').show();
  });
  //hides job role field when other is deselected
  $(".hid").click(function()
  {
    $('#other-title').hide();
  });


});
