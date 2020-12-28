$(document).ready(Core);

function Core()
{
    SetReviewSlider();
    SetModal();
    SetMobileMenu();
    SetForm();
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

function SetForm()
{
    $.validator.addMethod('checkMask', function(value, element) {
        return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value); 
    })

    let validateSetting = {
        rules: {
            phone: {
                checkMask: true
            }
        },
        messages: {
            phone: {
                checkMask: "Введите полный номер телефона"
            }
        },
        submitHandler: SubmitForm
    }

    $('.section_contacts_us form').validate(validateSetting);
    $('.modal form').validate(validateSetting);

    $('form input[name=phone]').mask("+7(999)999-9999", {autoclear: false});
}

function SubmitForm(form)
{
    alert('Success')
}