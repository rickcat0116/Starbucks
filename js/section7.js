;(function(window,document,$,undefined){

    var t = 0;

    setTimeout(formatFn, 100);

        function formatFn(){
            $('#section7 h2').stop().animate({left:-1000}, 1000);
            $('#section7 h3').stop().animate({left:-1000}, 1500);
            $('#section7 hp').stop().animate({opacity:0}, 1000);
        }
        
        function animationFn(){
            $('#section7 h2').stop().animate({left:0}, 2000);
            $('#section7 h3').stop().animate({left:0}, 2500);
            $('#section7 hp').stop().animate({opacity:1}, 3000);
        }

        $(window).scroll(function(){
            if($(this).scrollTop() < $('#section5').offset().top-300 ){
                if(t==1){
                    t=0;
                    formatFn();
                }
            }
    
            if( $(this).scrollTop() >= $('#section5').offset().top-300 ){
                if(t==0){
                    t=1;
                    animationFn();
                }
            }
    
            
        }); 
})(window,document,jQuery);