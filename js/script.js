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




//These variables grey out an activity when a user selects one that conflicts with other
var $act1 = $('.activities').find('input[value="2"]').click(function() {
  $act2.prop('disabled', $act1.is(':checked'));
  $("#chk4").toggleClass("grey");
});
var $act2 =  $('.activities').find('input[value="4"]').click(function() {
  $act1.prop('disabled', $act2.is(':checked'));
  $("#chk2").toggleClass("grey");
});
var $act4 = $('.activities').find('input[value="3"]').click(function() {
  $act5.prop('disabled', $act4.is(':checked'));
  $("#chk5").toggleClass("grey");
});
var $act5 =  $('.activities').find('input[value="5"]').click(function() {
  $act4.prop('disabled', $act5.is(':checked'));
  $("#chk3").toggleClass("grey");
});


//This function updates the total cost of the event when the user checks the boxes
$('.box').change(function(){
   var total = 0;
   $('.box:checked').each(function(){
        total+=parseFloat($(this).closest('label').find('.amount').text());
   });
   $('#total').text(total);
});

//makes the credit card option default
$('#paypal').hide();
$('#bitcoin').hide();
$('#payment').change(function(){
        if ($(this).val() !== "select_method")
         {
            $('#remov').hide();
        }
    });


$('#payment').change(function(){
        $('.credit-card').hide();
       $('#' + $(this).val()).show();
     });



//this is the validation
/*$("form").submit(function (e) {
      $('.validate', this).each(function () {
          if ($(this).val() == "") {

                e.preventDefault();

                $(this).next('.validation').show();
            } else {
                $(this).next('.validation').hide();
            }
      });
    });*/
const namePat = /^[a-z]+[\s]?[a-z]+$/i;
const nameErr = $(".nameflsh ").hide();

const emailPat = /^[^@]+@[^@.]+\.[a-z]+$/i;
const mailErr = $(".mailflsh ").hide();

const actErr = $(".act ").hide();

const ccPat = /^\d{13,16}$/;
const ccErr = $(".ccnum ").hide();

const zipPat = /^\d{5}$/;
const zipErr = $(".zip ").hide();

const cvvPat = /^\d{3}$/;
const cvvErr = $(".cvv ").hide();










});
