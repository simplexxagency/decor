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

    $('.header__right-reg a').on('click', function(){
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
        $('.header__login-menu').addClass('active');
        $('.header__login-arrow').addClass('active');
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
            emeil1: {
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
});