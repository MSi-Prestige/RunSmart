"use sctrict";

$(document).ready(function () {
    $('.carousel__inner').slick({
        // dots: true,
        speed: 1000,
        // adaptiveHeight: true,
        // fade: true,
        // cssEase: "linear",
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/leftArr.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/rightArr.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ],
    });
});
