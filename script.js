$(document).ready(function () {

    var stickyNavTop = $('.nav').offset().top;

    var stickyNav = function () {
        var scrollTop = $(window).scrollTop(); 


        if (scrollTop > stickyNavTop) {
            $('.nav').addClass('sticky');
        } else {
            $('.nav').removeClass('sticky');
        }
    };

    stickyNav();

    $(window).scroll(function () {
        stickyNav();
    });
});


$(".scroll").on("click", function (event) {
    event.preventDefault();
    $('html,body').animate({
        scrollTop: $(this.hash).offset().top - 130
    });
});

$('#navbarSupportedContent .nav-item .nav-link').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});



let counter = document.querySelectorAll(".counter");
let arr = Array.from(counter);

arr.map((item) => {
    let count = item.innerHTML;
    item.innerHTML = 0;
    let counterValue = 10;

    function counterUP() {
        item.innerHTML = counterValue++;

        if (counterValue > count) {
            clearInterval(counting);
        }
    }

    let counting = setInterval(() => {
        counterUP();
    }, item.dataset.speed / count);
});


  AOS.init();
