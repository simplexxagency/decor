'use strict';

$(document).ready(function () {



    // Header scroll
    let $header = $('.header');
    let $rentHeader = $('.rent__header');

    $(window).scroll(function () {
        let top = $(this).scrollTop();

        $header.toggleClass('active', top > $header.height());
        $rentHeader.toggleClass('active', top > $header.height());

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
    $('.popup__enter-main .js-tab-trigger').click(function () {
        var id = $(this).attr('data-tab'),
            content = $('.popup__enter-main .js-tab-content[data-tab="' + id + '"]');

        $('.popup__enter-main .js-tab-trigger.active').removeClass('active');
        $(this).addClass('active');

        $('.popup__enter-main .js-tab-content.active').removeClass('active');
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
                email: true,
                message: 'Ай-яй'
            },
            password1: {
                required: true,
                minlength: 2,
                message: 'Ай-яй'
            }
        },
        message: 'Ай-яй'
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

            } else if ($sliderItemLength === 5) {
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
            } else if ($sliderItemLength === 4) {
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


    // Select style in section Spec
    $('#spec-select-all').selectize();
    $('#spec-select-city').selectize();

    // -------------Card------------

    // Tabs in section Card
    $('.cards .js-tab-trigger').click(function () {
        var id = $(this).attr('data-tab'),
            content = $('.cards .js-tab-content[data-tab="' + id + '"]');

        $('.cards .js-tab-trigger.active').removeClass('active');
        $(this).addClass('active');

        $('.cards .js-tab-content.active').removeClass('active');
        content.addClass('active');
    });

    // Select style in section Stories
    $('#stories-select').selectize();

    //   ------------History----------

    //   Validate form4 in History
    $('#validate4').submit(function (event) {
        event.preventDefault();

        if (($('#companyName4').val() == '') || ($('#data4').val() == '') || ($('#budget4').val() == '') || ($('#desc4').val() == '')) {
            return false;
        } else {
            $('.popup__history').addClass('passive');
            $('body, html').removeClass('active');
            $('.popup__moder').removeClass('passive');
        }
    });

    // Popup History in section History
    $('.stories__add a').on('click', function () {
        $('.popup__history').removeClass('passive');
        $('body, html').addClass('active');
    });

    $('.popup__history-cancel a').on('click', function () {
        $('.popup__history').addClass('passive');
        $('body, html').removeClass('active');
    });

    $('.popup__moder-button a').on('click', function () {
        $('.popup__moder').addClass('passive');
        $('body, html').removeClass('active');
    });

    // Selectize in popup History
    $('#history-type4').selectize();
    $('#history-city4').selectize();

    // Validate form in popup History
    $("#validate4").validate({
        errorClass: "input_error",
        rules: {
            companyName4: {
                required: true,
                minlength: 2
            },
            data4: {
                required: true,
                minlength: 2
            },
            type4: {
                required: true,
                minlength: 2
            },
            city4: {
                required: true,
                minlength: 2
            },
            budget4: {
                required: true,
                minlength: 2
            },
            desc4: {
                required: true,
                minlength: 2
            }
        }
    });


    // --------Rent--------
    $('.rent__header-icon').on('click', function () {
        $('.rent__header-search').toggleClass('active');
        $('.rent__header-input').toggleClass('active');
    });

    // --------Decor--------
    $('.decor__colors-item').on('click', function () {
        $('.decor__colors-item').removeClass('active');
        $(this).addClass('active');
    });

    $('.decor__reset').on('click', function () {
        $('.decor__filter input').prop('checked', false);
        $('.decor__gap-input input').val(' ');
        $('.decor__colors-item').removeClass('active');
    });

    $('.decor__right-item').on('click', function () {
        $('.decor__right-item').removeClass('active');
        $(this).addClass('active');
    });

    // Selectize Decor
    $('#popup-city-select').selectize();

    // City change on page Decor
    $('.decor__city-change a').on('click', function () {
        $('.popup__city').removeClass('passive');
        $('body, html').addClass('active');
    });

    $('.popup__city-cancel a, .popup__city-submit input').on('click', function () {
        $('.popup__city').addClass('passive');
        $('body, html').removeClass('active');
    });

    // ------------Product------------

    // Initialize Slick Slider for section Product
    $('.prod__slider-top').slick({
        dots: false,
        arrows: false,
        swipe: true,
        fade: true,
        asNavFor: '.prod__slider-bottom',
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $('.prod__slider-bottom').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.prod__slider-top',
        dots: false,
        swipe: true,
        infinite: true,
        //   centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    // -------Basket-----------
    // Tabs on page Basket
    $('.bask__spec .js-tab-trigger').click(function () {
        var id = $(this).attr('data-tab'),
            content = $('.bask__orders .js-tab-content[data-tab="' + id + '"]');

        $('.bask__spec .js-tab-trigger.active').removeClass('active');
        $(this).addClass('active');

        $('.bask__orders .js-tab-content.active').removeClass('active');
        content.addClass('active');

        totalSpec();
    });

    function sumSpecOnLoad() {

        $('.bask__spec .js-tab-trigger').each(function () {
            var id = $(this).attr('data-tab'),
                thisSpec = $(this),
                content = $('.bask__orders .js-tab-content[data-tab="' + id + '"]');

            totalSpec(thisSpec, content);
        });
    };


    // Calculate on page Basket
    function inputSum() {

        $('.bask__amount-input input').each(function () {
            let $inputValue = $(this).val();
            let $price = $(this).closest('.bask__orders-left').find('.bask__price-value').data('price');
            let $totalItem = $(this).closest('.bask__orders-bottom').find('.bask__total-value span');

            if (!isNaN($inputValue)) {

                $totalItem.text($inputValue * $price);
            } else {
                $totalItem.text("0");
            };

        });
    };

    function fullSum() {
        let $fullSum = 0;
        let $fullTotal = $('.bask__bottom-value span');

        $('.bask__spec-item').each(function () {

            $fullSum += +$(this).find('.bask__spec-total span').text();
        });

        $fullTotal.text($fullSum);
    };

    function totalSpec(thisSpec, thisItem) {
        let $activeTotal = thisItem.find('.bask__total-value span');
        let $activeSpec = thisSpec.find('.bask__spec-total span');
        let $totalSpec = 0;

        $activeTotal.each(function (index) {

            let $activeTotalValue = $(this).text();
            $totalSpec += +$activeTotalValue;
        });
        $activeSpec.text($totalSpec);
    };
    sumSpecOnLoad()
    inputSum();
    fullSum();

    function inputChange() {

        $('.bask__amount-input input').change(function (event) {
            inputSum();
            sumSpecOnLoad();
            fullSum();
        });
    };
    inputChange();

    // Delete item on page Basket
    $('.bask__delete').on('click', function () {
        $(this).closest('.bask__orders-item').remove();
        inputSum();
        sumSpecOnLoad();
        fullSum();
    });

    // Add Delivery
    $('.bask__delivery-link').on('click', function(){
        $(this).closest('.bask__delivery-wrap').removeClass('active');
        $(this).closest('.bask__delivery').find('.bask__delivery-hide').addClass('active');
    });

    // Delete Setup
    $('.bask__dhide-delete').on('click', function(){
        $(this).closest('.bask__delivery-hide').removeClass('active');
        $(this).closest('.bask__delivery').find('.bask__delivery-wrap').addClass('active');
    });

    // Add Setup
    $('.bask__setup-link').on('click', function(){
        $(this).closest('.bask__setup-wrap').removeClass('active');
        $(this).closest('.bask__setup').find('.bask__setup-hide').addClass('active');
    });

    // Delete Setup
    $('.bask__shide-delete').on('click', function(){
        $(this).closest('.bask__setup-hide').removeClass('active');
        $(this).closest('.bask__setup').find('.bask__setup-wrap').addClass('active');
    });

    // ---------Order-----------

    // Selectize Order
    $('#order-select').selectize();

    // Validate form in popup Enter
    $("#validate5").validate({
        errorClass: "input_error",
        rules: {
            email5: {
                required: true,
                email: true
            },
            name5: {
                required: true,
                minlength: 2
            },
            lastname5: {
                required: true,
                minlength: 2
            },
            phone5: {
                required: true,
                minlength: 2
            }
        }
    });

    // Form validate on page Order
    $('#validate5').submit(function (event) {
        event.preventDefault();

        if (($('#email5').val() == '') || ($('#name5').val() == '') || ($('#lastname5').val() == '') || ($('#phone5').val() == '')) {
            return false;
        } else {
            $('.popup__order').removeClass('passive');
        }
    });

    // Form Mask
    jQuery(function ($) {
        $('#phone5').mask('+9 (999) 999-9999');
    });

    // ------------Admin-------------

    // Tabs on page Admin
    $('.admin__tab-nav .js-tab-trigger').click(function () {
        var id = $(this).attr('data-tab'),
            content = $('.admin__tab-content .js-tab-content[data-tab="' + id + '"]');

        $('.admin__tab-nav .js-tab-trigger.active').removeClass('active');
        $(this).addClass('active');

        $('.admin__tab-content .js-tab-content.active').removeClass('active');
        content.addClass('active');
    });

    $('.admin__subtab-nav .js-subtab-trigger').click(function () {
        var id = $(this).attr('data-tab'),
            content = $('.admin__subtab-content .js-subtab-content[data-tab="' + id + '"]');

        $('.admin__subtab-nav .js-subtab-trigger.active').removeClass('active');
        $(this).addClass('active');

        $('.admin__subtab-content .js-subtab-content.active').removeClass('active');
        content.addClass('active');
    });

    // Show Tip on Admin-top
    let $adminTip = $('.admin__top-tip');
    $('.admin__top-title a').on('click', function () {
        $adminTip.addClass('active');
    });

    // Click on blocks
    $(document).mouseup(function (e) { // событие клика по веб-документу
        if (!$adminTip.is(e.target) // если клик был не по нашему блоку
            && $adminTip.has(e.target).length === 0) { // и не по его дочерним элементам
            $adminTip.removeClass('active'); // скрываем его
        };
    });

    // ----------Priv---------------
    // Phone Mask
    $('#adminPhone1').mask('+9 (999) 999-9999');

    // Value input change
    $('.priv__left-value input').on('change', function(){
        let $link = $(this).closest('.priv__left-value');
        let $val = $(this).val();

        $link.attr('title', $val);
    });

    // Support change
    // $('.priv__right-valuelink input').on('change', function(){
    //     let $link = $(this).closest('.priv__right-valuelink');
    //     let $val = $(this).val();

    //     $link.attr('href', $val);
    //     $link.attr('title', $val);
    // });

    // $('.priv__right-valuelink input').on('blur', function(){
    //     let $link = $(this).closest('.priv__right-valuelink');
    //     let $val = $(this).val();

    //     $link.attr('href', $val);
    //     $link.attr('title', $val);
    // });

    // ----------Agcy-------

    // Phone Mask
    $('.agcy__item-phone').mask('+9 (999) 999-9999');

    // Title change
    $('.agcy__item-input').on('change', function(){
        let $link = $(this);
        let $val = $(this).val();

        $link.attr('title', $val);
    });

    // Tooltip time on page Agcy
    let $worktimeTip = $('.agcy__worktime-tip');

    $('#client.agcy__item-worktime').on('click', function () {
        $(this).find('.agcy__worktime-tip').addClass('active');
        $(this).find('.agcy__item-arrow').addClass('active');
    });

    $('#punkt.agcy__item-worktime').on('click', function () {
        $(this).find('.agcy__worktime-tip').addClass('active');
        $(this).find('.agcy__item-arrow').addClass('active');
    });

    $(document).mouseup(function (e) { // событие клика по веб-документу
        if (!$worktimeTip.is(e.target) // если клик был не по нашему блоку
            && $worktimeTip.has(e.target).length === 0) { // и не по его дочерним элементам
            $worktimeTip.removeClass('active'); // скрываем его
            $worktimeTip.closest('.agcy__item-worktime').find('.agcy__item-arrow').removeClass('active');
        };
    });

    // Change time
    function selectFirstTimeChange() {
        $(".agcy__worktime-select").change(function () {
            selectOnLoad();
        });
    };

    function timeInputChange() {
        let $inputChange = $('.agcy__worktime-input');

        $inputChange.on('change', function () {
            let $selectValue = $(this).closest('.agcy__item-worktime').find('.agcy__worktime-select');

            if ($(this).prop('checked')) {
                $(this).closest('.agcy__item-worktime').find('span').text('Круглосуточно');
            } else {
                selectOnLoad();
            }
        });

    };

    function selectOnLoad() {
        $(".agcy__worktime-select").each(function () {
            let $newTime = $(this).val();
            let $secondTime = $(this).closest('.agcy__worktime-select-wrap').siblings('.agcy__worktime-select-wrap').find('select').val();
            let $timeResult = $(this).closest('.agcy__item-worktime').find('span');
            let $timeCheck = $(this).closest('.agcy__item-worktime').find('input:checkbox');

            if ($timeCheck.prop('checked')) {
                $timeCheck.text('Круглосуточно');
            } else {

                if (+$newTime > +$secondTime) {
                    $timeResult.text('c ' + $secondTime + ':00 до ' + $newTime + ':00');
                } else {
                    $timeResult.text('c ' + $newTime + ':00 до ' + $secondTime + ':00');
                }
            }
        });
    }

    selectOnLoad();
    selectFirstTimeChange();
    timeInputChange();

    // Change Day

    // Tooltip time on page Agcy
    let $dayTip = $('.agcy__restday-tip');

    $('#clientDay.agcy__item-restday').on('click', function () {
        $(this).find('.agcy__restday-tip').addClass('active');
        $(this).find('.agcy__item-arrow').addClass('active');
    });

    $('#punktDay.agcy__item-restday').on('click', function () {
        $(this).find('.agcy__restday-tip').addClass('active');
        $(this).find('.agcy__item-arrow').addClass('active');
    });

    $(document).mouseup(function (e) { // событие клика по веб-документу
        if (!$dayTip.is(e.target) // если клик был не по нашему блоку
            && $dayTip.has(e.target).length === 0) { // и не по его дочерним элементам
            $dayTip.removeClass('active'); // скрываем его
            $dayTip.closest('.agcy__item-restday').find('.agcy__item-arrow').removeClass('active');
        };
    });

    // Change day
    function changeDay(id) {
        let $parentId = $('#' + id + '');
        let $restDay = $parentId.find('.agcy__restday-item');
        let $restdayArray = {};

        $restDay.on('click', function () {
            console.log('1111111111')
            let $restdayBox = $(this).closest('.agcy__item-restday').find('.agcy__restday-value');
            let $span = $('<span></span>');
            let $restdayActive = $('.agcy__restday-item.active');
            let $restdayOrder = $(this).data('order');
            let $restdayDay = $(this).data('day')
            let $dayCheck = $(this).closest('.agcy__item-restday').find('input:checkbox');

            if ($dayCheck.prop('checked')) {
                $restdayBox.text('Без выходных');
            } else {

                $(this).toggleClass('active');

                if ($(this).hasClass('active')) {
                    $restdayArray[$restdayOrder] = $restdayDay;
                } else {
                    delete $restdayArray[$restdayOrder]
                }

                $restdayBox.text('')
                if (Object.keys($restdayArray).length === 0) {
                    $restdayBox.text('Без выходных')
                }

                for (let prop in $restdayArray) {

                    if (Object.keys($restdayArray).length === 1) {
                        $restdayBox.append($restdayArray[prop])
                    } else {
                        $restdayBox.append($restdayArray[prop] + ' ')

                    }
                    console.log(Object.keys($restdayArray).length)

                }
            }


        });
    };

    function dayInputChange(id) {
        let $parentId = $('#' + id + '')
        let $dayChange = $parentId.find('.agcy__restday-input');

        $dayChange.on('change', function () {

            if ($(this).prop('checked')) {
                $(this).closest('.agcy__item-restday').find('.agcy__restday-item').removeClass('active');
                $(this).closest('.agcy__item-restday').find('.agcy__restday-value').text('Без выходных');
            } else {
                changeDay(id);
            }
        });

    };

    dayInputChange("clientDay");
    changeDay("clientDay");
    dayInputChange("punktDay");
    changeDay("punktDay");

    // Tooltip Demon on page Agcy
    $('.agcy__demon').on('click', function () {
        $(this).find('.agcy__demon-tip').addClass('active');
        $(this).find('.agcy__item-arrow').addClass('active');
    });

    $(document).mouseup(function (e) { // событие клика по веб-документу
        if (!$('.agcy__demon-tip').is(e.target) // если клик был не по нашему блоку
            && $('.agcy__demon-tip').has(e.target).length === 0) { // и не по его дочерним элементам
            $('.agcy__demon-tip').removeClass('active'); // скрываем его
            $('.agcy__demon-tip').closest('.agcy__demon').find('.agcy__item-arrow').removeClass('active');
        };
    });

    $('.agcy__demon-item').on('click', function(){
        $('.agcy__demon-item').removeClass('active');
        $(this).addClass('active');
        $('.agcy__demon-value').text($(this).text());
    });

    // Close popup agcy
    $('.agcy__close a').on('click', function(){
        $('.popup__agcy').removeClass('passive');
        $('body, html').addClass('active');
    });

    $('.popup__agcy-cancel, .popup__agcy-accept').on('click', function(){
        $('.popup__agcy').addClass('passive');
        $('body, html').removeClass('active');
    });

    // Popup Representation
    $('.agcy__link a').on('click', function(){

        $('.popup__repr').removeClass('passive');
        $('body, html').addClass('active');
    });

    // Selectize
    // $('.agcy__worktime-select').selectize();

    // -----------Office--------
    // Popup Discount
    $('.offi__prof-value a').on('click', function() {
        $('.popup__disc').removeClass('passive');
        $('body, html').addClass('active');
    });

    $('.popup__disc-submit a').on('click', function(){
        $('.popup__disc-hide').removeClass('passive');
        $(this).closest('.popup__disc-submit').removeClass('active');
    }); 

    $('.popup__disc-final a').on('click', function(){
        $('.popup__disc').addClass('passive');
        $('body, html').removeClass('active');
        $('.popup__disc-hide').addClass('passive');
        $('.popup__disc-submit').addClass('active');
    });

    $('.popup__disc-cancel a').on('click', function(){
        $('.popup__disc-hide').addClass('passive');
        $('.popup__disc-submit').addClass('active');
    });

    // Change days in Arend
    function arendDays () {
        $('.offi__prof-day').each(function() {
            let $val = $(this).val();
            let $dayValue = $(this).closest('.offi__arend-value').find('.offi__arend-dayvalue');
            console.log($val.toString().slice(-2))
            if ($val == 1) {
                $dayValue.text('день');
            } else if ($val == 2 || $val == 3 || $val == 4) {
                $dayValue.text('дня');
            } else {
                $dayValue.text('дней');
            }

            if ( $val < 10 ) {
                $(this).css('margin-right', '-20px');
            } else if ( $val >= 10 && $val < 99) {
                $(this).css('margin-right', '-10px');
            } else {
                $(this).css('margin-right', '0');
            }
        });
    };

    $('.offi__prof-day').on('change', function() {
        arendDays();
    });

    arendDays();

    // All input change
    function allInputChange () {
        $('.offi__prof-inputnumber').each(function (){
            let $max = $(this).attr('max');
            let $val = $(this).val();

            if ( $max < 999) {

                if ( $val < 10 ) {
                    $(this).css('margin-right', '-20px');
                } else if ( $val >= 10 && $val < 99) {
                    $(this).css('margin-right', '-10px');
                } else {
                    $(this).css('margin-right', '0');
                }
            } else  if ( $max > 1000) {

                if ( $val < 10 ) {
                    $(this).css('margin-right', '-30px');
                } else if ( $val >= 10 && $val < 99) {
                    $(this).css('margin-right', '-20px');
                } else if ( $val >= 100 && $val < 999)  {
                    $(this).css('margin-right', '-10px');
                } else {
                    $(this).css('margin-right', '0');
                }
            }
        });
    };

    $('.offi__prof-inputnumber').on('change', function(){
        allInputChange();
    });

    allInputChange();

    // Change Deposite
    $('.offi__arend-deposit').on('click', function(){
        $('.offi__arend-tip').addClass('active');
        $(this).find('.offi__arend-arrow').addClass('active');
    });

    $(document).mouseup(function (e) { // событие клика по веб-документу
        if (!$('.offi__arend-tip').is(e.target) // если клик был не по нашему блоку
            && $('.offi__arend-tip').has(e.target).length === 0) { // и не по его дочерним элементам
            $('.offi__arend-tip').removeClass('active'); // скрываем его
            $('.offi__arend-tip').closest('.offi__arend-value').find('.offi__arend-arrow').removeClass('active');
        };
    });

    $('.offi__arend-tipitem').on('click', function(){
        let $depActive = $(this).closest('.offi__arend-value').find('.offi__arend-deposit span').text();
        let $depChoose = $(this).text();
        
        $(this).closest('.offi__arend-value').find('.offi__arend-deposit span').text($depChoose);
        $(this).text($depActive);
        $('.offi__arend-tip').removeClass('active');
        $(this).find('.offi__arend-arrow').removeClass('active');
    });

    // Delivery select
    $('.offi__deli-selectwrap').on('click', function(){
        
        $(this).closest('.offi__deli-select').find('.offi__deli-tip').addClass('active');
        $(this).find('.offi__deli-arrow').addClass('active');

        
    });

    $(document).mouseup(function (e) { // событие клика по веб-документу
        if (!$('.offi__deli-tip').is(e.target) // если клик был не по нашему блоку
            && $('.offi__deli-tip').has(e.target).length === 0) { // и не по его дочерним элементам
            $('.offi__deli-tip').removeClass('active'); // скрываем его
            $('.offi__deli-tip').closest('.offi__deli-select').find('.offi__deli-arrow').removeClass('active');
        };
    });

    $('.offi__deli-tip').on('click', function(){
        let $selectActive = $(this).closest('.offi__deli-select').find('span').text();
        let $selectChoose = $(this).text();
        let $parent = $(this).closest('.offi__deli');

        if ( $parent.find('.offi__deli-main').hasClass('active')) {
            $parent.find('.offi__deli-main').removeClass('active')
        } else {
            $parent.find('.offi__deli-main').addClass('active')
        }

        $(this).closest('.offi__deli-select').find('span').text($selectChoose);
        $(this).text($selectActive);
        $(this).removeClass('active');
        $(this).closest('.offi__deli-select').find('.offi__deli-arrow').removeClass('active');
    });

    // Using choose
    $('.offi__deli-usingwrap').on('click', function(){
        
        $(this).closest('.offi__deli-using').find('.offi__deli-usingtip').addClass('active');
        $(this).find('.offi__deli-arrow').addClass('active');
        $(this).find('span').toggleClass('active');
    });

    $(document).mouseup(function (e) { // событие клика по веб-документу
        if (!$('.offi__deli-usingtip').is(e.target) // если клик был не по нашему блоку
            && $('.offi__deli-usingtip').has(e.target).length === 0) { // и не по его дочерним элементам
            $('.offi__deli-usingtip').removeClass('active'); // скрываем его
            $('.offi__deli-usingtip').closest('.offi__deli-using').find('.offi__deli-arrow').removeClass('active');
        };
    });

    $('.offi__deli-usingtip').on('click', function(){
        let $selectActive = $(this).closest('.offi__deli-using').find('span').text();
        let $selectChoose = $(this).text();
        let $result = $(this).closest('.offi__deli-row').find('.offi__deli-result span');
        let $flag = $(this).closest('.offi__deli-using').find('.offi__deli-usingwrap span');

        $result.toggleClass('active');

        $(this).closest('.offi__deli-using').find('span').text($selectChoose);
        $(this).text($selectActive);
        $(this).removeClass('active');
        $(this).closest('.offi__deli-using').find('.offi__deli-arrow').removeClass('active');
    });

    // Add using
    $('.offi__deli-button').on('click', function() {
        $(this).closest('.offi__deli-main').find('.offi__deli-rowspecial').removeClass('passive');
        $(this).removeClass('active');
    });

    // Setup select
    $('.offi__setup-selectwrap').on('click', function(){
        
        $(this).closest('.offi__setup-select').find('.offi__setup-tip').addClass('active');
        $(this).find('.offi__setup-arrow').addClass('active');

        
    });

    $(document).mouseup(function (e) { // событие клика по веб-документу
        if (!$('.offi__setup-tip').is(e.target) // если клик был не по нашему блоку
            && $('.offi__setup-tip').has(e.target).length === 0) { // и не по его дочерним элементам
            $('.offi__setup-tip').removeClass('active'); // скрываем его
            $('.offi__setup-tip').closest('.offi__setup-select').find('.offi__setup-arrow').removeClass('active');
        };
    });

    $('.offi__setup-tip').on('click', function(){
        let $selectActive = $(this).closest('.offi__setup-select').find('span').text();
        let $selectChoose = $(this).text();
        let $parent = $(this).closest('.offi__setup');

        if ( $parent.find('.offi__setup-main').hasClass('active')) {
            $parent.find('.offi__setup-main').removeClass('active')
        } else {
            $parent.find('.offi__setup-main').addClass('active')
        }

        $(this).closest('.offi__setup-select').find('span').text($selectChoose);
        $(this).text($selectActive);
        $(this).removeClass('active');
        $(this).closest('.offi__setup-select').find('.offi__setup-arrow').removeClass('active');
    });

    // Add setup
    $('.offi__setup-button').on('click', function() {
        $(this).closest('.offi__setup-main').find('.offi__setup-rowspecial').removeClass('passive');
        $(this).removeClass('active');
    });

    // Persent margin
    function marginOnLoad (){

        $('.offi__prof-inputpersent').each( function(){
            let $val = $(this).val();

            if ( $val < 10 ) {
                $(this).css('margin-right', '-20px');
            } else if ( $val >= 10 && $val < 99) {
                $(this).css('margin-right', '-12px');
            } else {
                $(this).css('margin-right', '0');
            }
        });
    };

    function marginChange (){
        
        $('.offi__prof-inputpersent').on('change', function(){
            marginOnLoad();
        });
    };
    
    marginChange();
    marginOnLoad();

    // ---------Prop--------
    // Delete logotype
    $('.prop__site-change a').on('click', function(){
        $(this).closest('.prop__site-logo').find('.prop__site-image img').css('display', 'none');
    });

    $('.prop__site-delete a').on('click', function(){
        $(this).closest('.prop__site-logo').find('.prop__site-image img').css('display', 'none');
    });

    // ---------Gallery------------
    // Popup Gall
    $('.gall__item-add').on('click', function(){
        let $parentTag = $(this).closest('.gall__item');

        $('.popup__gall').removeClass('passive');
        $('body, html').addClass('active');
        $parentTag.addClass('active');
        tagAdd();
        console.log('222')
    });

    // Add new tag
    function tagAdd() {

        $('.popup__gall-item').on('click', function(){
            let $newTag = $(this).text();
            let $newTagBox = $('<div class="gall__item-tag"></div>');
            let $newTagClose = $('<div class="gall__item-close"><img src="img/gall-close.svg" alt="icon"></div>');
            let $newTagValue = $('<div class="gall__item-value"></div>');
            let $activeItem = $('.gall__item.active');
            
            $newTagValue.append($newTag);
            $newTagBox.append($newTagClose);
            $newTagBox.append($newTagValue);
            $activeItem.find('.gall__item-wrap').append($newTagBox);
            console.log('111')
            tagDel();
        });
    };

    $('.popup__gall .popup__close, .popup__gall .popup__shadow').on('click', function () {
        $('.popup').addClass('passive');
        $('body, html').removeClass('active');
        $('.gall__item.active').removeClass('active');
    });

    // Tag delete
    function tagDel (){
        $('.gall__item-close').on('click', function(){
            $(this).closest('.gall__item-tag').addClass('delete');
        });
    };
    
    tagDel();
});