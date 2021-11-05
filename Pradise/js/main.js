$(function(){

    // ----------------------------------------------------------//
    
    $('#top_banner .banner i').on('click',function(){
        $('#top_banner').addClass('on');
    });





    $('.slider').slick({
        arrows:false,
        autoplay:true, 
        autoplaySpeed:6000,
        pauseOnHover:true,
    });

    $("#ytvideo").YTPlayer({
        videoURL:'https://youtu.be/1Pw7pik2s5k',
        containment:'.slider',
        autoPlay:true,
        mute:true,
        startAt:0, 
        opacity:1,
        showControls:false,
    });



    $('#visual .xi-angle-right').on('click',function(){
        $('.slider').slick('slickNext');
    });
    $('#visual .xi-angle-left').on('click',function(){
        $('.slider').slick('slickPrev');
    });

    $('.slider figure').eq(1).addClass('on');
    $('.slider').on('afterChange',function(e,s,c){
        $('.slider figure').eq(c+1).addClass('on').siblings().removeClass('on');
    });
    

        
    


    $('.pr_slider01').slick({
        arrows:false, 
        dots:true,

    });
    $('.pr_slider02').slick({
        arrows:false, 
        dots:true,

    });
    $('.pr_slider03').slick({
        arrows:false, 
        dots:true,

    });


    $('#content02  .pr_slider01 .impo i').on('click',function(){
        $('#content02  .pr_slider01 .impo').toggleClass('on');
        $(this).toggleClass('on');

    });
   
    $('#content02  .pr_slider02 .impo i').on('click',function(){
        $('#content02  .pr_slider02 .impo').toggleClass('on');
        $(this).toggleClass('on');

    });
   
    $('#content02  .pr_slider03 .impo i').on('click',function(){
        $('#content02  .pr_slider03 .impo').toggleClass('on');
        $(this).toggleClass('on');

    });
   


   

    
    $('#content02 .xi-angle-right').on('click',function(){
        $('.pr_slider').slick('slickNext');
    });
    $('#content02 .xi-angle-left').on('click',function(){
        $('.pr_slider').slick('slickPrev');
    });




   
    $('#content03 .container').slick({
        arrows:false, 
        pauseOnHover:false,
        

    });

    $('#content03 .container').on('afterChange',function(e,s,c){
        console.log(c);
        $('#content03 figure').eq(c).addClass('on').siblings().removeClass('on');

    });


    $('#content03 .xi-angle-right').on('click',function(){
        $('#content03 .container').slick('slickNext');
    });
    $('#content03 .xi-angle-left').on('click',function(){
        $('#content03 .container').slick('slickPrev');
    });












    $(window).on('scroll',function(){
        var sct=$(window).scrollTop();

        if( sct > 900) {$('#header').css({"opacity":0});
    }else{
        $('#header').css({"opacity":1});
    }
        
        
   
        if( sct < 800 ) {$('#content01 .box01').css({"margin-left": -1500});
    }else{
        $('#content01 .box01').css({"margin-left": 0});
    }
        if( sct < 1000 ) {$('#content01 .box02').css({"margin-left": -1500});
    }else{
        $('#content01 .box02').css({"margin-left":0});
    }
    
    //     if( sct < 1000 ) {$('#content01 .link').css({"opacity": 0,});
    // }else{
    //     $('#content01 .link').css({"opacity": 1});
    // }
   
        if( sct < 2200 ) {$('#content02 .pr_slider01').css({"opacity": 0,});
    }else{
        $('#content02 .pr_slider01').css({"opacity": 1});
    }    
        if( sct < 3200 ) {$('#content02 .pr_slider02').css({"opacity": 0,});
    }else{
        $('#content02 .pr_slider02').css({"opacity": 1});
    }    
        if( sct < 4000 ) {$('#content02 .pr_slider03').css({"opacity": 0,});
    }else{
        $('#content02 .pr_slider03').css({"opacity": 1});
    }    

     
        if( sct < 4900 ) {$('#content03').css({"opacity": -100,});
    }else{
        $('#content03').css({"opacity": 100});
    }
    
    
        if( sct < 6000 ) {$('#content04 .section').css({"margin-left": -1500});
    }else{
        $('#content04 .section').css({"margin-left": 350});
    }


    
    
        if( sct < 6800 ) {$('#content05 .container').css({"opacity": 0});
    }else{
        $('#content05 .container').css({"opacity": 1});
    }
        if( sct < 900 ) {$('#totop').fadeOut();
    }else{
        $('#totop').fadeIn();
    }
    
 
 
    });

    $('#totop').on('click',function(){
        $('html, body').animate({scrollTop:0});
    });

   






// ----------------------------------------------------------//


});