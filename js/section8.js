;(function(window,document,$,undefined){
    var t=0;
    

        setTimeout(formatFn,100);

        function formatFn(){
            $('#section8 .title-01').stop().animate({left:1550},1000);
            $('#section8 .title-02').stop().animate({left:1523},1000);
        }
        function animationFn(){
            $('#section8 .title-01').stop().animate({left:550},2500);
            $('#section8 .title-02').stop().animate({left:523},3000);
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