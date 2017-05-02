$(function(){
    // 判断登陆弹框
    if (location.hash==='#login') {
        $('#myModal').modal('toggle');
        $('.sign-in').hide();
        $('.log-in').show();
    };
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
            if (n>2) {
                n=0;
            }
            $('.fir img').attr('src','img/banner'+(n+1)+'.png');
            $('.fir li').css('background','none');
            $('.fir li').eq(n).css('background','#9adfff');
        },2000);
    }());


    /* 用户登陆*/
    $('#user').on('click',function () {
        $('.sign-in').hide();
        $('.log-in').show();

    });
    // 切换
    $('.toggle').on('click',function () {
        $('.sign-in,.log-in').toggle();
        return false;
    });
    // 登陆
    $('#logIn').on('click',function () {
        var lis=$('.log-in form').serialize();
        $.ajax({
            type: "POST",
            url:'http://192.168.0.125:8081/genetell-rf/user/login.do',
            data:lis,
            dataType:'json',
            success:function (data) {
                if (data.msg) {
                    alert(data.msg)
                }else {
                    window.sessionStorage.uid = data.id;
                    $('#myModal').modal('toggle')
                }
            }
        });
        return false
    });

    /*注册验证*/
    $('.uName').on('blur',function () {
        var bar=false;
        state.bind($(this))(bar)
    });
    $('.pw1').on('blur',function () {
        var bar=false;
        state.bind($(this))(bar)
    });
    $('.pw2').on('blur',function () {
        var bar=false;
        if ($('.pw1').val() === $('.pw2').val()) {
            bar = true;
            $(this).next('p').text('密码正确')
        }else {
            $(this).next('p').text('密码不一样')
        }
        state.bind($(this))(bar);
        var it=$(this);
        $('.pw1').on('blur',function () {
            if ($('.pw1').val() != $('.pw2').val()) {
                bar=false
            }else {
                bar=true
            }
            state.bind(it)(bar);
        })
    });
    $('.tel').on('blur',function () {
        var bar=false;
        state.bind($(this))(bar)
    });
    // 输入框状态样式
    function state(bar) {
        $(this).parent().removeClass('has-warning');
        $(this).parent().toggleClass('has-success',bar);
        $(this).parent().toggleClass('has-error',!bar)
    }

    /* 验证码*/
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
        var tel=$('.tel').val();
        $.post('http://192.168.0.125:8081/genetell-rf/reg/getSmsCode.do',{tel:13407146805},
        function (data) {
            console.log(data)
        })
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
