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

  //using the Change method to change the T Shirt selection dropdown menu
  $('#design').on('change', function (){
    let selectedValue = $(this).val();
    //hides heart options and shows puns
    if (selectedValue === 'js puns')
    {
      $('.hidePun').show();
      $('.hideHeart').hide();
    }
    //hides pun options and shows heart colors
    else if(selectedValue === 'heart js')
    {
      $('.hideHeart').show();
      $('.hidePun').hide();
    }
  });



});
