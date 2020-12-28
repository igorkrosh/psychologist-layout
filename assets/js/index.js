$(document).ready(Core);

function Core()
{
    SetReviewSlider();
    SetModal();
    SetMobileMenu();
}

function SetReviewSlider()
{
    $(".slider_wrapper .slider").owlCarousel({
        items: 1,

        nav: true,
        navText: ['', ''],
        navContainer: '.section_reviews .slider-navs',
        
    });
}

function SetModal()
{
    $('.btn_modal').on('click', function()
    {
        ShowModal('#modalContactForm');
    });

    $('.modal_dialog').on('click', function(e) {
        e.stopPropagation();
    });

    $('.modal').on('click', function() {
        HideModal(`#${$(this).attr('id')}`);
    });

    $('.btn_modal_close').on('click', function ()
    {
        let modalId = $(this).closest('.modal').attr('id');
        HideModal(`#${modalId}`);
    });
}

function ShowModal(modalId)
{
    $(modalId + ' .modal_dialog').off('animationend');
    $(modalId).addClass('active');
    $('body').addClass('modal_open');
    $(modalId + ' .modal_dialog').addClass('fadeInDownBig')
    
    $('body').append('<div class="modal_backdrop"></div>');
    setTimeout(function() {
        $('.modal_backdrop').addClass('active');
    }, 50)
}

function HideModal(modalId)
{
    $(modalId + ' .modal_dialog').removeClass('fadeInDownBig');
    $(modalId + ' .modal_dialog').addClass('fadeOutDownBig');
    $('.modal_backdrop').removeClass('active');
    $('body').removeClass('modal_open');
    $(modalId + ' .modal_dialog').on('animationend', function() {
        if (!$(modalId).hasClass('active'))
        {
            return;
        }
        $(modalId).removeClass('active');
        $(modalId + ' .modal_dialog').removeClass('fadeOutDownBig');
        $('.modal_backdrop').remove();
    });
}

function SetMobileMenu()
{
    $('.btn_menu').on('click', function()
    {
        if ($('header .menu').hasClass('active'))
        {
            $(this).removeClass('active');
            $('header .menu').removeClass('active');
        }
        else
        {
            $(this).addClass('active');
            $('header .menu').addClass('active');
        }
    })
}

