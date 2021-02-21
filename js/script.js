//함수 Function(){}


//윈도우가 로드된 후에 이벤트 리스너 함수 실행
//window.onload = function(){}


//돔트리(DOM TREE) 구조(STRUCTURE를 읽어 들이고(Onload) 난 후 
// 실행 하도록 로드 됨
// window.onload = function(){

//     //fnFirst('window.onload 실행','babo');//전달인자(아규먼트)

//     var divBtn = document.querySelector('#scriptWrap');
//         divBtn.onclick = function(){
//             fnFirst('온로드후 버튼 클릭 이벤트 리스너 값 입니다.');
//         }
// }



//1. 선언적 함수(이름있는 함수)
//특징 : 함수 호출시 함수 선언문 위 아래 어디서든지 호출 실행 가능합니다.

//fnFirst('위에서 호출 기본함수 호출 실행'); //전달인자(아규먼트)
// function fnFirst(z,k,x,y){ //z 매개변수(파라미터) , undefinde(정의x)
//     alert(z + k + x + y);
//     console.log(z, k, x, y);
// }
// fnFirst('아래에서 호출 기본함수 호출 실행','매개변수값 전달2','띠용'); //전달인자(아규먼트)





//2. 리터럴 함수(이름 없는 함수)
//특징 변수로 대입하는 함수
//특징 반드시 선언된 함수 아래에서만 호출 실행 가능합니다.
/// Uncaught TypeError: unNameFn is not a function
//unNameFn('http://www.naver.com');  오류 반드 선언된 함수 아래에서만 실행 가능 함
//var unNameFn = function(z){ //파라미터(매개변수)
    //alert(z);
    //window.location.href = z;
    //location.href = z;
//}
//unNameFn('http://www.naver.com');  
//unNameFn('http://www.tjoeun.co.kr'); //아규먼트(전달인자)



//3. 즉시 실행 함수
(function(){
    alert('즉시 실행 함수');
})();

(function(babo,jquery,win){ //파라미터(매개변수)
    console.log(babo, jquery,win); //win - undefined
})('전달인자값 1','전달인자 값 2'); //아규먼트(전달인자)

// 제이쿼리 실행 함수 '$' or 'jQuery'
// 반드시 오픈소스가 있어야 사용가능
// jQuery(function(){
//     alert('제이쿼리 실행:경고창!!!'); 
//     jQuery('#scriptWrap').html('<h1>제이쿼리 출력문</h1>');
//     $('#scriptWrap').html('<h2>제이쿼리 출력문</h2>');
//     document.write('<h1>자바스크립트 코딩 출력문!!! 웹에 직접 코딩</h1>');
//     console.log('콘솔창 출력 오류검출 디버깅용 유효성검사');
//     alert('경고창 !!!');
// });

// $(function(){
//     alert('제이쿼리 실행문 jQuery대신 $사용');
//     $('#scriptWrap').text('<h3><i>제이쿼리는 출력문이 2가지다. html() 태그 사용가능, text() 오로지 텍스트만</i></h3>');
// });

// jQuery();
// jQuery(function(){});
// jQuery(function(){

// });

// $();
// $(function(){});
// $(function(){
    
// });

//즉시실행함수로 제이쿼리의 단점 충돌을 차단
//변수 중복 사용 공용 차단
// //1
// ();

// //2
// (function(){});

// //3
// (function(){
    
// });

//4
// (function($){ //매개변수(Parameter)

//     $('#scriptWrap').html('<h1>제이쿼리 즉시 실행문 </h1>');
//     $('#scriptWrap').css({color:'#c00', fontSize:50, textAlign:'center'});

// })(jQuery); //전달인자(Argument)


// (function($, window, docuement){

//     $('#scriptWrap').html('<h1>제이쿼리 즉시 실행문 </h1>');
//     $('#scriptWrap').css({color:'#0f0', fontSize:50, textAlign:'center'})

// })(jQuery, window, document);

(function($, window, document, undefined){

    $('scriptWrap').html()

})(jQuery, window, document);