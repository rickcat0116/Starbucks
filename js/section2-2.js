(function(window,document,$){


    var cnt = -1;
    // 1. 상하 슬라이더 스크롤링
    function noitceSlide(){
        cnt ++;
            if(cnt >= 4){
                cnt = -1;
        }
            $(".notice-list li").stop().animate({top:24}, 0).css({zIndex:2});
            $(".notice-list li").eq(cnt).stop().animate({top:0}, 0).css({zIndex:1});
            $(".notice-list li").eq(cnt+1).stop().animate({top:24}, 0).animate({top:0}, 1000).css({zIndex:3});
        
    }

    setInterval(noitceSlide, 2500);

    // 2. 버튼 이벤트 체인지
    $('.promotion-btn').on({
        click:function(e){
            e.preventDefault();

            $(this).toggleClass("addUp");
            $("#section3").stop().slideToggle(500);
        }
    });

}(window,document,jQuery));