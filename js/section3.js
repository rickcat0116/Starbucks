;(function(window,document,$){
   
    //메인 슬라이드 롤링 애니메이션
    
    // 1.카운트 변수
    var cnt = 0;
    var setId = 0; 
    var setId2 = 0;

    // 2.다음 슬라이드 카운트 함수
        function nextSlideCountFn(){
            cnt++;
            mainSlideFn();  
        }
    // 2.2 이전 슬라이드 카운트 함수
        function prevSlideCountFn(){
            cnt--;
            mainSlideFn();  
        }

        // 3.메인 슬라이드 함수(애니메이션) 생성 - 카운트 함수 호출하여 사용
        function mainSlideFn(){
            $('.slide-wrap').stop().animate({ left:-829*cnt }, 600, function(){
                if(cnt>3){ cnt=0 ; } // 1 2 3 0
                if(cnt<0){ cnt=3; }
                $('.slide-wrap').stop().animate({ left:-829*cnt }, 0);
                $('.slide').removeClass('addSlide');                
                $('.slide').eq(cnt+1).addClass('addSlide');
            });
           
            pageBtnfn(cnt); // 페이지 버튼
        }

        // 4.Next Arrow 버튼 클릭 이벤트 - 카운트 함수 호출
        $('.next-btn').on({
            click:function(){
                //애니메이션 구동 중 클릭 방지
                if(!$('.slide-wrap').is(":animated" )){
                    nextSlideCountFn();
                }
                timerControlFn();
            }
        });
          // 4-2.Prev Arrow 버튼 클릭 이벤트 - 카운트 함수 호출
          $('.prev-btn').on({
            click:function(){
                //애니메이션 구동이 아닐때만 버튼 이벤트 구동
                if(!$('.slide-wrap').is(":animated" )){
                    prevSlideCountFn();
                }
                timerControlFn();
            }
        });

        // 4-3 터치 스와이프
            $('.slide-wrap').swipe({
                swipeLeft:function(){
                    
                    if(!$('.slide-wrap').is(":animated" )){
                        nextSlideCountFn();
                    }
                    timerControlFn();
                },
                swipeRight:function(){

                    if(!$('.slide-wrap').is(":animated" )){
                        prevSlideCountFn();
                    }
                    timerControlFn();
                }
            });

        // 4-4 타이머 카운트 컨트롤
        // 타이머 컨트롤 카운트 함수 
        // 이벤트 핸들러에 추가된 함수
        function timerControlFn(){

            clearInterval(setId);// 버튼 클릭 시 타이머 중지
            clearInterval(setId2);// 버튼 클릭 시 카운트 타이머 중지
            $('.pause-play-btn').addClass('addPlay');

            //중지상태 카운트 시작
            var cnt2 = 0;
            setId2 = setInterval(function(){
                cnt2++; // 1 2 3 4 .... 5초후에 반응이(사용자가 슬라이더 버튼을 누르지 않으면)없으면,
                //메인함수 호출 -> 실행
            //조건문 
                if(cnt2 > 5){
                    nextSlideCountFn();
                    initTimerFn();
                    clearInterval(setId2); //자신의 타이머 중지
                    $('.pause-play-btn').removeClass('addPlay') 
                }
            }, 1000);
        }
          
        // 5. each() 매서드로 .page-btn 버튼의 요소를 배열처리하여 인덱스번호를 반환(출력)
            $('.page-btn').each(function(index){
                    $(this).on({
                        click: function(){
                            cnt=index; // 카운트 번호를 인덱스번호로 저장
                            mainSlideFn(); // 메인 슬라이드 호출
                            clearInterval(setId);
                            $('.pause-play-btn').addClass('addPlay');

                            timerControlFn();
                        }
                    });
            });
        

        // 6. 인디게이터(페이지 버튼)에 표시(마킹)
        function pageBtnfn(z){
            z>3? z=0 : z;
            $('.page-btn').removeClass('addPagebtn');
            $('.page-btn').eq(z).addClass('addPagebtn');
        }

        // 7. 타이머 3초 간격으로 다음 슬라이드 호출
        function initTimerFn(){
            setId = setInterval( nextSlideCountFn, 3000);
         
        }

        // setTimeout(initTimerFn, 100);
        //로딩 시 강제 타이머 호출 / 3초 후에 타이머 실행

        // 9. 타이머 일시 정지 버튼 클릭 이벤트 
        // var t=0;
        // $('.pause-play-btn').on({
        //     click: function(){
        //         if(t==0){
        //             t=1;
        //             $(this).addClass('addPlay'); //플레이 이미지로 변경
        //             clearInterval(setId); // 중지
        //      }
        
        //         else{
        //             t=0;
        //             $(this).removeClass('addPlay');
        //         timerFn();
        //         }
        //     }
        // });

        // hasClass('addPlay') 있으면 true, 없으면 false;
        // 클래스가 있으면 중지상태 ▶
        // 클래사그 없으면 플레이상태 ||
        $('.pause-play-btn').on({
            click: function(){
                var x = null;  
                    x = $(this).hasClass('addPlay'); //  true || false
                    if ( x==false ) { //현재 재생 중인 상태
                        clearInterval(setId);
                        clearInterval(setId2);
                        $(this).addClass('addPlay'); //▶
                    }
                    else if ( x==true ){ // 현재 정지 상태
                        // nextSlideCountFn(); //++
                        clearInterval(setId);
                        clearInterval(setId2);
                        initTimerFn(); // 
                        $(this).removeClass('addPlay'); // ||
                    }
            }
        });


        $(".promotion-btn").on({
            click:  function(e){
                e.preventDefault();
                
                 $(this).toggleClass("addUp");
                $("#section3").stop().slideToggle(500);


                //addUp 클래스가 존재하면 섹션3이 오픈

                //addUp 클래스가 없다면 섹션3이 클로즈
                console.log($(this).hasClass("addUp"));{}
                if($(this).hasClass('addUp')) { //슬라이드 실행
                    cnt=0;
                    $('.slide-wrap').stop().animate({ left:-829*cnt }, 0);
                    pageBtnfn(cnt);

                    clearInterval(setId);
                    clearInterval(setId2);
                    initTimerFn();
                    $('.pause-play-btn').removeClass('addPlay');
                } else { // 슬라이드 일시정지 // 초기화
                    clearInterval(setId); // 슬라이드 타이머 정지
                    cnt=0; // 카운트 0 초기화
                    $('.slide-wrap').stop().animate({ left:-829*cnt }, 0); // 초기화 리셋
                    $('.slide').removeClass('addSlide'); // 불투명도 초기화
                    $('.slide').eq(cnt+1).addClass('addSlide'); // 불투명도 초기화

                    pageBtnfn(cnt); //페이지버튼 초기화

                    
                    $('.pause-play-btn').addClass('addPlay');
                }

            }
        });
})(window,document,jQuery);