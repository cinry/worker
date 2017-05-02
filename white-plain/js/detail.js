/**
 * Created by admin on 2017/4/11.
 */

var title = $('.breadcrumb li a').eq(0).text();
// 判断是否登陆
function isLogin() {
    if(sessionStorage.uid) {
        return true
    }else {
        return false
    }
}
// 提示登陆
(function () {
    if (isLogin()===true){
        $('.getUp').slideUp("slow");
    }
})();
$('.getUp>a').on('click',function () {
    location.href='index.html#login';

});

    $('.tab>button').on('click', function (e) {
        var state = $(this).attr('state');
        if (state == 'false') {
            $('.tab>button').attr('state', "false");
            $(this).attr('state', "true");
        }
        if ( e && e.preventDefault ){
            e.preventDefault();
        } else{
            window.event.returnValue = false;
        }
        return false
    });



//加入购物车
    $('.add').on('click', function (e) {
        if (isLogin()===true){
            var product = $('.product').text();
            var tab = $('.tab>button[state="true"]>span').text();
            var price = $('.tab>button[state="true"]').text();
            var obj = {};
            obj.product = product;
            obj.tab = tab;
            obj.price = price;
            console.log(obj);
            $.post('http://192.168.0.125:8081/genetell-rf/shoping/addShopCar.do?goods_id=4',function (data) {
                console.log(data);
                if (data.msg==='添加购物车成功') {
                    var offset = $('#end').offset(), flyer = $('<div class="u-flyer"></div>');
                    flyer.fly({
                        start: {
                            left: e.clientX,
                            top: e.clientY
                        },
                        end: {
                            left: offset.left,
                            top: offset.top - document.body.scrollTop,
                        },
                        vertex_Rtop: 0,
                        onEnd: function() {
                            this.destory(); //销毁抛物体
                        }
                    });
                }else {
                    $('#tip').text(data.msg);
                    $("#tip").show().animate({width: '200px'},300).fadeOut(500);////成功加入购物车动画效果
                }
            });
        }else {
            alert('请先登陆')
        }
        if ( e && e.preventDefault ){
            e.preventDefault();
        } else{
            window.event.returnValue = false;
        }
        return false
    });




    // $('.add').one('click',function (event) {
    //     var offset = $('#end').offset(), flyer = $('<div class="u-flyer"></div>');
    //     flyer.fly({
    //         start: {
    //             left: event.clientX,
    //             top: event.clientY
    //         },
    //         end: {
    //             left: offset.left,
    //             top: offset.top - document.body.scrollTop,
    //         },
    //         vertex_Rtop: 0,
    //         onEnd: function() {
    //             this.destory(); //销毁抛物体
    //         }
    //     });
    //
    // });

//立即购买
$('.buy').on('click', function (e) {
    if (isLogin()===true) {
        var template = Handlebars.compile(tplShopping);
        var product = $('.product').text();
        var tab = $('.tab>button[state="true"]>span').text();
        var price = $('.tab>button[state="true"]').text();
        var obj = {};
        obj.product = product;
        obj.tab = tab;
        obj.price = price;
        console.log(obj);
        var context = [];
        context.push(obj);
        //匹配json内容
        var html = template(context);
        //输入模板
        $('#tpl').html(html);
    }else {
        alert('请先登陆')
    }
    if ( e && e.preventDefault ){
        e.preventDefault();
    } else{
        window.event.returnValue = false;
    }
    return false
});


// 购物车页面加载
$('.jumpChar').click(function () {
    open('char.html')
});


