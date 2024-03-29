/*jslint browser: true*/
/*global $, jQuery, Modernizr, google, _gat*/
/*jshint strict: true */


/*************** GOOGLE ANALYTICS ***********/
/*************** REPLACE WITH YOUR OWN UA NUMBER ***********/
/*
window.onload = function () { "use strict"; gaSSDSLoad("UA-56294329-1"); }; //load after page onload
*/
/*************** REPLACE WITH YOUR OWN UA NUMBER ***********/


/*
|--------------------------------------------------------------------------
| DOCUMENT READY
|--------------------------------------------------------------------------
*/  

$(document).ready(function() {
    "use strict";
	if( $("ul#og-grid").length){
		Grid.init();
	};

	 /*
    |--------------------------------------------------------------------------
    |  form placeholder for IE
    |--------------------------------------------------------------------------
    */
    if(!Modernizr.input.placeholder){

        $('[placeholder]').focus(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
                input.removeClass('placeholder');
            }
        }).blur(function() {
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.addClass('placeholder');
                input.val(input.attr('placeholder'));
            }
        }).blur();
        $('[placeholder]').parents('form').submit(function() {
            $(this).find('[placeholder]').each(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                }
            })
        });

    }			
    /*
    |--------------------------------------------------------------------------
    | MAGNIFIC POPUP
    |--------------------------------------------------------------------------
    */



    if( $("a.image-link").length){

         $("a.image-link").click(function (e) {

            var items = [];
            
            items.push( { src: $(this).attr('href')  } );

            if($(this).data('gallery')){

                var $arraySrc = $(this).data('gallery').split(',');

                $.each( $arraySrc, function( i, v ){
                    items.push( {
                        src: v 
                    });
                });     
            }
     
            $.magnificPopup.open({
                type:'image',
                mainClass: 'mfp-fade',
                items:items,
                gallery: {
                  enabled: true 
                }
            });

            e.preventDefault();
        });
  
    }



    if( $("a.image-iframe").length){
         $('a.image-iframe').magnificPopup({type:'iframe',mainClass: 'mfp-fade'});
    }

    
    /*
    |--------------------------------------------------------------------------
    | TOOLTIP
    |--------------------------------------------------------------------------
    */

    $('.tips').tooltip({placement:'top'});

    
    
    /*
    |--------------------------------------------------------------------------
    | COLLAPSE
    |--------------------------------------------------------------------------
    */

    $('.accordion').on('show hide', function(e){
        $('.accordion-toggle').removeClass('active');
        $(e.target).siblings('.accordion-heading').find('.accordion-toggle').addClass('active');
        $(e.target).siblings('.accordion-heading').find('.accordion-toggle i').toggleClass('icon-plus icon-minus', 200);
        
    });

    /*
    |--------------------------------------------------------------------------
    | CONTACT
    |--------------------------------------------------------------------------
      
    $('.slideContact').click(function(e){

        if ( $(window).width() >= 800){

            $('#contact').slideToggle('normal', 'easeInQuad',function(){
                $('#contactinfoWrapper').css('margin-left', 0);
                $('#mapSlideWrapper').css('margin-left', 3000);
                $('#contactinfoWrapper').fadeToggle(); 
            });
            $('#closeContact').fadeToggle(); 
            return false;
            
        }else{

            return true;
            
        }
        //e.preventDefault();
    });
    
    
    $('#closeContact').click(function(e){

        $('#contactinfoWrapper').fadeOut('normal', 'easeInQuad',function(){
            $('#contactinfoWrapper').css('margin-left', 0);
            $('#mapSlideWrapper').css('margin-left', 3000);
        });
        
        $('#contact').slideUp('normal', 'easeOutQuad');

        $(this).fadeOut();

        //e.preventDefault();
        
    });
        
    
    /* MAP 
    $('#mapTrigger').click(function(e){


        $('#mapSlideWrapper').css('display', 'block');
        initialize('mapWrapper');
        
        $('#contactinfoWrapper, #contactinfoWrapperPage').animate({
            marginLeft:'-2000px' 
        }, 400, function() {}); 
        
        
        $('#mapSlideWrapper').animate({
            marginLeft:'25px' 
        }, 400, function() {});  
        
        appendBootstrap();

        e.preventDefault();
    });

    appendBootstrap();
        
    $('#mapTriggerLoader').click(function(e){


        $('#mapSlide').css('display', 'block');

        $('#contactSlide').animate({
            marginLeft:'-2000px' 
        }, 400, function() {}); 
        
        
        $('#mapSlide').animate({
            marginLeft:'0' 
        }, 400, function() {
            $('#contactSlide').css('display', 'none');
        });  

        
        appendBootstrap();
        
        e.preventDefault();
    });
        
    $('#mapReturn').click(function(e){
        //$('#mapWrapper').css('margin-bottom', '3em');
        
        $('#contactSlide').css('display', 'block');
        $('#mapSlide').animate({
            marginLeft:'3000px' 
        }, 400, function() {});       
        

        $('#contactSlide').animate({
            marginLeft:'0' 
        }, 400, function() {
            $('#mapSlide').css('display', 'none');
        }); 

        e.preventDefault();
    }); 
*/


    /*
    |--------------------------------------------------------------------------
    | OWL CAROUSEL
    |--------------------------------------------------------------------------
    
     if($('#portfolio-carousel').length){ 
     alert('toto');    
        $("#portfolio-carousel").owlCarousel();
    }
    /*
    |--------------------------------------------------------------------------
    | FLEXSLIDER
    |--------------------------------------------------------------------------
    */ 
    if($('#flexHome').length){

        $('#flexHome').flexslider({
            animation: "slide",
            controlNav:true,
            directionNav:false, 
            touch: true,
            direction: "vertical"
      
        });    
    }


    if($('.flexFullScreen').length){

        $('.flexFullScreen').flexslider({
            animation: "slide",
            controlNav: true,
            directionNav: true,
            slideshow: true,
            touch: true,
            prevText: '<i class="icon-left-open"></i>',           
            nextText: '<i class="icon-right-open"></i>',   
            start: function(slider){
                setTimeout("animateTxt("+slider.currentSlide+", 'in')", 100);  
            },
            before: function(slider){
                setTimeout("animateTxt("+slider.currentSlide+")", 100);  
            },
            after: function(slider){
                setTimeout("animateTxt("+slider.currentSlide+", 'in')", 100);  
            } 
        });

    }


    if($('.flexScreenSlider').length){

        $('.flexScreenSlider').flexslider({
            animation: "slide",
            controlNav:false,
            touch: true, 
            slideshow: true,
            prevText: '<i class="icon-left-open"></i>',           
            nextText: '<i class="icon-right-open"></i>'  
        });    
    }


    if($('.flexPortfolio').length){

        $('.flexPortfolio').flexslider({
            animation: "slide",
            controlNav:false,
            touch: true,
            slideshow: true,
            prevText: '<i class="icon-left-open"></i>',           
            nextText: '<i class="icon-right-open"></i>'  
        });    
    }


    if($('.flexProject').length){

        $('.flexProject').flexslider({
            animation: "slide",
            controlNav:true,
            touch: true,
            slideshow: true,
            prevText: '<i class="icon-left-open"></i>',           
            nextText: '<i class="icon-right-open"></i>'  
        });    
    }
	
	 if($('.flexApp').length){

        $('.flexApp').flexslider({
            animation: "slide",
            controlNav:false,
            touch: true,	
            prevText: '<i class="icon-left-open"></i>',           
            nextText: '<i class="icon-right-open"></i>'  
        });    
    }





    /*
    |--------------------------------------------------------------------------
    | MAIN ROLLOVER EFFECTS
    |--------------------------------------------------------------------------
    */     

    if($('.imgHover').length){

        $('.imgHover article').hover(
            function () {

                var $this=$(this);

                var fromTop = ($('.imgWrapper', $this).height()/2 - $('.iconLinks', $this).height()/2);
                $('.iconLinks', $this).css('margin-top',fromTop);

                $('.mediaHover', $this).height($('.imgWrapper', $this).height());   

                $('.mask', this).css('height', $('.imgWrapper', this).height());
                $('.mask', this).css('width', $('.imgWrapper', this).width());
                $('.mask', this).css('margin-top', $('.imgWrapper', this).height());


                $('.mask', this).stop(1).show().css('margin-top', $('.imgWrapper', this).height()).animate({marginTop: 0},200, function() {

                    $('.iconLinks', $this).css('display', 'block');
                    if(Modernizr.csstransitions) {
                        $('.iconLinks a').addClass('animated');


                        $('.iconLinks a', $this).removeClass('flipOutX'); 
                        $('.iconLinks a', $this).addClass('bounceInDown'); 

                    }else{

                        $('.iconLinks', $this).stop(true, false).fadeIn('fast');
                    }


                });



            },function () {

                var $this=$(this);


                $('.mask', this).stop(1).show().animate({marginTop: $('.imgWrapper', $this).height()},200, function() {

                    if(Modernizr.csstransitions) {
                        $('.iconLinks a', $this).removeClass('bounceInDown'); 
                        $('.iconLinks a', $this).addClass('flipOutX'); 

                    }else{
                        $('.iconLinks', $this).stop(true, false).fadeOut('fast');
                    }

                });

            });
    }



    /*
    |--------------------------------------------------------------------------
    | ROLLOVER BTN
    |--------------------------------------------------------------------------
    */ 

    $('.socialIcon').hover(
        function () {
            $(this).stop(true, true).addClass('socialHoverClass', 300);
        },
        function () {
            $(this).removeClass('socialHoverClass', 300);
        });





    $('.tabs li, .accordion h2').hover(
        function () {
            $(this).stop(true, true).addClass('speBtnHover', 300);
        },
        function () {
            $(this).stop(true, true).removeClass('speBtnHover', 100);
        });



    /*
    |--------------------------------------------------------------------------
    | ALERT
    |--------------------------------------------------------------------------
    */ 
    $('.alert').delegate('button', 'click', function() {
        $(this).parent().fadeOut('fast');
    });
    
    
    /*
    |--------------------------------------------------------------------------
    | CLIENT
    |--------------------------------------------------------------------------
    */   
    
    if($('.colorHover').length){
        var array =[];
        $('.colorHover').hover(

            function () {

                array[0] = $(this).attr('src');
                $(this).attr('src', $(this).attr('src').replace('-off', ''));

            }, 

            function () {

                $(this).attr('src', array[0]);

            });
    }



    /*
    |--------------------------------------------------------------------------
    | Rollover boxIcon
    |--------------------------------------------------------------------------
    */ 
    if($('.boxIcon').length){

        $('.boxIcon').hover(function() {
            var $this = $(this);

            $this.css('opacity', '1');   
            //$this.find('.boxContent>p').stop(true, false).css('opacity', 0);
            $this.addClass('hover');
            $('.boxContent>p').css('bottom', '-50px');
            $this.find('.boxContent>p').stop(true, false).css('display', 'block');

            $this.find('.iconWrapper i').addClass('triggeredHover');    

            $this.find('.boxContent>p').stop(true, false).animate({
                'margin-top': '0px'},
                300, function() {
            // stuff to do after animation is complete
        });


        }, function() {
            var $this = $(this);
            $this.removeClass('hover');

            $this.find('.boxContent>p').stop(true, false).css('display', 'none');
            $this.find('.boxContent>p').css('margin-top', '250px');
            $this.find('.iconWrapper i').removeClass('triggeredHover'); 


        });   
    }   






    //$('#quoteTrigger').click(function (e) {

    //    //$("#quoteWrapper").scrollTop(0);

    //    if(!$('#quoteFormWrapper').is(':visible')){
    //        $('html, body').animate({scrollTop: $("#quoteWrapper").offset().top}, 300);
    //    }

    //    var $this = $(this);


    //    $('#quoteFormWrapper').slideToggle('fast', function() {

    //        $this.text($('#quoteFormWrapper').is(':visible') ? "Close form" : "I have a project");

    //    });


    //    e.preventDefault();
    //});



/*
|--------------------------------------------------------------------------
| SHARRRE
|--------------------------------------------------------------------------

if($('#shareme').length){
  
    $('#shareme').sharrre({

    share: {
        googlePlus: true,
        facebook: true,
        twitter: true,
        linkedin: true
    },

    buttons: {
        googlePlus: {size: 'tall', annotation:'bubble'},
        facebook: {layout: 'box_count'},
        twitter: {count: 'vertical'},
        linkedin: {counter: 'top'}
    },

    enableHover: false,
    enableCounter: false,
    enableTracking: true,
      //url:'document.location.href'
  });
} 



/*
|--------------------------------------------------------------------------
| ROLL OVER PreviewTrigger
|--------------------------------------------------------------------------

if($('.previewTrigger').length){

    $('.mask').css('height', $('.previewTrigger').height());
    $('.mask').css('width', $('.previewTrigger').width());
    // $('.mask', this).css('top', $('.previewTrigger', this).width());
    // $('.mask', this).css('left', $('.previewTrigger', this).width());

    $('.previewTrigger').hover(function() {

        var $this = $(this);

        $this.children('.mask').fadeIn('fast');

        if(Modernizr.csstransitions) {
            $('.iconWrapper', $this).addClass('animated');
            $('.iconWrapper', $this).css('display', 'block');
            $('.iconWrapper', $this).removeClass('flipOutX'); 
            $('.iconWrapper', $this).addClass('bounceInDown'); 
        }else{
            $('.iconWrapper', $this).stop(true, false).fadeIn('fast');
        }

    }, function() {

        var $this = $(this); 

        $this.children('.mask').fadeOut('fast');

        if(Modernizr.csstransitions) {
            $('.iconWrapper', $this).removeClass('bounceInDown'); 
            $('.iconWrapper', $this).addClass('flipOutX');
            $('.iconWrapper', $this).css('display', 'none');
            $('.iconWrapper', $this).removeClass('animated');
        }else{
            $('.iconWrapper', $this).stop(true, false).fadeOut('fast');
        }

    });
}






/*
|--------------------------------------------------------------------------
| AUTOCLOSE BOOSTRAP MENU
|--------------------------------------------------------------------------
*/
$('.nav a').on('click', function(){
    $(".navbar-toggle").click();
});

//END DOCUMENT READY   
});

//##### Ativa Menu pela posi��o do Scroll #####
$(window).scroll(function () {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('.localscroll section.slice').each(function (i) {           
            if ($(this).position().top <= windscroll + 100) {                
                $('ul.nav li.active').removeClass('active');
                $('ul.nav li').eq(i).addClass('active');
            }
        });
    }
    else {
        $('ul.nav li.active').removeClass('active');
        $('ul.nav li:first').addClass('active');
    }    
}).scroll();
//#####



/*
|--------------------------------------------------------------------------
| EVENTS TRIGGER AFTER ALL IMAGES ARE LOADED
|--------------------------------------------------------------------------
*/
$(window).load(function() {

    "use strict";

    /*
    |--------------------------------------------------------------------------
    | ISOTOPE USAGE FILTERING
    |--------------------------------------------------------------------------
    
    if($('.isotopeWrapper').length){

        var $container = $('.isotopeWrapper');
        var $resize = $('.isotopeWrapper').attr('id');
        // initialize isotope
        
        $container.isotope({
            itemSelector: '.isotopeItem',
            resizable: false, // disable normal resizing
            masonry: {
                columnWidth: $container.width() / $resize
            }


            
        });
        var rightHeight = $('#works').height();
        $('#filter a').click(function(){


            $('#works').height(rightHeight);
            $('#filter a').removeClass('current');


            $(this).addClass('current');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 1000,
                    easing: 'easeOutQuart',
                    queue: false
                }
            });
            return false;
        });
        
        
        $(window).smartresize(function(){
            $container.isotope({
                // update columnWidth to a percentage of container width
                masonry: {
                    columnWidth: $container.width() / $resize
                }
            });
        });
        

}  


/**PROCESS ICONS**/
$('.iconBoxV3 a').hover(function() {

    if(Modernizr.csstransitions) {

        $(this).stop(false, true).toggleClass( 'hover', 150);
        $('i', this).css('-webkit-transform', 'rotateZ(360deg)');
        $('i', this).css('-moz-transform', 'rotateZ(360deg)');
        $('i', this).css('-o-transform', 'rotateZ(360deg)');
        $('i', this).css('transform', 'rotateZ(360deg)'); 

    }else{

       $(this).stop(false, true).toggleClass( 'hover', 150);

   }  

}, function() {

    if(Modernizr.csstransitions) {
        $(this).stop(false, true).toggleClass( 'hover', 150);
        $('i', this).css('-webkit-transform', 'rotateZ(0deg)');
        $('i', this).css('-moz-transform', 'rotateZ(0deg)');
        $('i', this).css('-o-transform', 'rotateZ(0deg)');
        $('i', this).css('transform', 'rotateZ(0deg)'); 

    }else{

        $(this).stop(false, true).toggleClass( 'hover', 150);
    }  
    
});

/*
if($('.scrollMenu').length){

     
        var $offset ='';
        if($(window).width() > 1024){

            $offset = $('#mainHeader').outerHeight(true)/2 - 4;

        }else{
           
                $offset = 0;
        }

        if($('.localscroll').length){    
            $('.localscroll').localScroll({
                lazy: true,
                offset: {
                    top:  -($offset)
                }
            });            
        }
            
        var isMobile = false;

        if(Modernizr.mq('only all and (max-width: 1024px)') ) {
            isMobile = true;
        }

       
        if (isMobile === false && ($('#paralaxSlice1').length  ||isMobile === false &&  $('#paralaxSlice2').length ))
        {


            $(window).stellar({
                horizontalScrolling: false,
                responsive:true
            });

        }
  

    }
*/

//END WINDOW LOAD
});

/*
|--------------------------------------------------------------------------
| FUNCTIONS
|--------------------------------------------------------------------------
*/



/* CONTACT FROM */

jQuery(function() {
    "use strict";
    if( jQuery("#contactfrm").length ){

      jQuery("#contactfrm").validate({
        // debug: true,
        errorPlacement: function(error, element) {
            error.insertBefore( element );
        },
        //submitHandler: function(form) {
        //    jQuery(form).ajaxSubmit({
        //        target: ".result",
        //  });
        //},
        onkeyup: false,
        onclick: false,
        highlight: function (element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        errorElement: "div",
        success: function (element) {
            element.closest('.form-group').removeClass('has-error');           
        },
        rules: {
            Nome: {
                required: true,
                minlength: 3
            },
            Email: {
                required: true,
                email: true
            },
            Telefone: {
                required: false,
                minlength: 8,
                digits:false
            },
            Mensagem: {
                required: true,
                minlength: 10,
                maxlength: 350
            }
        },
        submitHandler: function( form ){
            var dados = $(form).serialize();
            var urlAct = jQuery('#contactfrm').attr('action');
            var $btn = jQuery('#submit').button('loading')
            // business logic...
            

            $.ajax({
                type: "POST",
                url: urlAct,
                data: dados,
                timeout: 20000,
                success: function( ret )
                {
                    jQuery('.result').html(ret);
                    console.log('ret: ' + ret);
                    
                    if (ret.indexOf("alert-success") >= 0)
                    {
                        jQuery('#contactfrm').find("input[type=text], textarea").val("");
                        console.log('success');
                    }
                    $btn.button('reset');
                },
                error: function () {
                    // jQuery('.result').html("<div class='alert alert-error'>Infelizmente n�o foi poss�vel enviar seus dados, por favor tente novamente.</div>");
                    jQuery('.result').html("<div class='alert'>Obrigada! Em breve retornaremos seu contato .</div>");
                    $btn.button('reset');
                }
            });
 
            return false;
        }
    });
  }
      

});

/* CONTACT FROM */

/* FLEXSLIDER INNER INFO CUSTOM ANIMATION */
function animateTxt(curSlide, action){
    "use strict";
    if(action === 'in'){
        var i = 0;
        var animaDelay = 0;

        $('.slideN'+curSlide+':not([class*=clone])>.caption').css('display', 'block');

        $('.slideN'+curSlide+':not([class*=clone])>.caption>div').each(function( ) {
            if(Modernizr.csstransitions) { 

                $(this).css('-webkit-animation-delay', animaDelay+'s');
                $(this).css('-moz-animation-delay', animaDelay+'s');
                $(this).css('-0-animation-delay', animaDelay+'s');
                $(this).css('-ms-animation-delay', animaDelay+'s');
                $(this).css('animation-delay-delay', animaDelay+'s');

                $(this).show().addClass('animated').addClass($(this).attr('data-animation'));


                // $(this).show('slow', function() {
                //     $(this).addClass('animated').addClass($(this).attr('data-animation'));
                // });


            }else{
                var timing;
                $('.slideN'+curSlide+':not([class*=clone])>.caption>div').hide();
                if (i === 0){timing = 0;}else if(i === 1){timing = 300;} else{ timing = 300 * i;}
                $(this).delay(timing).fadeIn('fast');
            }
            i++;
            animaDelay = animaDelay+0.2;


        });

    }else{
        var j = 0;
        $('.slideN'+curSlide+':not([class*=clone])>.caption').css('display', 'none');

        $('.slideN'+curSlide+':not([class*=clone])>.caption>div').each(function( ) {
         if(Modernizr.csstransitions) { 

             $(this).removeClass($(this).attr('data-animation')).removeClass('animated').hide();

         }else{
            $(this).hide();
        }
        j++;
    });
    }

}



/* MAIN MENU (submenu slide and setting up of a select box on small screen)*/
/*(function() {
    "use strict";
    var $mainMenu = $('#mainMenu').children('ul');

    $mainMenu.on('mouseenter', 'li', function() {


        var $this = $(this),
        $subMenu = $this.children('ul');


        if( $subMenu.length ){$this.addClass('hover').stop();}
        else {
            if($this.parent().is($(':gt(1)', $mainMenu))){
                $this.stop(false, true).hide().fadeIn('slow');
            }else{
                $this.stop(false, true);
            }
        }


        if($this.parent().is($(':gt(1)', $mainMenu))){

            $subMenu.css('display', 'block');
            $subMenu.stop(false, true).animate({
                left:150, 
                opacity:1
            }, 250,'easeInOutQuad');
            
        }else{

            $subMenu.stop(false, true).slideDown(200,'easeInOutQuad'); 
            
        }


    }).on('mouseleave', 'li', function() {


        var $nthis = $(this),
        $subMenu = $nthis.children('ul');

        if($nthis.parent().is($(':gt(1)', $mainMenu))){

            //$nthis.children('ul').stop(false, true).css('left', 130).css('opacity', 0).css('display', 'none');

            $nthis.children('ul').stop(false, true).animate({
                left:130, 
                opacity:0
            }, 250,'easeInOutQuad', function() {
                $nthis.children('ul').css('display', 'none');
            });

        }else{

            $nthis.removeClass('hover').removeClass('Shover').children('ul').stop(false, true).hide();
        }
        
        
        
        if( $subMenu.length ){$nthis.removeClass('hover');}
        else{$nthis.removeClass('Shover');}
        
        
    });

	if ($('#resMainMenu').length){
		 responsiveNav("#resMainMenu", {jsClass: "jsNav"});
	
	}else{
    
    // ul to select
    var optionsList = '<option value="" selected>Navigate...</option>';
    $mainMenu.find('li').each(function() {
        var $this   = $(this),
        $anchor = $this.children('a'),
        depth   = $this.parents('ul').length - 1,
        indent  = '';

        if( depth ) {
            while( depth > 0 ) {
                indent += ' - ';
                depth--;
            }
        }

        optionsList += '<option value="' + $anchor.attr('href') + '">' + indent + ' ' + $anchor.text() + '</option>';
    }).end().after('<select class="responsive-nav">' + optionsList + '</select>');

    $('.responsive-nav').on('change', function() {
        window.location = $(this).val();
    });
	}

})();*/


/*
|--------------------------------------------------------------------------
| GOOGLE MAP
|--------------------------------------------------------------------------
*/

function appendBootstrap() {
    "use strict";
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://maps.google.com/maps/api/js?sensor=false&callback=initialize";
    document.body.appendChild(script);
}    




function initialize(id) {
    "use strict";
    var image = 'images/icon-map.png';

    var overlayTitle = 'Consultorios';

    var locations = [
        //point number 1
        ['Rua Coronel Morais, 159', 'Canind�, S�o Paulo, SP', -23.529445, -46.617436]

        //point number 2
        //['Best town ever', 'Santa Cruz', 36.986021, -122.02216399999998],

    ];

    /*
    //https://maps.google.com.br/maps/ms?msa=0&amp;msid=215965160610307136204.0004f042e623197684e0b&amp;gl=br&amp;ie=UTF8&amp;t=m&amp;ll=&amp;spn=0.015739,0.034289&amp;z=15&amp;output=embed"></iframe><br /><small>Visualizar <a href="https://maps.google.com.br/maps/ms?msa=0&amp;msid=215965160610307136204.0004f042e623197684e0b&amp;gl=br&amp;ie=UTF8&amp;t=m&amp;ll=-23.529445,-46.617436&amp;spn=0.015739,0.034289&amp;z=15&amp;source=embed" style="color:#0000FF;text-align:left">Rua Coronel Morais, 159 - Canind�</a> em um mapa maior</small>
    */

/*** DON'T CHANGE ANYTHING PASSED THIS LINE ***/
id = (id === undefined) ? 'mapWrapper' : id;

var map = new google.maps.Map(document.getElementById(id), {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
    zoomControl: true,
    zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
        position: google.maps.ControlPosition.LEFT_CENTER
    },
    streetViewControl:true,
    scaleControl:false,
    zoom: 14,
     styles:[
    {
        "featureType": "water",
        "stylers": [
            {
                "color": "#6196AD"
            },
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
             {
                "color": "#FCFFF5"
            },
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#808080"
            },
            {
                "lightness": 54
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#dde1d4"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#73AB7D"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#767676"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#7e7341"
            }
        ]
    },
    
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#dee6e6"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    }
]

});

var myLatlng;
var marker, i;
var bounds = new google.maps.LatLngBounds();
var infowindow = new google.maps.InfoWindow({ content: "loading..." });

for (i = 0; i < locations.length; i++) { 


    if(locations[i][2] !== undefined && locations[i][3] !== undefined){
        var content = '<div class="infoWindow">'+locations[i][0]+'<br>'+locations[i][1]+'</div>';
        (function(content) {
            myLatlng = new google.maps.LatLng(locations[i][2], locations[i][3]);

            marker = new google.maps.Marker({
                position: myLatlng,
                icon:image,  
                title: overlayTitle,
                map: map
            });

            google.maps.event.addListener(marker, 'click', (function() {
                return function() {
                    infowindow.setContent(content);
                    infowindow.open(map, this);
                };

            })(this, i));

            if(locations.length > 1){
                bounds.extend(myLatlng);
                map.fitBounds(bounds);
            }else{
                map.setCenter(myLatlng);
            }

        })(content);
    }else{

        var geocoder   = new google.maps.Geocoder();
        var info   = locations[i][0];
        var addr   = locations[i][1];
        var latLng = locations[i][1];

        (function(info, addr) {

            geocoder.geocode( {

                'address': latLng

            }, function(results) {

                myLatlng = results[0].geometry.location;

                marker = new google.maps.Marker({
                    position: myLatlng,
                    icon:image,  
                    title: overlayTitle,
                    map: map
                });
                var $content = '<div class="infoWindow">'+info+'<br>'+addr+'</div>';
                google.maps.event.addListener(marker, 'click', (function() {
                    return function() {
                        infowindow.setContent($content);
                        infowindow.open(map, this);
                    };
                })(this, i));

                if(locations.length > 1){
                    bounds.extend(myLatlng);
                    map.fitBounds(bounds);
                }else{
                    map.setCenter(myLatlng);
                }
            });
        })(info, addr);

    }
}
}







/* ANALYTICS */
/* 
function gaSSDSLoad (acct) {
  "use strict";  
  var gaJsHost = (("https:" === document.location.protocol) ? "https://ssl." : "http://www."),
  pageTracker,
  s;
  s = document.createElement('script');
  s.src = gaJsHost + 'google-analytics.com/ga.js';
  s.type = 'text/javascript';
  s.onloadDone = false;
  function init () {
    pageTracker = _gat._getTracker(acct);
    pageTracker._trackPageview();
}
s.onload = function () {
    s.onloadDone = true;
    init();
};
s.onreadystatechange = function() {
    if (('loaded' === s.readyState || 'complete' === s.readyState) && !s.onloadDone) {
      s.onloadDone = true;
      init();
  }
};
document.getElementsByTagName('head')[0].appendChild(s);
}
*/


/* 
jQuery(function($){
    "use strict";
   f($('#home').length){

        $('#home').height($(window).height());

        $.supersized({

                    // Functionality
                    slideshow               :   1,          // Slideshow on/off
                    autoplay                :   1,          // Slideshow starts playing automatically
                    start_slide             :   1,          // Start slide (0 is random)
                    stop_loop               :   0,          // Pauses slideshow on last slide
                    random                  :   0,          // Randomize slide order (Ignores start slide)
                    slide_interval          :   12000,      // Length between transitions
                    transition              :   6,          // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
                    transition_speed        :   1000,       // Speed of transition
                    new_window              :   1,          // Image links open in new window/tab
                    pause_hover             :   0,          // Pause slideshow on hover
                    keyboard_nav            :   1,          // Keyboard navigation on/off
                    performance             :   1,          // 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
                    image_protect           :   1,          // Disables image dragging and right click with Javascript

                    // Size & Position                         
                    min_width               :   0,          // Min width allowed (in pixels)
                    min_height              :   0,          // Min height allowed (in pixels)
                    vertical_center         :   1,          // Vertically center background
                    horizontal_center       :   1,          // Horizontally center background
                    fit_always              :   0,          // Image will never exceed browser width or height (Ignores min. dimensions)
                    fit_portrait            :   1,          // Portrait images will not exceed browser height
                    fit_landscape           :   0,          // Landscape images will not exceed browser width

                    // Components                           
                    slide_links             :   'blank',    // Individual links for each slide (Options: false, 'num', 'name', 'blank')
                    thumb_links             :   0,          // Individual thumb links for each slide
                    thumbnail_navigation    :   0,          // Thumbnail navigation
                    slides                  :   [           // Slideshow Images
                    {image : './images/slider/super/supersized-1.jpg', title : '<h1 class="bigTitle">Sun is shining<br /> <small>the weather is sweet</small></h1><a href="#news" class="btn sliderBtn" >Read more</a>', thumb : '', url : ''},

                    {image : './images/slider/super/supersized-2.jpg', title : '<h1 class="bigTitle">Moon is rising<br /> <small>the night is bitter</small></h1><a href="#works" class="btn sliderBtn" >Check our work</a>', thumb : '', url : ''},
					 
					{image : './images/slider/super/supersized-3.jpg', title : '<h1 class="bigTitle">Groove is in the heart<br /> <small>ahaaanhaan</small></h1><a href="#works" class="btn sliderBtn" >More info</a>', thumb : '', url : ''}
                    ],

                    // Theme Options               
                    progress_bar            :   0,          // Timer for each slide                         
                    mouse_scrub             :   0
                    
                });
}
});*/







