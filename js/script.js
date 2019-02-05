//this sets a focus on the first text field
$(document).ready(function() {
    $('form:first *:input[type!=hidden]:first').focus();
});
