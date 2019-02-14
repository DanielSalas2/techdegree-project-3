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




const namePat = /^[a-z]+[\s]?[a-z]+$/i;
const nameErr = $(".nameErr").hide();

const mailPat = /^[^@]+@[^@.]+\.[a-z]+$/i;
const mailErr = $(".mailErr").hide();

const actErr = $(".act").hide();

const ccPat = /^\d{13,16}$/;
const ccErr = $(".ccnum").hide();

const zipPat = /^\d{5}$/;
const zipErr = $(".zip").hide();

const cvvPat = /^\d{3}$/;
const cvvErr = $(".cvv").hide();

$('form').on('submit', function() {


        let namePut = $('#name').val();
        let mailPut = $('#mail').val();
        let chkBox = (!$("input:checkbox").is(":checked"));
        let ccPut = $('#cc-num').val();
        let zipPut = $('#zip').val();
        let cvvPut = $('#cvv').val();
        let payInfo = $('#payment').val();
        let errors = false;


        if (!namePat.test(namePut) ) {
            $("#name").css("border-color", "#ff0048");
            nameErr.fadeIn().show(1000);
            }
        else if (namePat.test(namePut) ) {
            $("#name").css("border-color", "#770202");
            nameErr.fadeOut().show(1000);
            }


        if (!mailPat.test(mailPut) ) {
            $("#mail").css("border-color", "#ff0048");
            mailErr.fadeIn().show(1000);
            }
        else if (mailPat.test(mailPut) ) {
            $("#mail").css("border-color", "#770202");
            mailErr.fadeOut().hide(1000);
            }


        if (chkBox == true) {
            $("input.submit-btn").prop("disabled", true);
            actErr.fadeIn().show(1000);
        } else {
            $("input.submit-btn").prop("disabled", true);
            actErr.fadeOut().hide(1000);
            }


        if (!ccPat.test(ccPut) ) {
            $("#cc-num").css("border-color", "#ff0048");
            $(".col-3").css("margin-bottom", "82px");
            $("#fits").css("margin-right", "88px");
            ccErr.fadeIn().show(1000);
            }
        else if (ccPat.test(ccPut) ) {
            $("#cc-num").css("border-color", "#770202");
            $(".col-3").css("margin-bottom", "1em");
            ccErr.fadeOut().hide(1000);
          }


        if (!zipPat.test(zipPut) ) {
            $("#zip").css("border-color", "#ff0048");
            $("#fits").css("margin-right", "88px");
            zipErr.fadeIn().show(1000);
            }
        else if (zipPat.test(zipPut) ) {
            $("#zip").css("border-color", "#770202");
            $("#fits").css("margin-right", "88px");
            zipErr.fadeOut().hide(1000);
            }

        if (!cvvPat.test(cvvPut) ) {
            $("#cvv").css("border-color", "#ff0048");
            $(".col-3").css("margin-bottom", "1em");
            cvvErr.fadeIn().show(1000);
            }
        else if (cvvPat.test(cvvPut) ) {
            $("#cvv").css("border-color", "#770202");
            $(".col-3").css("margin-bottom", "1em");
            cvvErr.fadeOut().hide(1000);
            }


        if (namePut == '' ||  !namePat.test(namePut)) {
            errors = true;
        }
        if (mailPut == '' ||  !mailPat.test(mailPut)) {
            errors = true;
        }
        if (chkBox == true) {
            errors = true;
        }
        if (payInfo == 'credit card') {
            if (ccPut == '' ||  !ccPat.test(ccPut)) {
                errors = true;
            }
            if (zipPut == '' ||  !zipPat.test(zipPut)) {
                errors = true;
            }
            if (cvvPut == '' ||  !cvvPat.test(cvvPut)) {
                errors = true;
            }
        }
        if (errors == true) {

            return false;
        } else {
            return true;
        }
});








});
