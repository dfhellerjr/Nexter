/* jQuery functions */
$(document).ready(function()
{      
    /* flip card to back-side */
    $('.card__btn--front').click(function()   
    {  
        /* change z-index of front-face home name */
        $(this).siblings('.card__name').animate({opacity: 0}).css({'z-index': 1})

        /* rotate card */
        $(this).parent('.card__face--front').toggleClass('rotate')       
        $(this).parent('.card__face--front').next().toggleClass('rotate-forward')    
    });

    /* flip card to front-side */
    $('.card__btn--back').click(function()   
    {  
        /* change z-index of front-face home name */
        $(this).parent('.card__face--back').siblings('.card__face--front').children('.card__name').animate({opacity: 1}).css({'z-index': 2})    
        
        /* rotate card */
        $(this).parent('.card__face--back').toggleClass('rotate-forward')    
        $(this).parent('.card__face--back').siblings('.card__face--front').toggleClass('rotate')   
    });
    
    /* scroll-down button */ 
    $('.js--scroll-to-homes').click(function ()                                    
    {
        $('html, body').animate(
        {
            scrollTop: $('.js--section-homes').offset().top - 50
        }, 
        1000); 
    });
}); 




