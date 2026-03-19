$(document).ready(function() {

    $('#mobile_btn').on('click', function() {
        $('#mobile').toggleClass('active');
         $('#mobile_btn').find('i').toggleClass('fa-x');
    })
})
