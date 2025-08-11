$(document).ready(function () {
    $('#carrocel').slick({
        autoplay:true
    })

    $('.hamburgerMenu').click(function(){
        $('nav').slideToggle();
    })
});