(function(window,document,$){
    
    var cnt=-1;

    function noticeSlideFn(){
        cnt ++; 
        if(cnt>4){
            cnt=0;
        }
        
        // 모두 초기화 24픽셀 아래에서 대기   
        $(".notice-list li").stop().animate({top:24},0).css({zIndex:2});  
        // N번째 리스트가 화면(0픽셀)에서 대기
        $(".notice-list li").eq(cnt).stop().animate({top:0}, 0).css({zIndex:1}); 
        // 24픽셀 아래에서 화면(0픽셀)으로 부드럽게 슬라이드업
        $(".notice-list li").eq(cnt+1>4?0:cnt).stop().animate({top:24},0).animate({top:0},1000).css({zIndex:3}); 

    }


    setInterval(noticeSlideFn, 2500);

    //섹션 2 프로모션 버튼 클릭 이벤트 리스너
    
    $(".promotion-btn").on({
        click: function(e){
            e.preventDefault();

            $(this).toggleClass("addUp");
            $("#section3").stop().slideToggle(500)
        }
    });

}(window,document,jQuery));