//= ../../bower_components/jquery/dist/jquery.js

$('.burger__img').on('click', function(){
    $('.contacts__side-bar').addClass('contacts__hide');
    let sideBar = $('.contacts__side-bar');
    sideBar.stop();
    if (sideBar.is(':visible')) {
        sideBar.animate({width: 50}, 1000, function(){
            $(this).hide();
        });
    }
});