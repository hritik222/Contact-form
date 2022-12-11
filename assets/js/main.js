$(document).ready(function () {
    // $('#fname,#lname,#email,#phone,#massage').focus(function () {
    //     $(this).css('border-bottom', '1px solid #000');
    // });

    // Blur
    $('#fname,#lname,#email,#phone,#massage').blur(function () {
        $(this).css('border-bottom', '');
    });
    

    // For Phone 

    $(window).resize(function() {
        if ($(window).width() < 600) {

            $('#fname,#lname,#email,#phone,#massage').focus(function () {
                $(this).css('border-bottom', '1px solid #fff');
            });
        }
       else {
        $('#fname,#lname,#email,#phone,#massage').focus(function () {
            $(this).css('border-bottom', '1px solid #000');
        });
       }
      });
    
    
});


