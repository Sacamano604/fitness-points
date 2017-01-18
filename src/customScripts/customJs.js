// Materialize Initializations
$( document ).ready(function() {
    // Date Picker Initialization
    $('.datepicker').pickadate({
        selectMonths: true, 
        selectYears: 15
    });
    // Select dropdown Initialization
    $('select').material_select();
});