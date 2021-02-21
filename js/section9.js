;(function(window,document,$,undefined){

    var t = 0;

    setTimeout(formatFn, 100);

    function formatFn(){
        $('#section9 .title-01').stop().animate({right:-1000, opacity:0}, 1000);
        $('#section9 .title-02').stop().animate({right:-1000, opacity:0}, 1000);
        $('#section9 .store-find-wrap').stop().animate({right:-1000, opacity:0}, 1000);
    }

    function animationFn(){
        $('#section9 .title-01').stop().animate({right:0, opacity:1}, 2000);
        $('#section9 .title-02').stop().animate({right:0, opacity:1}, 2500);
        $('#section9 .store-find-wrap').stop().animate({right:0, opacity:1}, 3000);
    }

      $(window).scroll(function(){
            if( $(this).scrollTop() >= $('#section7').offset().top ){ 
                if(t==0){
                    t=1;
                    animationFn();
                }
            }
            
            if( $(this).scrollTop() < $('#section7').offset().top ){ 
                if(t==1){
                    t=0;
                    formatFn();
                }
            }
        });

})(window,document,jQuery); 