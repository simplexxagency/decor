'use strict';

$(document).ready(function () {



    // Header scroll
    let $header = $('.header');

    $(window).scroll(function () {
        let top = $(this).scrollTop();

        $header.toggleClass('active', top > $header.height());

    });

    // Change city in section Header
    let $cityTooltip = $('.header__right-citytooltip');

    $('.header__right-acccity').on('click', function () {
        $cityTooltip.addClass('active');
    });

    $('.header__tooltip-item a, .header__tooltip-close').on('click', function () {
        $cityTooltip.removeClass('active');
    });

    // Click on blocks
    $(document).mouseup(function (e) { // событие клика по веб-документу
        if (!$cityTooltip.is(e.target) // если клик был не по нашему блоку
            && $cityTooltip.has(e.target).length === 0) { // и не по его дочерним элементам
            $cityTooltip.removeClass('active'); // скрываем его
        };
    });

    // Tabs in Popup
    $('.js-tab-trigger').click(function () {
        var id = $(this).attr('data-tab'),
            content = $('.js-tab-content[data-tab="' + id + '"]');

        $('.js-tab-trigger.active').removeClass('active');
        $(this).addClass('active');

        $('.js-tab-content.active').removeClass('active');
        content.addClass('active');
    });

    // Popup Enter 
    $('.header__right-enter a').on('click', function () {
        $('.popup__enter').removeClass('passive');
        $('body, html').addClass('active');
        $('.js-trigger-enter').addClass('active');
        $('.js-trigger-reg').removeClass('active');
        $('.js-enter-enter').addClass('active');
        $('.js-enter-reg').removeClass('active');
    });

    $('.header__right-reg a').on('click', function () {
        $('.popup__enter').removeClass('passive');
        $('body, html').addClass('active');
        $('.js-trigger-enter').removeClass('active');
        $('.js-trigger-reg').addClass('active');
        $('.js-enter-enter').removeClass('active');
        $('.js-enter-reg').addClass('active');
    });

    $('.popup__close, .popup__shadow').on('click', function () {
        $('.popup').addClass('passive');
        $('body, html').removeClass('active');
    });

    // Popup Forgot
    $('.popup__enter-forgot a').on('click', function () {
        $('.popup__enter-box').removeClass('active');
        $('.popup__forgot-pass').addClass('active');
    });


    $('.popup__reg-forgot a').on('click', function () {
        $('.popup__enter-box').removeClass('active');
        $('.popup__forgot-pass').addClass('active');
        $('.js-tab-trigger').toggleClass('active');
        $('.js-tab-content').toggleClass('active');
    });

    $('.popup__enter-logbottom a, .popup__forgot-bottom a').on('click', function () {
        $('.js-tab-trigger').toggleClass('active');
        $('.js-tab-content').toggleClass('active');
    });

    $('.popup__forgot-remember a').on('click', function () {
        $('.popup__enter-box').addClass('active');
        $('.popup__forgot-pass').removeClass('active');
    });

    $('.popup__reg-bottom a').on('click', function () {
        $('.js-tab-trigger').toggleClass('active');
        $('.js-tab-content').toggleClass('active');
    });

    // Show menu in Header 
    $('.header__login').on('click', function () {
        $('.header__login-menu').toggleClass('active');
        $('.header__login-arrow').toggleClass('active');
    });

    $(document).mouseup(function (e) { // событие клика по веб-документу
        if (!$('.header__login-menu').is(e.target) // если клик был не по нашему блоку
            && $('.header__login-menu').has(e.target).length === 0) { // и не по его дочерним элементам
            $('.header__login-menu').removeClass('active'); // скрываем его
            $('.header__login-arrow').removeClass('active');
        };
    });

    // Logout in Header
    $('.header__login-exitbtn').on('click', function () {
        $('.header__right-logout').addClass('active');
        $('.header__right-login').removeClass('active');
        $('.header__right-add').removeClass('active');
    });

    // Mobile Menu in Header
    let $btn = $('.header__mobile-line');
    let $navMenu = $('.header__mobile');

    $('.header__right-btn').on('click', function () {
        if (!($btn.hasClass('active'))) {
            $btn.addClass('active');
            $navMenu.addClass('active');
            $('body').addClass('active');
        } else {
            $btn.removeClass('active');
            $navMenu.removeClass('active');
            $('body').removeClass('active');
        }

    });

    // Validate form in popup Enter
    $("#validate1").validate({
        errorClass: "input_error",
        rules: {
            email1: {
                required: true,
                email: true
            },
            password1: {
                required: true,
                minlength: 2
            }
        }
    });

    $("#validate2").validate({
        errorClass: "input_error",
        rules: {
            emeil2: {
                required: true,
                email: true
            }
        }
    });

    $("#validate3").validate({
        errorClass: "input_error",
        rules: {
            name3: {
                required: true,
                minlength: 2
            },
            email3: {
                required: true,
                email: true
            },
            phone3: {
                required: true,
                minlength: 2
            },
            lastname3: {
                required: true,
                minlength: 2
            },
            password3: {
                required: true,
                minlength: 2
            }
        },
    });

    // Form Mask
    jQuery(function ($) {
        $('#phone3').mask('+9 (999) 999-9999');
    });

    //   Validate form1
    $('#validate1').submit(function (event) {
        event.preventDefault();

        if (($('#email1').val() == '') || ($('#password1').val() == '')) {
            return false;
        } else {
            $('.popup__enter').addClass('passive');
            $('body, html').removeClass('active');
            $('.header__right-logout').removeClass('active');
            $('.header__right-login').addClass('active');
            $('.header__right-add').addClass('active');
        }
    });

    $('#validate2').submit(function (event) {
        event.preventDefault();

        if (($('#email2').val() == '')) {
            return false;
        } else {
            $('.popup__enter').addClass('passive');
            $('.popup__link').removeClass('passive');

        }
    });

    $('#validate3').submit(function (event) {
        event.preventDefault();

        if (($('#name3').val() == '') || ($('#lastname3').val() == '') || ($('#phone3').val() == '') || ($('#email3').val() == '') || ($('#password3').val() == '')) {
            return false;
        } else {
            $('.popup__enter').addClass('passive');
            $('body, html').removeClass('active');

        }
    });

    // Show Password in Popup Enter
    $('.popup__reg-passicon, .popup__enter-passicon').click(function () {
        var $thisField = $(this).siblings($('input'));
        var type = $thisField.attr('type') == "text" ? "password" : 'text';
        $(this).find('img').toggleClass('active');
        $thisField.attr('type', type);
    });


    // ------------Cataloge---------

    // Slick slider in section Spec
    function slickifySpec(id, idArrLeft, idArrRight) {
        $('#' + id).slick({

            arrows: true,
            // mobileFirst: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            swipe: true,
            infinite: false,
            nextArrow: ($('#' + idArrRight)),
            prevArrow: ($('#' + idArrLeft)),
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });

        // $('#' + id).slick('slickGoTo', 1,  true);
    };

    function sliderInit() {
        let $specItem = $('.spec__item');

        $specItem.each(function (index) {
            let $sliderItemLength = $(this).find('.spec__slider-item').length;
            let $sliderId = $(this).find('.spec__slider').attr('id', ('spec-slider' + index));
            let $sliderArrowLeftId = $(this).find('.spec__arrows-left').attr('id', ('spec-arr-left' + index));
            let $sliderArrowRightId = $(this).find('.spec__arrows-right').attr('id', ('spec-arr-right' + index));

            // Перебираю все аккаунты специалистов, нахожу в них количество фотографий,
            //  и, в зависимости от количества, инициализирую слайдер или даю класс самому слайдеру
            if ($sliderItemLength === 0) {
                $(this).find('.spec__slider').addClass('empty').text('К сожалению, пока нет портфолио...');

            } else if ($sliderItemLength > 5) {


                slickifySpec($sliderId.attr('id'), $sliderArrowLeftId.attr('id'), $sliderArrowRightId.attr('id'));

            } else if ( $sliderItemLength === 5) {
                let $smallItemFour = $(this).find('.spec__slider').addClass('active');

                $(window).on('load resize orientationchange', function () {

                    if ($(window).width() > 1199) {
                        if ($smallItemFour.hasClass('slick-initialized')) {
                            $smallItemFour.slick('unslick');
                        }
                    }
                    else {
                        if (!$smallItemFour.hasClass('slick-initialized')) {
                            $smallItemFour.slick({
                                slidesToShow: 4,
                                slidesToScroll: 1,
                                infinite: false,
                                nextArrow: ($('#' + $sliderArrowRightId.attr('id'))),
                                prevArrow: ($('#' + $sliderArrowLeftId.attr('id'))),
                                responsive: [
                                    {
                                        breakpoint: 991,
                                        settings: {
                                            slidesToShow: 3,
                                        }
                                    },
                                    {
                                        breakpoint: 767,
                                        settings: {
                                            slidesToShow: 1,
                                        }
                                    }
                                ]
                            });
                        }
                    }
                });
            } else if ( $sliderItemLength === 4 ) {
                let $smallItemFour = $(this).find('.spec__slider').addClass('active');

                $(window).on('load resize orientationchange', function () {

                    if ($(window).width() > 991) {
                        if ($smallItemFour.hasClass('slick-initialized')) {
                            $smallItemFour.slick('unslick');
                        }
                    }
                    else {
                        if (!$smallItemFour.hasClass('slick-initialized')) {
                            $smallItemFour.slick({
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                nextArrow: ($('#' + $sliderArrowRightId.attr('id'))),
                                prevArrow: ($('#' + $sliderArrowLeftId.attr('id'))),
                                responsive: [
                                    {
                                        breakpoint: 767,
                                        settings: {
                                            slidesToShow: 1,
                                        }
                                    }
                                ]
                            });
                        }
                    }
                });
            } else {
                let $smallItem = $(this).find('.spec__slider').addClass('active');

                $(window).on('load resize orientationchange', function () {

                    if ($(window).width() > 767) {
                        if ($smallItem.hasClass('slick-initialized')) {
                            $smallItem.slick('unslick');
                        }
                    }
                    else {
                        if (!$smallItem.hasClass('slick-initialized')) {
                            $smallItem.slick({
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                mobileFirst: true,
                                nextArrow: ($('#' + $sliderArrowRightId.attr('id'))),
                                prevArrow: ($('#' + $sliderArrowLeftId.attr('id'))),
                            });
                        }
                    }
                });
               
            }
        })
    };

    sliderInit();



    //   Изменение селекта в секции Spec
    function selectAllChange() {
        $("#spec-select-all").change(function () {
            specFilter();
        });
    };

    function selectCityChange() {
        $("#spec-select-city").change(function () {
            specFilter();
        });
    };

    function specFilter() {
        $('.spec__item').each(function () {
            let $itemDataSpec = $(this).data('spec');
            let $selectAllValue = $('#spec-select-all').val();
            let $itemDataCity = $(this).data('city');
            let $selectCityValue = $('#spec-select-city').val();

            //    if ($itemDataSpec.indexOf($selectAllValue) > -1 ) {
            //        console.log($itemDataSpec);
            //    }

            if (($itemDataSpec.indexOf($selectAllValue) > -1) && ($itemDataCity.indexOf($selectCityValue) > -1)) {
                $(this).addClass('active');
                //    sliderInit();
            } else {
                $(this).removeClass('active');
            }
        });
    };

    function specFilterInit() {
        $('.spec__item').each(function () {
            let $itemDataSpec = $(this).data('spec');
            let $selectAllValue = $('#spec-select-all').val();
            let $itemDataCity = $(this).data('city');
            let $selectCityValue = $('#spec-select-city').val();

            if (($itemDataSpec.indexOf($selectAllValue) > -1) && ($itemDataCity.indexOf($selectCityValue) > -1)) {
                $(this).addClass('active');
                //    sliderInit();
            } else {
                $(this).removeClass('active');
            }
        });
    };


    selectAllChange();
    selectCityChange();
    specFilterInit();

    // Shom more specialist in section Spec
    $('.spec__button a').on('click', function () {
        $('.spec__box-hide').addClass('active');
        $(this).closest('.spec__button').addClass('passive');
    });


});