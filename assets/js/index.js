$(document).ready(Core);

function Core()
{
    SetReviewSlider();
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