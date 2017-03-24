$('.menu-item').click(function () {
    $('.menu-item').removeClass('active');
    $(this).addClass('active');
    $('.js-content').hide();
    $('.js-' + $(this).attr('data-content')).show();

    console.log(9);
});