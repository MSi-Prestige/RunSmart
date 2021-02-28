"use sctrict";

$(document).ready(function () {
    $('.carousel__inner').slick({

        speed: 1000,
        adaptiveHeight: true,

        // autoplay: true,
        // autoplaySpeed: 5000,
        // adaptiveHeight: true,
        variableWidth: true,
        // fade: true,
        // cssEase: "linear",
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/leftArr.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/rightArr.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {

                    arrows: false,

                }
            }
        ],
    });
});
