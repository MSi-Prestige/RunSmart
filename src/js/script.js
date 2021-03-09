"use sctrict";
//TODO:  JQUERY  $()
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
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content')
            .removeClass('catalog__content_active').eq($(this).index())
            .addClass('catalog__content_active');
    });

    // $(".catalog-item__link").each(function (i) {
    //     $(this).on("click", function (e) {
    //         e.preventDefault();
    //         $(".catalog-item__content").eq(i).toggleClass("catalog-item__content_active");
    //         $(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
    //     });
    // });
    // $(".catalog-item__back").each(function (i) {
    //     $(this).on("click", function (e) {
    //         e.preventDefault();
    //         $(".catalog-item__content").eq(i).toggleClass("catalog-item__content_active");
    //         $(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
    //     });
    // });
    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on("click", function (e) {
                e.preventDefault();
                $(".catalog-item__content").eq(i).toggleClass("catalog-item__content_active");
                $(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
                //console.log(i);
            });
        });
    }
    toggleSlide(".catalog-item__back");
    toggleSlide(".catalog-item__link");

    //MODAL WIN

    $("[data-modal=consultation]").on("click", function () {
        $(".overlay, #consultation").fadeIn('slow');
    });
    //CLOSE MODAL
    $(".modal__close").on("click", function () {
        //! тут все крестики модальных окон. close on click
        //! Methods Qjery - in documentation site http://jquery.page2page.ru/index.php5/%D0%A4%D0%BE%D1%80%D0%BC%D1%8B
        $(".overlay, #consultation, #thanks, #order").fadeOut("slow");
    });

    //TODO: следим за всеми кнопками с классом .modal_mini
    // $(".button_mini").on("click", function () {
    //     $(".overlay, #order").fadeIn("slow");
    // });
    //TODO: подсавка заказа --- product name имя часов.
    $(".button_mini").each(function (i) {
        $(this).on("click", function () {
            //! С ПРАВА НА ЛЕВО  - и text в modal__descr
            $("#order .modal__descr").text($(".catalog-item__subtitle").eq(i).text());
            $(".overlay, #order").fadeIn("slow");
        });
    });

    //! Validate FORMS JQERY -------------------------------------------

    function valideForms(form) {
        $(form).validate(
            {
                rules: {
                    name: {
                        required: true,
                        minlength: 4
                    },
                    phone: "required",
                    email: {
                        required: true,
                        email: true,
                    }
                },
                messages: {
                    name: {
                        required: "Пожалуйста, введите свое имя",
                        minlength: jQuery.validator.format("Введите {0} символа!")
                    },
                    phone: "Пожалуйста, введите свой номер телефона",
                    email: {
                        required: "Пожалуйста, введите свою почту",
                        email: "Неправильно введен адрес почты"
                    }
                }
            }
        );

    }
    valideForms("#consultation-form");
    valideForms("#order form");
    valideForms("#consultation form");

    $("input[name=phone]").mask("+(371) 99999999");

    //PHP //! Передает в фаил PHP структурир форму. 1 делом 
    $("form").submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $("#consultation, #order").fadeOut();
            $(".overlay, #thanks").fadeIn("slow");
            $("form").trigger("reset");
        });
        return false;
    });


    //TODO: Scrool UP
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $(".pageup").fadeIn();
        } else {
            $(".pageup").fadeOut();
        }
    });

    //slow scrool 
    // и переключения табов
    $("a[href=#up]").click(function () {
        const _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });
    //! Врубаем wow плагин.
    new WOW().init();
});

