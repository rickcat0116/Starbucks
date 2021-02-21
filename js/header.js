(function($){
    
    //마우스 이벤트
    //메인 버튼 이벤트
    //마우스 클릭 이벤트 동작
    //마우스 오버시 동작
    //키보드 접근시 동작 
    //$('선택자').on({});
    $('.main-btn').on({
        click:function(){
             // 키보드 엔터
        }, 
        mouseover:function(){ //포커스 인
            //버튼 효과 배경 색상 글자
            $(".main-btn").removeClass("addMainbtn"); //모든 메인버튼 추가된 클래스 삭제
            $(this).addClass("addMainbtn"); //현재(this) 클래스 추가
            //서브메뉴의 슬라이드 다운 업 
            $(".sub").slideUp(00);
            $(this).next().stop().slideDown(500);
        },
        focusin:function(){
            $(".main-btn").removeClass("addMainbtn"); //모든 메인버튼 추가된 클래스 삭제
            $(this).addClass("addMainbtn"); //현재(this) 클래스 추가
        },
        
    });

    //마우스가 #nav를 들어오면(Enter) / 올라오면(MouseOver)
    //마우스가 #nav를 떠나면(Leave) / 벗어나면(MouseOut)
    $("#nav").on({
        mouseleave:function(){
            $(".sub").stop().slideUp(500);
            $(".main-btn").removeClass("addMainbtn");
        }
    });

    //메인 버튼 클릭 링크 이동
    //each() 메소드 버튼 배열 처리
    $(".main-btn").each(function(index){
        $(this).on({
            click:function(){
                if(index==0){
                    location.href="https://www.starbucks.co.kr/coffee/index.do";
                } else if(index==1) {
                    location.href="https://www.starbucks.co.kr/menu/index.do";
                } else if(index==2) {
                    location.href="https://www.starbucks.co.kr/store/index.do";
                } else if(index==3) {
                    location.href="https://www.starbucks.co.kr/responsibility/index.do";
                } else if(index==4) {
                    location.href="https://www.starbucks.co.kr/msr/index.do";
                } else if (index==5) {
                    //self
                    //  location.href="https://www.starbucks.co.kr/whats_new/index.do";
                    // blank
                    window.open("https://www.starbucks.co.kr/whats_new/index.do");
                }
            }
        });
    });

    /*

            //each() 메소드 실무 적응

            $(".main-btn").each(); // 이치 선언
            $(".main-btn").each(function(){}); // 이치에 콜백함수 선언
            $(".main-btn").each(function(){ // 콜백함수 공간 확보

            });

            // 콜백함수 index 이벤트 선언
            $(".main-btn").each(function(index){

            });

            // 클릭이벤트 리스너
            $(".main-btn").each(function(index){
                $(this).on({
                    click:function(){
                        if (index == 0 ){ //조건문 선언
                            location.href="url"; // 이벤트 핸들러
                        } else if(index == 1) {
                            location.href="url";
                        } else if(index == 2) {
                            location.href="url";
                        }
                    }
                })
            });

            */
})(jQuery);