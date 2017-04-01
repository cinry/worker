$(function(){
    // 满屏
    $('#fullpage').fullpage({
        menu:'#menu',
        anchors: ['page1', 'page2', 'page3', 'page4']
    });

     // 轮播
    (function () {
        var n=0;
        $('.fir li').eq(n).css('background','#9adfff');
        setInterval(function () {
            n++;
            if (n>1) {
                n=0;
            }
            $('.fir img').attr('src','img/banner'+(n+1)+'.png');
            $('.fir li').css('background','none');
            $('.fir li').eq(n).css('background','#9adfff');
        },2000);
    }());

    // 验证码
    $('#myButton').on('click', function () {
        var $btn = $(this);
        var time = 60;
        $btn.text(time+'秒');
        $btn.attr('disabled','disabled');
        var val=setInterval(function () {
            time--;
            $btn.text(time+'秒');
            if(time<=0) {
                clearInterval(val);
                $btn.text('获取验证码');
                $btn.removeAttr('disabled');
            }
        },1000);
    });

    // 用户登陆
    $('#user').on('click',function () {
        $('.sign-in').hide();
        $('.log-in').show();

    });

    $('.toggle').on('click',function () {
        $('.sign-in,.log-in').toggle();
        return false;
    });

    /*视频处理区*/
    //获取宽高
    function getH() {
        var vHeight = $('#geneClassVideo').innerHeight();
        $('#geneClassVideo').css('height',videoOb);
        $('#vedioCover').css('height',vHeight);
    }
    $(window).resize(getH);
    setTimeout(getH,100);
//    $('.cover').css('top',vHeight);
    var videoOb = document.getElementById("geneClassVideo");
    $('#vedioCover').mouseover(function(){
        $(this).find('img').show();
    });
    $('#vedioCover').mouseout(function(){
        if(!videoOb.paused){
            $(this).find('img').hide();
        }
    });
    $('#playPauseButton').click(function(){
        $(this).parent().css('background-image','none');
        if(videoOb.paused){
            $(this).parent().css('background-color','rgba(0,0,0,0)');
            $(this).attr('src','img/pause.png');
            videoOb.play();
        }else{
            $(this).parent().css('background-color','rgba(0,0,0,0.2)');
            $(this).attr('src','img/play.png');
            videoOb.pause();
        }
    });
});
