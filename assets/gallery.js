$(function(){

    $('.gallery').slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        variableWidth: true,
        arrows: false
    });

    $('.designer-carousel').slick({
        centerPadding: '0',
        slidesToShow: 1,
        mobileFirst: true,
        speed: 300,
        arrows: false,
        responsive: [ 
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 4,
                }
            },

        ],  

    });

    $('.dc-prev').click(function(e){ 
        //e.preventDefault(); 
      $('.designer-carousel').slick('slickPrev');
    } );
    
    $('.dc-next').click(function(e){
        //e.preventDefault(); 
        $('.designer-carousel').slick('slickNext');
    } );  
    $('.arrow-prev').click(function(e){ 
            //e.preventDefault(); 
        $('.gallery').slick('slickPrev');
    } );

    $('.arrow-next').click(function(e){
        //e.preventDefault(); 
        $('.gallery').slick('slickNext');
    } );  
  
    
});