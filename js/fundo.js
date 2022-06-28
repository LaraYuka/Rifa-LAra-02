$(document).ready(function() {

    $('.escuro').click(function(e) {
        e.preventDefault()

        $('.navbar').removeClass('bg-dark')
        $('.navbar').addClass('bg-white')

        $('.nav-link').removeClass('text-white')
        $('.nav-link').addClass('text-dark')

        $('body').removeClass('bg-white')
        $('body').addClass('bg-dark')

        $('.btn-menu').removeClass('bg-white')
        $('.btn-menu').addClass('bg-dark')

    })

    $('.claro').click(function(e) {
        e.preventDefault()


        $('.navbar').removeClass('bg-white')
        $('.navbar').addClass('bg-dark')

        $('.nav-link').removeClass('text-dark')
        $('.nav-link').addClass('text-white')

        $('body').removeClass('bg-dark')
        $('body').addClass('bg-white')

        $('.btn-menu').removeClass('bg-dark')
        $('.btn-menu').addClass('bg-white')
    })


})