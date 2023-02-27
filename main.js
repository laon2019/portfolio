function goTop() {
    $('html').scrollTop(0);
    // scrollTop 메서드에 0 을 넣어서 실행하면 끝 !!
    // 간혹 이 소스가 동작하지 않는다면
    // $('html, body') 로 해보세요~
}
//4.배경색 변경
$(window).on('scroll resize', function(){
    var scrollTop = $(document).scrollTop();
    bgColor();
    function bgColor(){
        if(scrollTop > 3550 && scrollTop<3750){
            $('.down').addClass('on');
        }else if(scrollTop > 4350 && scrollTop<4550){
            $('.down').addClass('on');
        }else{
            $('.down').removeClass('on');
        }
    }
});
