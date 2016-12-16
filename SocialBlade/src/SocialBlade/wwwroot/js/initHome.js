$('.burger').click(function () {
    $('.burger-container').toggleClass('open');
    $('.menu').toggleClass('show');
});

$('.like-btn').click(function () {
    $(this).toggleClass('liked');
});

//Scroll thing
var mywindow = $(window);
var mypos = mywindow.scrollTop();
mywindow.scroll(function () {
    if (mywindow.scrollTop() > mypos) {
        $('.menuSmall').removeClass('nav-down');
    }
    else {
        $('.menuSmall').addClass('nav-down');
    }
    mypos = mywindow.scrollTop();
});