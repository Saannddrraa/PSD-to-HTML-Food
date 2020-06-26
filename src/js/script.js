$(document).ready(function () {
    // Search box
    $(".icon").on("click", function() {
        $(".header__item").toggleClass('active');
        $("input[type='text']").toggleClass('active'); 
    });
    
    // Slick Slider
    $('.slider').slick({
        arrows: true,
        dots: false,
        autoplay: false,
        autoplaySpeed: 2000
    });

    //TABS
    // Show the first tab by default
    $('.tab').hide();
    $('.tab:first').show();
    $('.tabs-nav__item:first').addClass('tab-active');

    // Change tab class and display content
    $('.tabs-nav__link').on('click', function (event) {
        event.preventDefault();
        $('.tabs-nav__item').removeClass('tab-active');
        $(this).parent().addClass('tab-active');
        $('.tab').hide();
        $($(this).attr('href')).show();
    });
});
