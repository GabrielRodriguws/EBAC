$(document).ready(function () {
    $('#carrocel').slick({
        autoplay:true
    })

    $('.hamburgerMenu').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000',{
        placeholder: '(00) 00000-0000'
    });

    $('.listaVeiculos button').click(function () { 
        const destino = $('#contato');
        $('html').animate({
            scrollTop: destino.offset().top
        },1000)
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            }
        }
    })
});