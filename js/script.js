//vanilla JS
const spanEr = document.createElement('p');
const firstMenu = document.getElementsByTagName('span')[1];
firstMenu.appendChild(spanEr);
firstMenu.classList.add("nameErr", "errorMessage");
firstMenu.innerHTML = "field cannot be blank";

const secondMenu = document.getElementsByTagName('span')[2];
secondMenu.appendChild(spanEr);
secondMenu.classList.add("mailErr", "errorMessage");
secondMenu.innerHTML = "enter a valid Email address";

const thirdMenu = document.getElementsByTagName('span')[10];
thirdMenu.appendChild(spanEr);
thirdMenu.classList.add("act", "errorMessage");
thirdMenu.innerHTML = "please select at least one activity";

const fourthMenu = document.getElementsByTagName('span')[11];
fourthMenu.appendChild(spanEr);
fourthMenu.classList.add("ccnum", "errorMessage" ,"clearfix::after");
fourthMenu.innerHTML = "Please enter a valid credit card number";

const fifthMenu = document.getElementsByTagName('span')[12];
fifthMenu.appendChild(spanEr);
fifthMenu.classList.add("zip", "errorMessage");
fifthMenu.innerHTML = "Please enter a valid 5 digit zip code";

const sixthMenu = document.getElementsByTagName('span')[13];
sixthMenu.appendChild(spanEr);
sixthMenu.classList.add("cvv", "errorMessage");
sixthMenu.innerHTML = "Please enter a 3 digit CVV number";


//this sets a focus on the first text field
$(document).ready(function() {



    $( "#name" ).focus();
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



  //hides the color options by default
   $('#colors-js-puns').hide();
   $('#colors-js-puns option[value="cornflowerblue"]').hide();
   $('#colors-js-puns option[value="darkslategrey"]').hide();
   $('#colors-js-puns option[value="gold"]').hide();
   $('#colors-js-puns option[value="tomato"]').hide();
   $('#colors-js-puns option[value="steelblue"]').hide();
   $('#colors-js-puns option[value="dimgrey"]').hide();





//using the Change method to change the T Shirt selection dropdown menu
 $('#design').on('change', function(e){

    let select = $(this).val();
//hides heart options and shows puns
   if (select === 'js puns') {

   $('#colors-js-puns').show();
   $('#colors-js-puns option[value="cornflowerblue"]').show().attr('selected','selected');
   $('#colors-js-puns option[value="darkslategrey"]').show();
   $('#colors-js-puns option[value="gold"]').show();

   $('#colors-js-puns option[value="tomato"]').hide().removeAttr("selected");
   $('#colors-js-puns option[value="steelblue"]').hide();
   $('#colors-js-puns option[value="dimgrey"]').hide();


   }
//hides pun options and shows heart colors
else if (select === 'heart js') {
    $('#colors-js-puns').show();

    $('#colors-js-puns option[value="tomato"]').show().attr('selected','selected');
    $('#colors-js-puns option[value="steelblue"]').show();
    $('#colors-js-puns option[value="dimgrey"]').show();

    $('#colors-js-puns option[value="cornflowerblue"]').hide().removeAttr("selected");
   $('#colors-js-puns option[value="darkslategrey"]').hide();
   $('#colors-js-puns option[value="gold"]').hide();

}
//hides the options if neither are picked
  else
  {
    $('#colors-js-puns').hide();
    $('#colors-js-puns option[value="tomato"]').hide();
    $('#colors-js-puns option[value="steelblue"]').hide();
    $('#colors-js-puns option[value="dimgrey"]').hide();

    $('#colors-js-puns option[value="cornflowerblue"]').hide();
   $('#colors-js-puns option[value="darkslategrey"]').hide();
   $('#colors-js-puns option[value="gold"]').hide();

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

//hides the "select payment" option. When JS is turn off, it will show up
$("option[value='select_method']").remove();



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
            nameErr.fadeOut().hide(1000);
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
