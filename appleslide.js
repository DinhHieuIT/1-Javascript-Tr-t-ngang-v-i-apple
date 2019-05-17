$(function () {

    thoigian = setInterval(function(){
       $('.next').trigger('click');
    },3000)
    $('.next').click(function (e) { 
        clearInterval(thoigian);
        var sau = $('.active').next();
        // xu ly cho phan nut
        var vitri =$('.xanh').index()+1;
        $('.nutslide ul li').removeClass('xanh');
        if(vitri == $('.nutslide ul li').length){
            vitri = 0;
        }
        $('.nutslide ul li:nth-child('+(vitri+1)+')').addClass('xanh');
        // end xu ly cho phan nut

        if(sau.length == 0){
            $('.active').addClass('bienmatobentrai').one('webkitAnimationEnd', function (e) {
                $('.bienmatobentrai').removeClass('bienmatobentrai')
            });
            $('.anhslide ._1slide:nth-child(1)').addClass('divaotubenphai').one('webkitAnimationEnd', function (e) {
                $('.active').removeClass('active');
                $('.divaotubenphai').addClass('active').removeClass('divaotubenphai');
        });
        } 
        else 
        {
        $('.active').addClass('bienmatobentrai').one('webkitAnimationEnd', function (e) {
            $('.bienmatobentrai').removeClass('bienmatobentrai')
        });
        sau.addClass('divaotubenphai').one('webkitAnimationEnd', function (e) {
            $('.active').removeClass('active');
            $('.divaotubenphai').addClass('active').removeClass('divaotubenphai');
        });
    }
});
// end next
// start prev
$('.prev').click(function (e) { 
    clearInterval(thoigian);
    var truoc = $('.active').prev();
    // xu ly cho phan nut
    var vitri =$('.xanh').index()+1;
    $('.nutslide ul li').removeClass('xanh');
    if(vitri == 1){
        vitri = $('.nutslide ul li').length +1 ;
    }
    $('.nutslide ul li:nth-child('+(vitri-1)+')').addClass('xanh');
    // end xu ly cho phan nut

    if(truoc.length == 1){
        $('.active').addClass('bienmatobenphai').one('webkitAnimationEnd', function (e) {
            $('.bienmatobenphai').removeClass('bienmatobenphai')
        });
        truoc.addClass('divaotubentrai').one('webkitAnimationEnd', function (e) {
            $('.active').removeClass('active');
            $('.divaotubentrai').addClass('active').removeClass('divaotubentrai');
       
    });
    } 
    else 
    {
        $('.active').addClass('bienmatobenphai').one('webkitAnimationEnd', function (e) {
            $('.bienmatobenphai').removeClass('bienmatobenphai')
        });
        $('.anhslide ._1slide:last-child').addClass('divaotubentrai').one('webkitAnimationEnd', function (e) {
            $('.active').removeClass('active');
            $('.divaotubentrai').addClass('active').removeClass('divaotubentrai');
    });
}
});

// end prev
// code cho slide nut chuyen ben duoi
$('.nutslide ul li').click(function (e) { 
    $('.nutslide ul li').removeClass('xanh');
    $(this).addClass('xanh');
    $('.active').addClass('bienmatobenphai').one('webkitAnimationEnd', function (e) {
        $('.bienmatobenphai').removeClass('bienmatobenphai')
    });
    $('.anhslide ._1slide:nth-child('+($(this).index()+1)+')').addClass('divaotubentrai').one('webkitAnimationEnd', function (e) {
        $('.active').removeClass('active');
        $('.divaotubentrai').addClass('active').removeClass('divaotubentrai');
    });
    
});
// end cho slide nut chuyen ben duoi

});




